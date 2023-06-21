import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.config.globalProperties = {
  ...app.config.globalProperties,
  apiUri: 'https://joergreichert.de/srm/input.json',
  applicationName: 'Stadtratmonitor',
  cityName: 'Leipzig',
    mainMenuEntries: {
    0: {
      name: 'Themen',
      uri: '/themen',
    }, 
    1: {
      name: 'Karte',
      uri: '/karte'
    },
    2: {
      name: 'Dokumentation', 
      uri: '/doku'
    }
  },
  footerMenuEntries: {
    0: {
      name: 'Impressum',
      uri: '/impressum',
    }, 
    1: {
      name: 'Über diese Seite',
      uri: '/über'
    },
  },
}

app.use(router).mount('#app')
