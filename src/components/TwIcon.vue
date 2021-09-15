<template>
  <div ref="el" class="inline"></div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
export default {
  name: 'TwIcon',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs }) {
    const el = ref(null)

    const update = () => {
      if (el.value) {
        const span = document.createElement('span')
        span.className = 'iconify ' + attrs.class ?? ''
        span.dataset.icon = props.name
        el.value.textContent = ''
        el.value.appendChild(span)
      }
    }

    watch(() => attrs.class, update)
    watch(() => props.name, update)
    
    onMounted(update)

    return { el }
  }
}
</script>