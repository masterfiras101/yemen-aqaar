

import './assets/css/style.css'
import App from './App.vue'

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.mount('#app')





