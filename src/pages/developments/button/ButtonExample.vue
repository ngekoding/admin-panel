<template>
  <div class="page-example">
    <h1>Button</h1>
    <p>Commonly used button.</p>
    
    <h2 class="mt-8">Basic usage</h2>
    <tw-code-preview-editor 
      :source="codeBasicUsage" 
      :components="components" />

    <h2 class="mt-8">Sizes</h2>
    <p>Button component provides three sizes, large <code>lg</code>, medium <code>md</code> and small <code>sm</code>. Medium is the default size.</p>
    <tw-code-preview-editor 
      :source="codeSizes" 
      :components="components" />

    <h2 class="mt-8">Disabled</h2>
    <p>The <code>disabled</code> attribute determines if the button is disabled.</p>
    <tw-code-preview-editor 
      :source="codeDisabled" 
      :components="components" />
  </div>
</template>

<script>
import { shallowRef } from 'vue'

import codeBasicUsage from './code-basic-usage'
import codeSizes from './code-sizes'
import codeDisabled from './code-disabled'

import TwButton from '@/components/TwButton.vue'

export default {
  name: 'ButtonExample',

  data() {
    return {
      components: {
        'tw-button': shallowRef(TwButton)
      },
      codeBasicUsage: codeBasicUsage,
      codeSizes: codeSizes,
      codeDisabled: codeDisabled
    }
  }
}
</script>