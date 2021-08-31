<template>
  <div class="page-example">
    <h1>Dropdown</h1>
    <p>Toggleable menu for displaying lists of links and actions.</p>

    <h2 class="mt-8">Basic usage</h2>
    <p>Click on the dropdown menu to unfold it for more actions.</p>
    <tw-code-preview-editor 
      :source="codeBasicUsage" 
      :components="components" />

    <h2 class="mt-8">How to trigger</h2>
    <p>Click the triggering element or hover on it. The default is <code>click</code>.</p>
    <tw-code-preview-editor 
      :source="codeTriggering" 
      :components="components" />

    <h2 class="mt-8">Menu hiding behavior</h2>
    <p>Use <code>hide-on-click</code> to define if menu closes on clicking.</p>
    <tw-code-preview-editor
      :source="codeBodyClickHide"
      :components="components" />
  </div>
</template>

<script>
import { shallowRef } from 'vue'

import codeBasicUsage from './code-basic-usage'
import codeTriggering from './code-triggering'
import codeBodyClickHide from './code-body-click-hide'

import Dropdown from '@/components/TwDropdown.vue'

export default {
  name: 'DropdownExample',
  data() {
    return {
      components: {
        dropdown: shallowRef(Dropdown),
      },
      codeBasicUsage: codeBasicUsage,
      codeTriggering: codeTriggering,
      codeBodyClickHide: codeBodyClickHide,
    }
  },
}
</script>