<template>
  <div class="page-example">
    <h1>Icon</h1>
    <p>Admin Panel use <a href="https://heroicons.com" target="_blank">Heroicons</a> as mentioned on <a href="https://tailwindcss.com/resources" target="_blank">Tailwind CSS - Resources</a>.<br>And for simplicity used, I combining with <a href="https://github.com/antfu/vite-plugin-components" target="_blank">vite-plugin-components</a> to make it imported on-demand.</p>
    <p>Use the suffix to choose outline or solid icon. The pattern is <code>{name}-icon-s</code> for solid and <code>{name}-icon-o</code> for outline.</p>
    
    <h2 class="mt-8">Basic usage</h2>
    <p>Just use the icon name from Heroicons.</p>
    <code-preview-editor :source="codeBasicUsage" :components="components" />
  </div>
</template>

<script>
import { shallowRef } from 'vue'
import CodePreviewEditor from '@/components/CodePreviewEditor.vue'

import codeBasicUsage from './code-basic-usage'

import { 
  HomeIcon as HomeIconOutline,
  LightBulbIcon as LightBulbIconOutline
} from '@heroicons/vue/outline'
import { ChartPieIcon as ChartPieIconSolid } from '@heroicons/vue/solid'

export default {
  name: 'IconExample',
  components: {
    CodePreviewEditor
  },
  data() {
    return {
      components: {
        'home-icon-o': shallowRef(HomeIconOutline), 
        'light-bulb-icon-o': shallowRef(LightBulbIconOutline), 
        'chart-pie-icon-s': shallowRef(ChartPieIconSolid), 
      },
      codeBasicUsage: codeBasicUsage
    }
  }
}
</script>