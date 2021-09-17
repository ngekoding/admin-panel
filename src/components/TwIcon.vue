<template>
  <component :is="icon" />
</template>

<script>
import { computed, defineComponent } from 'vue'
import Iconify from '@purge-icons/generated'

export default {
  name: 'TwIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const iconData = Iconify.renderHTML(props.name)
    const icon = computed(() => defineComponent({
      template: iconData
    }))

    return { icon }
  }
}
</script>