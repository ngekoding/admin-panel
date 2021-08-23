<template>
  <div class="fixed top-0 w-64 h-screen border-r border-gray-200 overflow-y-auto bg-white">
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img src="@/assets/logo.svg" alt="Logo" class="w-10">
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-gray-700 font-medium">Admin Panel</h1>
        <p class="text-gray-400 text-xs">VueJS + Vite + Tailwind</p>
      </div>
    </header>
    <!-- Menu -->
    <div class="mt-14">
      <menu-header text="Development" />
      <menu-item icon="lightning-bolt-icon-o" text="Getting Started" :route="{name: 'dev-getting-started'}" />
      <menu-item icon="cube-icon-o" text="Components">
        <template #sub-menu>
          <menu-item-sub text="Tables" :route="{name: 'dev-components-tables'}" />
          <menu-item-sub text="Forms" :route="{name: 'dev-components-forms'}" />
        </template>
      </menu-item>

      <menu-header class="mt-10" text="Menu" />
      <menu-item icon="home-icon-o" text="Home" :route="{path: '/'}" />
      <menu-item icon="view-grid-icon-o" text="Accounts">
        <template #sub-menu>
          <menu-item-sub text="PayPal" />
          <menu-item-sub text="ShopeePay" />
        </template>
      </menu-item>
      <menu-item icon="credit-card-icon-o" text="Cards" />
      <menu-item icon="users-icon-o" text="Contacts" />
      <menu-item icon="calculator-icon-o" text="Loan Calculator" />
      <menu-item icon="cog-icon-o" text="Settings">
        <template #sub-menu>
          <menu-item-sub text="Profile" />
          <menu-item-sub text="Security" />
        </template>
      </menu-item>

      <menu-header class="mt-10" text="Scheduled Payments" />
      <menu-item icon="check-circle-icon-o" icon-class="text-blue-400" text="Monthly Rent" />
      <menu-item icon="check-circle-icon-o" icon-class="text-red-400" text="Food Payment" />
      <menu-item icon="check-circle-icon-o" icon-class="text-green-400" text="Utility Bills" />
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/components/layouts/SidebarMenuHeader.vue'
import MenuItem from '@/components/layouts/SidebarMenuItem.vue'
import MenuItemSub from '@/components/layouts/SidebarMenuItemSub.vue'
export default {
  name: 'Sidebar',
  components: {
    MenuHeader,
    MenuItem,
    MenuItemSub,
  }
}
</script>