<template>
  <!-- Sidebar -->
  <sidebar />
  <!-- Content Container-->
  <div class="min-h-screen">
    <navbar />
    <!-- Content -->
    <div class="ml-64 pt-14 px-5">
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
  }
}
</script>