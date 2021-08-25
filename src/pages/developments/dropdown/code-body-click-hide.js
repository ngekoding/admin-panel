export default 
`<dropdown hide-on-click>
  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>
  <template #body>
    <p class="text-sm text-purple-500 px-3">This content will be hidden if you click any area of dropdown body.</p>
    <ul>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
    </ul>
  </template>
</dropdown>`