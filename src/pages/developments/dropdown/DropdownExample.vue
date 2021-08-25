<template>
  <h1 class="text-2xl font-medium mb-1">Dropdown</h1>
  <p class="text-base text-gray-800">Toggleable menu for displaying lists of links and actions.</p>

  <br>

  <h2 class="text-xl font-medium mb-1">Basic usage</h2>
  <p class="text-base text-gray-800">Click on the dropdown menu to unfold it for more actions.</p>
  <code-preview-editor :source="codeBasicUsage" :components="components" />

  <br>

  <h2 class="text-xl font-medium mb-1">Menu hiding behavior</h2>
  <p class="text-base text-gray-800">Use <span class="text-sm font-mono text-purple-500">hide-on-click</span> to define if menu closes on clicking.</p>
  <code-preview-editor :source="codeBodyClickHide" :components="components" />

</template>

<script>
import { shallowRef } from 'vue'
import CodePreviewEditor from '@/components/CodePreviewEditor.vue'

import codeBasicUsage from './code-basic-usage'
import codeBodyClickHide from './code-body-click-hide'

import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'DropdownExample',
  components: {
    CodePreviewEditor
  },
  data() {
    return {
      components: { 
        'dropdown': shallowRef(Dropdown)
      },
      codeBasicUsage: codeBasicUsage,
      codeBodyClickHide: codeBodyClickHide
    }
  }
}
</script>