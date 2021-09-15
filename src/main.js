import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/styles/app.css'
import '@/styles/page-example-common-style.css'

import '@purge-icons/generated'

const app = createApp(App)

app.use(router)

app.mount('#app')
