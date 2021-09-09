<template>
  <div class="page-example">
    <h1>Tooltip</h1>
    <p>Display prompt information for mouse hover.</p>
    
    <h2 class="mt-8">Basic usage</h2>
    <p>Hover to show the tooltip. Choose the best position for your needs, either <code>top</code>, <code>bottom</code>, <code>right</code> or <code>left</code>.</p>
    <tw-code-preview-editor 
      :source="codeBasicUsage" 
      :components="components" />
  </div>
</template>

<script>
import { shallowRef } from 'vue'

import codeBasicUsage from './code-basic-usage'

import TwTooltip from "@/components/TwTooltip.vue"
import TwButton from "@/components/TwButton.vue"

export default {
  name: 'TooltipExample',
  data() {
    return {
      components: {
        'tw-tooltip': shallowRef(TwTooltip),
        'tw-button': shallowRef(TwButton)
      },
      codeBasicUsage: codeBasicUsage
    }
  }
}
</script>