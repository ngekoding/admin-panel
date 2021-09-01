<template>
  <div
    ref="dropdownRef" 
    class="relative inline-block" 
    @mouseleave="leave()">
    <span 
      @click="click" 
      @mouseover="hover()">
      <slot name="default" />
    </span>
    <transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition duration-75 ease-out-quad"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in-quad"
      leave-to-class="opacity-0 scale-75">
      <div 
        v-if="open"
        class="transform w-52 py-2 absolute z-10 bg-white border border-gray-200 rounded-md" 
        :class="[
          {'origin-top-left left-0': origin == 'left'},
          {'origin-top-right right-0': origin == 'right'},
          bodyClass
        ]" 
        @click="bodyClick()">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'TwDropdown',
  props: {
    origin: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    },
    bodyClass: {
      type: [String, Array, Object],
      default: ''
    },
    hideOnClick: {
      type: Boolean
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].includes(value)
      }
    }
  },
  emits: ['show', 'hide'],
  setup(props, {emit}) {
    const open = ref(false)
    
    watch(open, (newOpen) => {
      emit('show', newOpen.value)
      emit('hide', !newOpen.value)
    })

    const triggerClick = props.trigger === 'click'
    const triggerHover = !triggerClick

    const click = () => {
      if (triggerClick) open.value = !open.value
    }
    const hover = () => {
      if (triggerHover) open.value = true
    }
    const leave = () => {
      if (triggerHover) open.value = false
    }
    const bodyClick = () => {
      if (props.hideOnClick) open.value = false
    }

    // Hide dropdown when clicking ouside dropdown area
    const dropdownRef = ref(null) 
    onClickOutside(dropdownRef, () => open.value = false)

    return {
      open,
      click,
      hover,
      leave,
      bodyClick,
      dropdownRef
    }
  },
}
</script>