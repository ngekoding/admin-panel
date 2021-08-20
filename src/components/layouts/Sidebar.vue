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
      <menu-header text="Menu" />
      <menu-item text="Home">
        <template #icon>
          <home-icon-o class="menu-item-icon" />
        </template>
      </menu-item>
      <menu-item text="Accounts">
        <template #icon>
          <view-grid-icon-o class="menu-item-icon" />
        </template>
      </menu-item>
      <menu-item text="Cards">
        <template #icon>
          <credit-card-icon-o class="menu-item-icon" />
        </template>
      </menu-item>
      <menu-item icon="hio-users" text="Contacts">
        <template #icon>
          <users-icon-o class="menu-item-icon" />
        </template>
      </menu-item>
      <menu-item text="Loan Calculator">
        <template #icon>
          <calculator-icon-o class="menu-item-icon" />
        </template>
      </menu-item>
      <menu-item text="Settings">
        <template #icon>
          <cog-icon-o class="menu-item-icon" />
        </template>
      </menu-item>

      <menu-header class="mt-10" text="Scheduled Payments" />
      <menu-item text="Monthly Rent">
        <template #icon>
          <check-circle-icon-o class="menu-item-icon text-blue-400" />
        </template>
      </menu-item>
      <menu-item text="Food Payment">
        <template #icon>
          <check-circle-icon-o class="menu-item-icon text-red-400" />
        </template>
      </menu-item>
      <menu-item text="Utility Bills">
        <template #icon>
          <check-circle-icon-o class="menu-item-icon text-green-400" />
        </template>
      </menu-item>
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
    MenuItem
  }
}
</script>

<style>
.menu-item-icon {
  @apply w-5 h-5 text-gray-400 mr-4;
}
</style>