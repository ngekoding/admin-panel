<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div class="bg-green-50 rounded-xl p-5">
      <credit-card-icon-o class="w-10 h-10 text-green-500" />
      <p class="mt-8 text-green-500 text-sm">Transfer via card number</p>
    </div>
    <div class="bg-purple-50 rounded-xl p-5">
      <chart-pie-icon-o class="w-10 h-10 text-purple-500" />
      <p class="mt-8 text-purple-500 text-sm">Transfer to another bank</p>
    </div>
    <div class="bg-yellow-50 rounded-xl p-5">
      <user-group-icon-o class="w-10 h-10 text-yellow-500" />
      <p class="mt-8 text-yellow-500 text-sm">Transfer to the same bank</p>
    </div>
    <div class="bg-blue-50 rounded-xl p-5">
      <library-icon-o class="w-10 h-10 text-blue-500" />
      <p class="mt-8 text-blue-500 text-sm">Request cash withdrawals</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>