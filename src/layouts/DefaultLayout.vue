<template>
  <!-- Sidebar -->
  <sidebar @visibility-change="onSidebarVisibilityChanged" />
  <!-- Content Container-->
  <div
    class="min-h-screen"
    :class="{ 'overflow-hidden max-h-screen fixed': visibleResponsiveSidebar }">
    <navbar />
    <!-- Content -->
    <div class="lg:ml-64 pt-14 px-5">
      <div class="container mx-auto my-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Sidebar from '@/components/layouts/TheSidebar.vue'
import Navbar from '@/components/layouts/TheNavbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Sidebar,
    Navbar
  },
  setup() {
    const visibleResponsiveSidebar = ref(false)
    const onSidebarVisibilityChanged = (visible) => {
      visibleResponsiveSidebar.value = visible
    }

    return {
      visibleResponsiveSidebar,
      onSidebarVisibilityChanged
    }
  }
}
</script>