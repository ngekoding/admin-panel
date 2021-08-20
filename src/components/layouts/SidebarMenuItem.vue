<template>
  <div class="flex items-center py-3">
    <component 
      v-if="isLoaded" 
      :is="heroIcons[iconName]" 
      class="w-5 h-5 text-gray-400 mr-4"
      :class="iconClass" />
    <div class="text-sm text-gray-400 font-medium">
      <slot />
    </div>
  </div>
</template>

<script>
import * as HeroIcons from '@heroicons/vue/outline'
import { pascalCase } from 'change-case'
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: [String, Array, Object]
    }
  },
  data() {
    return {
      isLoaded: false,
      heroIcons: HeroIcons
    }
  },
  computed: {
    iconName() {
      return pascalCase(this.icon) + 'Icon'
    }
  },
  mounted() {
    this.isLoaded = true
  }
}
</script>