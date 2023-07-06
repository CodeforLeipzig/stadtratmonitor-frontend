<script setup lang="ts">
import { fetchPapers, getTopics } from '@/stores'
import MainMenu from '@/components/MainMenu.vue'
/* import FooterMenu from '@/components/FooterMenu.vue' */
import { onMounted } from 'vue'

const applicationName: string = 'Stadtratmonitor'
const cityName: string = 'Leipzig'

onMounted (async () => {
  await fetchPapers()
  getTopics()
})
</script>

<template>
  <header class="w-screen flex flex-col place-content-center bg-background-100 dark:bg-background-900 text-text-900 dark:text-text-100">
    <div class="flex flex-row place-content-center">
      <h1 class="p-2 text-xl">
        <RouterLink
          to="/"
          >{{ applicationName }} {{ cityName }}
        </RouterLink>
      </h1>
      <MainMenu />
    </div>
  </header>
  
  <main class="flex flex-col">
    <RouterView>
    </RouterView>
  </main>
  <footer>
    <!-- <FooterMenu /> -->
  </footer>
</template>