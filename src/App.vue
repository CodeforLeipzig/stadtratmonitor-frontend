<script lang="ts">
import MainMenu from './components/MainMenu.vue'
import Search from './components/Search.vue'
import Data from './components/Data.vue'

export default {
  components: {
    MainMenu,
    Search,
    Data,
  },
  data() {
    return {
      applicationName: this.applicationName,
    }
  }
}
</script>

<template>
  <header class="w-screen flex flex-row">
    <h1 class="">{{ applicationName }}</h1>
    <MainMenu />
    <Search />
  </header>

  <main>
    <Data />
  </main>
</template>