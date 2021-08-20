<template>
  <div class="text-sm text-purple-800 font-medium my-2">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuHeader',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>