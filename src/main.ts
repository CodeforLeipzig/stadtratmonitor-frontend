import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.applicationName = 'Stadtratmonitor'

app.mount('#app')
