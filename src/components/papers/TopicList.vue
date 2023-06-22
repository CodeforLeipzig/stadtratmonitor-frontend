<script lang="ts">
import { type Papers } from '@/App.vue'

export default {
  props: {
    search: Object,
    filter: Object,
    topics: Array<Object>,
  },
  computed: {
    filteredData(): Array<Object> {
      const paperQuery: String = this.search?.value
      let filteredTopics: Array<Object> = this.topics as Array<Object>
      /* if (paperQuery !== '') {
        filteredTopics = this.topics?.filter((topic: Object) => {
          return topic.papers?.filter().name.toLowerCase().includes(paperQuery.toLowerCase()) || paper.content.toLowerCase().includes(paperQuery.toLowerCase()) || paper.reference.toLowerCase().includes(paperQuery.toLowerCase())
        }) as Array<Object>
      } */
/*       if (this.filter?.type !== '') {
        filteredTopics = filteredTopics.filter((topic: any) => {
          return topic.reference.includes(this.filter?.type.key) && topic.paper_type.includes(this.filter?.type.value)
        })
      }
      if (this.filter?.originator !== '') {
        filteredTopics = filteredTopics.filter((topic: any) => {
          return topic.originator.includes(this.filter?.originator)
        })
      } */
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
    filteredDataLength(): Number {
      return Object.keys(this.filteredData).length
    },
  },
}
</script>

<template>
  {{ topics }}
  <ul
    v-if="filteredDataLength"
    class="w-full grid grid-flow-row gap-2 my-2"
  >
    <p>Wir konnten {{ filteredDataLength }} Einträge finden</p>
    {{ filteredData }}
    <li 
      v-for="(topic, i) in filteredData"
      :key="i"
    >
      <article
        class="p-4 rounded-lg bg-background-100 dark:bg-background-900"
        @click.prevent="openPaper()"
      >
        <h4 class="text-xl">{{ topic }}</h4>
        <p>{{ date(topic.papers[0].published_at) }}: <a :href="topic.papers[0].url" class="text-secondary-button-500">{{ paper.paper_type}} von {{ paper.originator }}</a></p>
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