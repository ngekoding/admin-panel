<template>
  <div class="px-5 text-sm text-purple-500 font-medium my-2">
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