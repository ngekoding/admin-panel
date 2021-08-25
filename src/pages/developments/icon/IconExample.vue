<template>
  <h1 class="text-2xl font-medium mb-1">Icon</h1>
  <p class="text-base text-gray-800">Admin Panel use <a href="https://heroicons.com" target="_blank" class="text-purple-500 hover:text-purple-600">Heroicons</a> as mentioned on <a href="https://tailwindcss.com/resources" target="_blank" class="text-purple-500 hover:text-purple-600">Tailwind CSS - Resources</a>.<br>And for simplicity used, I combining with <a href="https://github.com/antfu/vite-plugin-components" target="_blank" class="text-purple-500 hover:text-purple-600">vite-plugin-components</a> to make it imported on-demand.</p>
  <br>
  <p>Use the suffix to choose outline or solid icon, like <span class="font-mono text-sm text-purple-500">{name}-icon-s</span> for solid and <span class="font-mono text-sm text-purple-500">{name}-icon-o</span> for outline.</p>
  
  <br>

  <h2 class="text-xl font-medium mb-1">Basic usage</h2>
  <p class="text-base text-gray-800">Just use the icon name from Heroicons.</p>
  <code-preview-editor :source="codeBasicUsage" :components="components" />
</template>

<script>
import { shallowRef } from 'vue'
import CodePreviewEditor from '@/components/CodePreviewEditor.vue'

import codeBasicUsage from './code-basic-usage'

import { HomeIcon as HomeIconSolid } from '@heroicons/vue/solid'
import { HomeIcon as HomeIconOutline } from '@heroicons/vue/outline'

export default {
  name: 'IconExample',
  components: {
    CodePreviewEditor
  },
  data() {
    return {
      components: {
        'home-icon-s': shallowRef(HomeIconSolid), 
        'home-icon-o': shallowRef(HomeIconOutline), 
      },
      codeBasicUsage: codeBasicUsage
    }
  }
}
</script>