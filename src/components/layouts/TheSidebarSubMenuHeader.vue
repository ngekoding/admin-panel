<template>
  <div class="px-5 text-xs text-gray-300 my-2">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SidebarSubMenuHeader',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>