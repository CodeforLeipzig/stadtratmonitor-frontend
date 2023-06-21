<script lang="ts">
import { type Papers } from '@/App.vue'

export default {
  props: {
    papers: Array<any>,
    paperQuery: Object,
    paperFilter: Object,
  },
  computed: {
    filteredData() {
      const paperQuery: String = this.paperQuery?.value
      let filteredPapers: Papers[] = this.papers
      if (paperQuery !== '') {
        filteredPapers = this.papers.filter((paper) => {
          return paper.name.toLowerCase().includes(paperQuery.toLowerCase()) || paper.content.toLowerCase().includes(paperQuery.toLowerCase()) || paper.reference.toLowerCase().includes(paperQuery.toLowerCase())
        })
      }
      if (this.paperFilter?.type !== '') {
        filteredPapers = filteredPapers.filter((paper) => {
          return paper.reference.includes(this.paperFilter?.type.key) && paper.paper_type.includes(this.paperFilter?.type.value)
        })
      }
      if (this.paperFilter?.originator !== '') {
        filteredPapers = filteredPapers.filter((paper) => {
          return paper.originator.includes(this.paperFilter?.originator)
        })
      }
      return filteredPapers
    }, 
  },
  methods: {
    openPaper() {

    },
    date(paperDate: string) {
      const date = new Date(paperDate)
      return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(date)
    },
  },
}
</script>

<template>
  <ul
    v-if="filteredData.length"
    class="w-full grid grid-flow-row gap-2 my-2"
  >
    <p>Wir konnten {{ filteredData.length }} Einträge finden</p>
    <li 
      v-for="(paper, i) in filteredData"
      :key="i"
    >
      <article
        class="p-4 rounded-lg bg-background-100 dark:bg-background-900"
        @click.prevent="openPaper()"
      >
        <h4 class="text-xl">{{ paper.name }}</h4>
        <p>{{ date(paper.published_at) }}: <a :href="paper.url" class="text-secondary-button-500">{{ paper.paper_type}} von {{ paper.originator }}</a></p>
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