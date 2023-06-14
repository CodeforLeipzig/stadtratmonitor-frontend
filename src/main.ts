import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties = {
  ...app.config.globalProperties,
  apiUri: 'https://joergreichert.de/srm/input.json',
  applicationName: 'Stadtratmonitor',
  cityName: 'Leipzig',
  mainMenuEntries: {
    0: {
      name: 'Startseite',
      uri: '/',
    }, 
    1: {
      name: 'Karte',
      uri: '/karte'
    },
    2: {
      name: 'Glossar', 
      uri: '/glossar'
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

app.mount('#app')
