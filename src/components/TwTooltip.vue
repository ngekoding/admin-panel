<template>
  <div class="relative inline-block" @mouseover="show = true" @mouseleave="show = false">
    <div
      v-if="show"
      class="absolute z-40 bg-gray-800 bg-opacity-95 px-4 py-1 rounded-md text-xs text-white whitespace-nowrap transform"
      :class="position">
      <span class="absolute w-0 h-0 border-gray-800 border-opacity-95 arrow" />
      {{ text }}
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'TwTooltip',
  props: {
    text: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value)
      }
    }
  },
  setup(props) {
    const show = ref(false)
    const position = computed(() => 'position-' + props.position)
    
    return {
      show,
      position
    }
  }
}
</script>

<style scoped>
.position-top, 
.position-bottom {
  @apply left-1/2 -translate-x-1/2;
}
.position-top .arrow,
.position-bottom .arrow {
  @apply transform left-1/2 -translate-x-1/2;
  border-left-color: transparent;
  border-right-color: transparent;
}
.position-top {
  bottom: calc(100% + 6px);
}
.position-bottom {
  top: calc(100% + 6px);
}
.position-top .arrow {
  border-width: 5px 5px 0px 5px;
  @apply top-full;
}
.position-bottom .arrow {
  border-width: 0px 5px 5px 5px;
  @apply bottom-full;
}
.position-right,
.position-left {
  @apply top-1/2 -translate-y-1/2;
}
.position-right {
  left: calc(100% + 6px);
}
.position-left {
  right: calc(100% + 6px);
}
.position-right .arrow,
.position-left .arrow {
  border-top-color: transparent;
  border-bottom-color: transparent;
  @apply transform top-1/2 -translate-y-1/2;
}
.position-right .arrow {
  border-width: 5px 5px 5px 0px;
  @apply right-full;
}
.position-left .arrow {
  border-width: 5px 0px 5px 5px;
  @apply left-full;
}
</style>