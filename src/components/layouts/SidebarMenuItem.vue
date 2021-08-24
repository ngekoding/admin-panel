<template>
  <div 
    class="px-5 flex items-center py-3 cursor-default"
    :class="{'active': activeMenu, 'group hover:bg-gray-50': !activeMenu}"
    @click="onClick">
    <component 
      v-if="isLoaded" 
      :is="iconComponent" 
      class="icon w-5 h-5 text-gray-400 group-hover:text-gray-500"
      :class="iconClass" />
    <div class="pl-4 flex-grow flex items-center justify-between">
      <div class="text text-sm text-gray-400 font-medium group-hover:text-gray-500">{{ text }}</div>
      <chevron-down-icon-s 
        v-if="subMenuExists" 
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
import * as HeroIconsOutline from '@heroicons/vue/outline'
import * as HeroIconsSolid from '@heroicons/vue/solid'
import { pascalCase } from 'change-case'
export default {
  name: 'SidebarMenuItem',
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
      type: [String, Array, Object]
    },
    route: {
      type: Object
    },
    active: {
      type: Boolean
    }
  },
  data() {
    return {
      isLoaded: false,
      heroIconsOutline: HeroIconsOutline,
      heroIconsSolid: HeroIconsSolid,
      activeMenu: false,
      showSubMenu: false,
    }
  },
  watch: {
    active: {
      immediate: true,
      handler(val) {
        const active = !!val;
        this.activeMenu = active;
        if (this.subMenuExists) this.showSubMenu = active;
      }
    },
    activeMenu(val) {
      this.$emit('update:active', val)
    },
    $route: {
      immediate: true,
      handler(val) {
        if (val.name == this.route?.name || val.path == this.route?.path) {
          this.activeMenu = true;
        } else {
          this.activeMenu = false;
        }
      }
    }
  },
  computed: {
    iconComponent() {
      const iconName = pascalCase(this.icon).slice(0, -1)
      return this.icon.endsWith('o') 
        ? this.heroIconsOutline[iconName]
        : this.heroIconsSolid[iconName]
    },
    subMenuExists() {
      return !!this.$slots['sub-menu']
    }
  },
  methods: {
    onClick() {
      if (this.subMenuExists) this.toggleSubMenu()
      else if (this.route) this.$router.push(this.route)
      else console.log('No action found!')
    },
    toggleSubMenu() {
      if (!this.subMenuExists) return
      this.showSubMenu = !this.showSubMenu
    },
    setActiveMenu(val) {
      this.activeMenu = val
    }
  },
  mounted() {
    this.isLoaded = true
  }
}
</script>

<style scoped>
.active {
  @apply bg-purple-50;
}
.active .icon,
.active .text {
  @apply text-purple-500;
}
</style>