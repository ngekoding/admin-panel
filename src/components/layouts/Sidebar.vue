<template>
  <div class="fixed top-0 w-64 h-screen border-r border-gray-200 overflow-y-auto">
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img src="@/assets/logo.svg" alt="Logo" class="w-10">
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-gray-700 font-medium">Admin Panel</h1>
        <p class="text-gray-400 text-xs">VueJS + Vite + Tailwind</p>
      </div>
    </header>
    <!-- Menu -->
    <div class="px-5 mt-14">
      <menu-header>Menu</menu-header>
      <menu-item icon="home">Home</menu-item>
      <menu-item icon="view-grid">Accounts</menu-item>
      <menu-item icon="credit-card">Cards</menu-item>
      <menu-item icon="users">Contacts</menu-item>
      <menu-item icon="calculator">Loan Calculator</menu-item>
      <menu-item icon="cog">Settings</menu-item>

      <menu-header class="mt-10">Scheduled Payments</menu-header>
      <menu-item icon="check-circle" icon-class="text-blue-400">Monthly Rent</menu-item>
      <menu-item icon="check-circle" icon-class="text-red-400">Food Payment</menu-item>
      <menu-item icon="check-circle" icon-class="text-green-400">Utility Bills</menu-item>
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/components/layouts/SidebarMenuHeader.vue'
import MenuItem from '@/components/layouts/SidebarMenuItem.vue'
export default {
  name: 'Sidebar',
  components: {
    MenuHeader,
    MenuItem,
  }
}
</script>