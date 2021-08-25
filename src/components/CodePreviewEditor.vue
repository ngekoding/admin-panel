<template>
  <div class="my-3">
    <div class="border border-gray-200 border-b-0 rounded-t-md p-5">
      <component :is="result" />
    </div>
    <prism-editor
      class="z-0 bg-gray-800 text-gray-200 py-2 rounded-b-md text-sm font-mono" 
      v-model="code" 
      :highlight="highlighter" 
      line-numbers
      readonly />
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import prism from 'prismjs'
import 'vue-prism-editor/dist/prismeditor.min.css'
import 'prismjs/themes/prism-tomorrow.css'

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
      type: Object
    }
  },
  data() {
    return {
      code: null
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
      return prism.highlight(code, prism.languages.js)
    }
  }
}
</script>

<style>
.prism-editor__textarea:focus {
  outline: none;
}
</style>