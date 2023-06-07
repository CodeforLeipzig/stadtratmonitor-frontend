<script lang="ts">
import MainMenu from './components/MainMenu.vue'
import Search from './components/Search.vue'

export default {
  components: {
    MainMenu,
    Search
  }
}
</script>

<template>
  <header class="w-screen">
    <h1 class="">{{ this.applicationName }}</h1>
    <MainMenu />
    <Search />
  </header>

  <main>
  </main>
</template>