<script setup lang="ts">
import type { Paper, Search, Filter } from '@/types'
import { state, papersFetch } from '@/store'
import MainMenu from '@/components/MainMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
import FilterView from './components/papers/FilterView.vue'
import FooterMenu from '@/components/FooterMenu.vue'
import { onMounted } from 'vue'

const applicationName: string = 'Stadtratmonitor'
const cityName: string = 'Leipzig'
let search: Search = {
  value: '',
  type: '',
}
let filter: Filter = {
  type: {
    key: '',
    value: '',
  },
  originator: '',
}
onMounted (() => papersFetch() )
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
    <SearchBar
      @searchSubmit="(type) => search.type = type"
      @searchQuery="(query) => search.value = query"
    />
  </header>

  <main class="flex flex-row max-w-5xl m-auto">
    {{ state.topics }}
    <RouterView
      :search="search"
      :filter="filter"
      >
    </RouterView>
  </main>
  <footer>
    <!-- <FooterMenu /> -->
  </footer>
</template>