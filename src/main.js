import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.css'
import '@/styles/page-example-common-style.css'
import router from '@/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
