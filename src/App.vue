<script lang="ts">
import MainMenu from './components/MainMenu.vue'
import SearchBar from './components/SearchBar.vue'
import FilterView from './components/papers/FilterView.vue'
import PaperList from './components/papers/PaperList.vue'
import FooterMenu from './components/FooterMenu.vue'

export default {
  components: {
    MainMenu,
    SearchBar,
    FilterView,
    PaperList,
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
      papers: [],
      paperFilter: {
        type: '',
        originator: '',
      },
    }
  }
}
</script>

<template>
  <header class="w-screen flex flex-col place-content-center bg-background-100 dark:bg-background-900 text-text-900 dark:text-text-100">
    <div class="flex flex-row place-content-center">
      <h1 class="p-2 text-xl">{{ applicationName }} {{ cityName }}</h1>
      <MainMenu />
    </div>
    <SearchBar
      @searchSubmit="(type) => search.type = type"
      @searchQuery="(query) => search.value = query"
    />
  </header>

  <main class="flex flex-row max-w-5xl m-auto">
    <FilterView
      @paperFilter="(filter) => paperFilter = filter"
      :papers="papers"
    />
    <PaperList
      @papers="(p) => papers = p"
      :paperQuery="search"
      :paperFilter="paperFilter"
    />
  </main>

  <footer>
    <FooterMenu />
  </footer>
</template>