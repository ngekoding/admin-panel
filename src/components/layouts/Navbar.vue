<template>
  <div class="fixed z-20 top-0 left-0 lg:left-64 right-0 h-14 bg-white border-b border-gray-200 flex flex-row items-center justify-between px-5">
    <h3 class="text-sm font-medium text-gray-600">Welcome, Nur</h3>
    <div class="flex">
      <div class="group flex items-center mr-3 cursor-pointer" @click="viewSource()">
        <span class="text-sm  text-gray-600 group-hover:text-gray-800">GitHub</span>
        <external-link-icon-o class="ml-1 w-4 h-4 text-gray-600 group-hover:text-gray-800" />
      </div>
      <div class="relative flex justify-center items-center w-6 h-6 rounded-full bg-gray-200">
        <bell-icon-s class="w-3.5 h-3.5 text-gray-600" />
        <div class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-400 rounded-full" />
      </div>
      <dropdown origin="right" body-class="top-8">
        <img src="@/assets/avatar.png" alt="Avatar" class="ml-3 w-6 h-6 rounded-full">
        <template #body>
          <ul>
            <li class="px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500">Profile</li>
            <li class="px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500">Account settings</li>
            <li class="px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500">Sign out</li>
          </ul>
        </template>
      </dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
  name: 'Navbar',
  components: {
    Dropdown
  },
  methods: {
    viewSource() {
      window.open('https://github.com/ngekoding/admin-panel', '_blank')
    }
  }
}
</script>