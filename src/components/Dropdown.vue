<template>
  <div class="relative inline-block" @mouseleave="leave">
    <span @click="click()" @mouseover="hover">
      <slot name="default" />
    </span>
    <transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition duration-75 ease-out-quad"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in-quad"
      leave-to-class="opacity-0 scale-75">
      <div v-if="open" v-click-away="() => open = false" @click="bodyClick" class="transform w-52 py-2 absolute z-10 bg-white border border-gray-200 rounded-md" :class="extraBodyClass">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script>
import { directive as clickAway } from 'vue3-click-away'
export default {
  name: 'Dropdown',
  directives: {
    clickAway
  },
  props: {
    origin: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    },
    bodyClass: {
      type: [String, Array, Object]
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
  data() {
    return {
      open: false
    }
  },
  watch: {
    open(val) {
      this.$emit('show', val);
      this.$emit('hide', !val);
    }
  },
  computed: {
    dropdownOrigin() {
      return [
        `origin-top-${this.origin}`,
        `${this.origin}-0`
      ]
    },
    extraBodyClass() {
      const extraClass = [...this.dropdownOrigin]
      if (this.bodyClass) {
        if (['string', 'object'].includes(typeof this.bodyClass)) {
          extraClass.push(this.bodyClass)
        } else if (Array.isArray(this.bodyClass)) {
          extraClass.push(...this.bodyClass)
        }
      }
      return extraClass
    }
  },
  methods: {
    click() {
      if (this.trigger == 'click') this.open = !this.open
    },
    hover() {
      if (this.trigger == 'hover') this.open = true
    },
    leave() {
      if (this.trigger == 'hover') this.open = false
    },
    bodyClick() {
      if (this.hideOnClick) this.open = false
    }
  }
}
</script>