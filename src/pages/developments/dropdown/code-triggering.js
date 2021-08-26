export default 
`<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center items-center border-r border-gray-200">
    <p class="text-sm text-gray-400 mb-2">Hover to trigger</p>
    <!-- Here we use 'hover' for the trigger -->
    <dropdown trigger="hover">
      <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Hover me!</button>
      <template #body>
        <ul>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
        </ul>
      </template>
    </dropdown>
  </div>
  <div class="flex flex-col justify-center items-center">
    <p class="text-sm text-gray-400 mb-2">Click to trigger</p>
    <dropdown>
      <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>
      <template #body>
        <ul>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
        </ul>
      </template>
    </dropdown>
  </div>
</div>`