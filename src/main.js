import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
import VueSpinner from '../VueSpinner.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseLayout', BaseLayout)
app.component('BaseButton', BaseButton)
app.component('VueSpinner', VueSpinner)

app.mount('#app')
