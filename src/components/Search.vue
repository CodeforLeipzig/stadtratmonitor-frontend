<script lang="ts">
export default {
  updated() {
    this.$emit('searchQuery', this.search.value)
  },
  data() {
    return {
      search: {
        value: '',
        type: '',
      },
    }
  },
  methods: {
    submit(type: string) {
      this.search.type = type
      this.$emit('searchSubmit', this.search.type)
    }
  },
}
</script>

<template>
  <form class="sticky top-0 flex flex-row place-content-center bg-amber-200">
    <div class="flex flex-row w-full max-w-5xl">
      <input
        class="p-6 grow bg-transparent placeholder:text-amber-400 text-sky-700 text-2xl text-center focus-visible:outline focus-visible:outline-current"
        type="search"
        placeholder="z. B. XY"
        v-model="search.value"
        @keyup.alt.enter.exact="submit('assist')"
        @keyup.enter.exact="submit('filter')"
        />
        <div class="flex flex-row p-4 place-content-center">
          <button
          class="py-2 px-4 bg-amber-400 hover:bg-amber-500 rounded-l-lg border-r-2 border-amber-500 text-white"
          @click.prevent="submit('filter')"
          aria-keyshortcuts="Enter"
          >Suchen
        </button>
        <button
          class="py-2 px-4 bg-amber-400 hover:bg-amber-500 rounded-r-lg text-white"
          @click.prevent="submit('assist')"
          aria-keyshortcuts="Alt+Enter"
          title="Tastenkürzel: Alt + Enter"
          >Fragen
        </button>
      </div>
    </div>
  </form>
</template>