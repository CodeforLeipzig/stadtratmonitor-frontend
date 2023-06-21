<script lang="ts">
import { type Papers } from '@/App.vue'

export default {
  props: {
    search: Object,
    filter: Object,
    topics: Object,
  },
  computed: {
    filteredData() {
      const paperQuery: String = this.search?.value
      let filteredTopics: any = this.topics?.paper
      if (paperQuery !== '') {
        filteredTopics = this.topics?.paper.filter((paper: any) => {
          return paper.name.toLowerCase().includes(paperQuery.toLowerCase()) || paper.content.toLowerCase().includes(paperQuery.toLowerCase()) || paper.reference.toLowerCase().includes(paperQuery.toLowerCase())
        })
      }
      if (this.filter?.type !== '') {
        filteredTopics = filteredTopics.filter((topic: any) => {
          return topic.reference.includes(this.filter?.type.key) && topic.paper_type.includes(this.filter?.type.value)
        })
      }
      if (this.filter?.originator !== '') {
        filteredTopics = filteredTopics.filter((topic: any) => {
          return topic.originator.includes(this.filter?.originator)
        })
      }
      return filteredTopics
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
    v-if="filteredData"
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
<!--   <p
    class="flex place-content-center my-60 text-lg"
    v-else-if="topics?.length"
    >Für dieses Anfrage liegen uns keine Ergebnisse vor.
  </p> -->
  <p
    class="flex place-content-center my-60 text-lg"
    v-else
    >Da scheint etwas schief gelaufen zu sein.
  </p>
</template>