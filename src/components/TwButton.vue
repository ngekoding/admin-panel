<template>
  <button 
    class="btn rounded-md disabled:opacity-50 disabled:cursor-not-allowed" 
    :class="[typeClass, sizeClass, {'rounded-3xl': round}]">
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TwButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['lg', 'md', 'sm'].includes(value)
      }
    },
    round: {
      type: Boolean
    }
  },
  setup(props) {
    const typeStyles = {
      default: 'text-gray-600 border border-gray-300 hover:bg-gray-50 disabled:bg-gray-50',
      primary: 'text-white bg-purple-400 border border-purple-400 hover:opacity-90',
      success: 'text-white bg-green-400 border border-green-400 hover:opacity-90',
      warning: 'text-white bg-yellow-500 border border-yellow-500 hover:opacity-90',
      danger: 'text-white bg-red-500 border border-red-500 hover:opacity-90'
    }

    const sizeStyles = {
      lg: 'text-base px-5 py-2',
      md: 'text-sm px-5 py-2',
      sm: 'text-xs px-4 py-1.5'
    }

    const typeClass = computed(() => typeStyles[props.type])
    const sizeClass = computed(() => sizeStyles[props.size])
    
    return {
      typeClass,
      sizeClass
    }
  }
}
</script>

<style>
.btn + .btn {
  @apply ml-1.5;
}
</style>