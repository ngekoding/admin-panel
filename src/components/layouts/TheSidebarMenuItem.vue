<template>
  <div 
    class="px-5 flex items-center py-3 cursor-default"
    :class="{'bg-purple-50': activeMenu, 'group hover:bg-gray-50': !activeMenu}"
    @click="onClick">
    <tw-icon 
      :name="icon" 
      class="icon w-5 h-5 text-gray-400 group-hover:text-gray-500"
      :class="[iconClass, {'text-purple-500': activeMenu}]" />
    <div class="pl-4 flex-grow flex items-center justify-between">
      <div 
        class="text text-sm text-gray-400 font-medium group-hover:text-gray-500"
        :class="{'text-purple-500': activeMenu}">
        {{ text }}
      </div>
      <tw-icon
        v-if="subMenuExists"
        name="heroicons-solid:chevron-down"
        class="w-5 h-5 text-gray-400 transform transition duration-100"
        :class="{'rotate-180': showSubMenu}" />  
    </div>
  </div>
  <div 
    v-if="subMenuExists" 
    class="pl-9 h-0 overflow-hidden"
    :class="{'h-auto': showSubMenu}">
    <slot name="sub-menu" />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'TheSidebarMenuItem',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: [String, Array, Object],
      default: ''
    },
    route: {
      type: Object,
      default: () => {}
    },
    active: {
      type: Boolean
    }
  },
  emits: ['update:active'],
  setup(props, {emit, slots}) {
    const subMenuExists = computed(() => !!slots['sub-menu'])
    const showSubMenu = ref(false)
    const activeMenu = ref(false)

    watch(() => props.active, (val) => {
      activeMenu.value = val
      if (subMenuExists) showSubMenu.value = val
    }, { immediate: true })

    watch(activeMenu, (val) => emit('update:active', val))

    const route = useRoute()
    watch(route, (val) => {
      if (val.name == props.route?.name || val.path == props.route?.path) {
        activeMenu.value = true
      } else {
        activeMenu.value = false
      }
    }, { immediate: true })

    const router = useRouter()
    const onClick = () => {
      if (subMenuExists.value) showSubMenu.value = !showSubMenu.value
      else if (props.route) router.push(props.route)
      else console.log('No action found!')
    }
    
    const setActiveMenu = (val) => {
      activeMenu.value = val
    }

    return {
      subMenuExists,
      activeMenu,
      showSubMenu,
      onClick,
      setActiveMenu
    }
  }
}
</script>