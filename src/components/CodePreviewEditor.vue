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
      <div v-if="showCode" class="relative">
        <duplicate-icon-o class="absolute top-1 right-1 w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer z-10" @click="copyCode()" />
        <prism-editor
          class="z-0 bg-gray-50 text-sm font-mono border border-gray-200 border-b-0"
          v-model="code" 
          :highlight="highlighter" 
          line-numbers
          readonly />
      </div>
    </transition>
    <div class="group py-2 bg-white hover:bg-gray-50 cursor-pointer flex justify-center items-center border border-gray-200" @click="showCode = !showCode">
      <code-icon-o class="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
      <span class="ml-2 text-sm text-gray-500 group-hover:text-gray-700">
        {{ showCode ? 'Hide' : 'Show'}} Code
      </span>
    </div>
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

import { copyText } from 'vue3-clipboard'

export default {
  name: 'CodePreviewEditor',
  components: {
    PrismEditor
  },
  props: {
    source: {
      type: String,
      require: true
    },
    components: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      code: null,
      showCode: false
    }
  },
  watch: {
    source: {
      immediate: true,
      handler(val) {
        this.code = val
      }
    }
  },
  computed: {
    result() {
      return {
        components: this.components,
        template: this.code
      }
    }
  },
  methods: {
    highlighter(code) {
      return highlight(
        code, 
        {
          ...languages['markup'],
          ...languages['js'],
          ...languages['css'],
        },
        'markup'
      )
    },
    copyCode() {
      copyText(this.code, undefined, (err, evt) => {
        // TODO: Change using notification next time
        if (err) {
          console.log('Can not copy!', err)
        } else {
          console.log('Copied to clipboard!')
        }
      })
    }
  }
}
</script>

<style>
.prism-editor__line-numbers,
.prism-editor__container {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
.prism-editor__editor {
  white-space: pre !important;
}
.prism-editor__container {
  overflow-x: scroll !important;
}
.prism-editor__textarea:focus {
  outline: none;
}
</style>