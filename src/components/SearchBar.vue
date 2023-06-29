<script setup lang="ts">
import { updateSearch } from '@/stores';
import { onUpdated, ref } from 'vue';

let searchValue = ref('')
let searchType = ref('')

function submit(type: string) { searchType = ref(type) }
onUpdated(() => updateSearch(searchValue, searchType))
</script>

<template>
  <form class="sticky top-0 flex flex-row place-content-center">
    <label class="hidden" for="searchBar">Suche</label>
    <div class="flex flex-row w-full max-w-5xl">
      <input
        id="searchBar"
        class="p-6 grow bg-transparent placeholder:text-text-300 dark:placeholder:text-text-700 text-2xl text-center focus-visible:outline focus-visible:outline-current"
        type="search"
        placeholder="z. B. Thema, Name, VII-EF-08640, …"
        v-model="searchValue"
        @keyup.alt.enter.exact="submit('assist')"
        @keyup.enter.exact="submit('filter')"
        />
        <div class="flex flex-row p-4 place-content-center">
          <button
          class="py-2 px-4 bg-primary-button-500 hover:bg-primary-button-600 rounded-l-lg text-white"
          @click.prevent="submit('filter')"
          aria-keyshortcuts="Enter"
          >Suchen
        </button>
        <button
          class="py-2 px-4 bg-secondary-button-500 hover:bg-secondary-button-600 rounded-r-lg text-white"
          @click.prevent="submit('assist')"
          aria-keyshortcuts="Alt+Enter"
          title="Tastenkürzel: Alt + Enter"
          >Fragen
        </button>
      </div>
    </div>
  </form>
</template>