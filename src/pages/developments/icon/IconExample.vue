<template>
  <div class="page-example">
    <h1>Icon</h1>
    <p>Admin Panel use <a href="https://github.com/antfu/unplugin-icons" target="_blank">unplugin-icons</a> and <a href="https://github.com/antfu/purge-icons" target="_blank">PurgeIcons</a> to make it efficient, so you will only get icons you need.</p>
    <p>
      You can use the icon component with two ways (patterns):<br>
      Using <code>tw-icon</code> component with prop <code>name</code>, e.g. <code>&lt;tw-icon name="heroicons-outline:home" /&gt;</code>.<br>
      Or directy place the icon name after <code>tw-icon</code> prefix, e.g. <code>&lt;tw-icon-heroicons-outline-home /&gt;</code>.
    </p>

    <p>You can found the complete icon name list on unplugin-icons above.</p>
    
    <h2 class="mt-8">Basic usage</h2>
    <tw-code-preview-editor 
      :source="codeBasicUsage" 
      :components="components" />
  </div>
</template>

<script>
import { shallowRef } from 'vue'

import codeBasicUsage from './code-basic-usage'

import TwIcon from '@/components/TwIcon.vue'

export default {
  name: 'IconExample',
  data() {
    return {
      components: {
        'tw-icon': shallowRef(TwIcon)
      },
      codeBasicUsage: codeBasicUsage
    }
  }
}
</script>