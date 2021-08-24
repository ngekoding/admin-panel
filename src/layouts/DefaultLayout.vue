<template>
  <!-- Sidebar -->
  <sidebar @visibility-change="visible => visibleResponsiveSidebar = visible" />
  <!-- Content Container-->
  <div class="min-h-screen" :class="{'overflow-hidden max-h-screen fixed': visibleResponsiveSidebar}">
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
import Sidebar from '@/components/layouts/Sidebar.vue';
import Navbar from '@/components/layouts/Navbar.vue';
export default {
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      visibleResponsiveSidebar: false
    }
  }
}
</script>