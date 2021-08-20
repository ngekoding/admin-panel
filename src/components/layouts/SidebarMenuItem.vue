<template>
  <div class="flex items-center py-3">
    <slot name="icon" />
    <div class="text-sm text-gray-400 font-medium">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuItem',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>