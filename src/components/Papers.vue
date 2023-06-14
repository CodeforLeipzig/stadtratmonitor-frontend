<script lang="ts">
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
  created() {
    this.fetchData()
  },
  updated() {
    this.$emit('papers', this.papers)
  },
  data() {
    return {
      apiUri: 'https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json', 
      papers: [] as Papers[],
    }
  }, 
  props: {
    filterValue: String,
    paperFilter: Array,
  },
  computed: {
    filteredData() {
      const filterValue: String = this.filterValue
      let filteredPapers: Papers[] = this.papers
      if (filterValue !== '') {
        filteredPapers = this.papers.filter((paper) => {
          return paper.name.toLowerCase().includes(filterValue.toLowerCase())
        })
      }
      if (this.paperFilter?.type !== '') {
        filteredPapers = filteredPapers.filter((paper) => {
          return paper.reference.includes(this.paperFilter?.type)
        })
      }
      return filteredPapers
    }
  },
  methods: {
    async fetchData() {
      this.papers = await (await fetch(this.apiUri)).json()
    }, 
    openPaper() {}
  },
}
</script>

<template>
  {{ paperFilter }}
  <ul v-if="filteredData.length">
    <li v-for="(paper, i) in filteredData" :key="i">
      <article
        class="my-4 p-2 border border-solid border-amber-300 rounded-md"
        @click.prevent="openPaper()"
      >
        <h4 class="text-xl">{{ paper.name }}</h4>
        <p>{{ paper.published_at }}: {{ paper.paper_type}} von {{ paper.originator }}</p>
      </article>
    </li>
  </ul>
  <p
    class="flex place-content-center my-60 text-lg"
    v-else-if="papers.length"
    >Für dieses Anfrage liegen uns keine Ergebnisse vor.
  </p>
  <p
    class="flex place-content-center my-60 text-lg"
    v-else
    >Da scheint etwas schief gelaufen zu sein.
  </p>
</template>