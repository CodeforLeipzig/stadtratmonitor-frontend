<script lang="ts">
import MainMenu from '@/components/MainMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
import FilterView from './components/papers/FilterView.vue'
import FooterMenu from '@/components/FooterMenu.vue'

export type Papers = {
  body: string
  content: string
  name: string
  resolution: string
  originator: string
  paper_type: string
  published_at: string
  reference: string
  url: string
}

export default {
  components: {
    MainMenu,
    SearchBar,
    FilterView,
    FooterMenu,
  },
  data() {
    return {
      applicationName: this.applicationName,
      cityName: this.cityName,
      search: {
        value: '',
        type: '',
      },
      filter: {
        type: {
          key: '',
          value: '',
        },
        originator: '',
      },
      apiUri: 'https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json', 
      papers: [] as Papers[],
    }
  },
  methods: {
    async fetchData() {
      this.papers = await (await fetch(this.apiUri)).json()
    }, 
  },
  created() {
    this.fetchData()
  },
}
</script>

<template>
  <header class="w-screen flex flex-col place-content-center bg-background-100 dark:bg-background-900 text-text-900 dark:text-text-100">
    <div class="flex flex-row place-content-center">
      <h1 class="p-2 text-xl">
        <RouterLink to="/">{{ applicationName }} {{ cityName }}</RouterLink></h1>
      <MainMenu />
    </div>
    <SearchBar
      @searchSubmit="(type) => search.type = type"
      @searchQuery="(query) => search.value = query"
    />
  </header>

  <main class="flex flex-row max-w-5xl m-auto">

  </main>
    <RouterView
      :papers="papers"
      :search="search"
      :filter="filter"
    ></RouterView>
  <footer>
    <!-- <FooterMenu /> -->
  </footer>
</template>