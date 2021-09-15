<template>
  <div class="my-3">
    <div class="border border-gray-200 border-b-0 px-5 py-6">
      <component :is="result" />
    </div>
    <transition
      enter-from-class="max-h-0"
      enter-active-class="transition-all duration-300"
      enter-to-class="max-h-screen"
      leave-from-class="max-h-screen"
      leave-active-class="transition-all duration-300"
      leave-to-class="max-h-0">
      <div 
        v-if="showCode" 
        class="relative border border-gray-200 border-b-0">
        <tw-icon name="heroicons-outline:duplicate" 
          class="absolute top-1 right-1 w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer z-10" 
          @click="copyCode()" />
        <highlightjs 
          autodetect 
          :code="source" />
      </div>
    </transition>
    <div
      class="group py-2 bg-white hover:bg-gray-50 cursor-pointer flex justify-center items-center border border-gray-200"
      @click="showCode = !showCode">
      <tw-icon name="heroicons-outline:code" class="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
      <span class="ml-2 text-sm text-gray-500 group-hover:text-gray-700">
        {{ showCode ? 'Hide' : 'Show' }} Code
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'

import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-light.css'

export default {
  name: 'TwCodePreviewEditor',
  components: {
    highlightjs: hljsVuePlugin.component
  },
  props: {
    source: {
      type: String,
      required: true
    },
    components: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const showCode = ref(false)

    const result = computed(() => {
      return {
        components: props.components,
        template: props.source
      }
    })

    const { copy } = useClipboard()
    const copyCode = () => {
      copy(props.source).then(() => {
        console.log('Copied to clipboard!')
      }).catch(err => {
        console.log('Can not copy!', err)
      })
    }

    return {
      result,
      showCode,
      copyCode
    }
  }
}
</script>

<style>
.hljs {
  @apply text-sm;
}
</style>