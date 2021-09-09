<template>
  <!-- Toggle sidebar button -->
  <button class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 lg:hidden">
    <menu-alt-4-icon-s 
      class="btn-toggle"
      :class="{'opacity-0': showSidebar}"
      @click="toggleSidebar" />
    <x-icon-s 
      class="btn-toggle"
      :class="{'opacity-0': !showSidebar}"
      @click="toggleSidebar" />
  </button>

  <!-- Sidebar Overlay -->
  <div 
    class="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" 
    :class="{'hidden': !showSidebar}" 
    @click="showSidebar = false" />
  <div 
    class="fixed z-40 left-0 top-0 right-24 lg:right-auto lg:w-64 h-screen border-r border-gray-200 overflow-y-auto bg-white" 
    :class="{'hidden': allowSidebarHide && !showSidebar}">
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img 
        src="@/assets/logo.svg" 
        alt="Logo" 
        class="w-10">
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-gray-700 font-medium">Admin Panel</h1>
        <p class="text-gray-400 text-xs">VueJS + Vite + Tailwind</p>
      </div>
    </header>
    <!-- Menu -->
    <div class="mt-14">
      <menu-header text="Development" />
      <menu-item 
        icon="lightning-bolt-icon-o" 
        text="Getting Started" 
        :route="{name: 'dev-getting-started'}" />
      <menu-item 
        icon="cube-icon-o" 
        text="Components">
        <template #sub-menu>
          <sub-menu-item 
            text="Icon" 
            :route="{name: 'dev-components-icon'}" />
          <sub-menu-item 
            text="Button" 
            :route="{name: 'dev-components-button'}" />
          <sub-menu-item 
            text="Dropdown" 
            :route="{name: 'dev-components-dropdown'}" />
          <sub-menu-item text="Card" />
          <sub-menu-item 
            text="Table" 
            :route="{name: 'dev-components-tables'}" />
          <sub-menu-item text="Tooltip" :route="{name: 'dev-components-tooltip'}" />
          <sub-menu-item text="Modal" />
          <!-- Form components -->
          <sub-menu-header text="Form" />
          <sub-menu-item text="Input" />
          <sub-menu-item text="Textarea" />
          <sub-menu-item text="Select" />
          <sub-menu-item text="Checkbox" />
          <sub-menu-item text="Radio" />
          <sub-menu-item text="Switch" />
          <sub-menu-item text="Date Picker" />
          <sub-menu-item text="Time Picker" />
          <!-- Notice components -->
          <sub-menu-header text="Notice" />
          <sub-menu-item text="Alert" />
          <sub-menu-item text="Notification" />
          <sub-menu-item text="Confirmation Dialog" />
        </template>
      </menu-item>

      <!-- Menu Header -->
      <menu-header 
        class="mt-10" 
        text="Menu" />
      <menu-item 
        icon="home-icon-o" 
        text="Home" 
        :route="{path: '/'}" />
      <menu-item 
        icon="view-grid-icon-o" 
        text="Accounts">
        <template #sub-menu>
          <sub-menu-item text="PayPal" />
          <sub-menu-item text="ShopeePay" />
        </template>
      </menu-item>
      <menu-item 
        icon="credit-card-icon-o" 
        text="Cards" />
      <menu-item 
        icon="users-icon-o" 
        text="Contacts" />
      <menu-item 
        icon="calculator-icon-o" 
        text="Loan Calculator" />
      <menu-item 
        icon="cog-icon-o" 
        text="Settings">
        <template #sub-menu>
          <sub-menu-item text="Profile" />
          <sub-menu-item text="Security" />
        </template>
      </menu-item>

      <!-- Menu Header -->
      <menu-header 
        class="mt-10" 
        text="Scheduled Payments" />
      <menu-item 
        icon="check-circle-icon-o" 
        icon-class="text-blue-400" 
        text="Monthly Rent" />
      <menu-item 
        icon="check-circle-icon-o"
        icon-class="text-red-400"
        text="Food Payment" />
      <menu-item 
        icon="check-circle-icon-o"
        icon-class="text-green-400"
        text="Utility Bills" />
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'

import MenuHeader from './TheSidebarMenuHeader.vue'
import MenuItem from './TheSidebarMenuItem.vue'
import SubMenuHeader from './TheSidebarSubMenuHeader.vue'
import SubMenuItem from './TheSidebarSubMenuItem.vue'

export default {
  name: 'TheSidebar',
  components: {
    MenuHeader,
    MenuItem,
    SubMenuHeader,
    SubMenuItem,
  },
  emits: ['visibility-change'],
  setup(_, {emit}) {
    const showSidebar = ref(false)
    const toggleSidebar = () => showSidebar.value = !showSidebar.value
    watch(showSidebar, (val) => {
      emit('visibility-change', val)
    })

    // Automatically hide sidebar when route changed
    const route = useRoute()
    watch(route, () => showSidebar.value = false)
    
    // Automatically hide sidebar when window size
    // lower than width breakpoint
    const widthBreakpoint = 1024 // Tailwind `lg` breakpoint
    const { width: windowWidth } = useWindowSize()
    watch(windowWidth, (newWidth) => {
      if (newWidth < widthBreakpoint) showSidebar.value = false
    })

    const allowSidebarHide = computed(() => windowWidth.value < widthBreakpoint)

    return {
      showSidebar,
      toggleSidebar,
      allowSidebarHide
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  @apply absolute w-6 h-6 text-white left-1/2 top-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2;
}
</style>