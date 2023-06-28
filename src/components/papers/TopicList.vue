<script setup lang="ts">
import { state } from '@/stores'
import type { Topic } from '@/types';
import { computed, onMounted, onUpdated } from 'vue';

const filteredData = computed(() => {
  const searchValue: string = state.search.value;
  let filteredTopics = state.topics
  let testi = null
  
  if (searchValue !== '') {
    filteredTopics = state.topics?.filter((topic: Topic) => {
      return topic.papers?.filter((paper) => {
        paper.name.toLowerCase().includes(searchValue.toLowerCase())
        // || paper.content.toLowerCase().includes(searchValue.toLowerCase())
        // || paper.reference.toLowerCase().includes(searchValue.toLowerCase())
        testi = paper.name.toLowerCase().includes(searchValue.toLowerCase())
      })
    })
  }
  console.log(testi)
  /* if (this.filter?.type !== '') {
    filteredTopics = filteredTopics.filter((topic: any) => {
      return topic.reference.includes(this.filter?.type.key) && topic.paper_type.includes(this.filter?.type.value)
    })
  } */
  /* if (this.filter?.originator !== '') {
    filteredTopics = filteredTopics.filter((topic: any) => {
      return topic.originator.includes(this.filter?.originator)
    })
  } */
  return filteredTopics
})
let filteredDataLength: number = 0

function objectLength(data: any) {
  return Object.keys(data).length
}
function date(paperDate: string) {
  const date = new Date(paperDate)
  return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(date)
}
onMounted(() => {
  filteredDataLength = objectLength(filteredData)
})
onUpdated(() => {
  filteredDataLength = objectLength(filteredData)
})
</script>

<template>
  {{ filteredData }}
  <ul
    v-if="filteredDataLength > 0"
    class="w-full grid grid-flow-row gap-2 my-2"
  >
    <p>Wir konnten {{ filteredDataLength }} Einträge finden</p>
    <li 
      v-for="(topic, i) in filteredData"
      :key="i"
    >
      <article
        class="p-4 rounded-lg bg-background-100 dark:bg-background-900"
      >
        <h4 class="text-xl">{{ topic.papers[0].name }}</h4>
        <p>{{ date(topic.papers[0].published_at) }}: <a :href="topic.papers[0].url" class="text-secondary-button-500">{{ topic.papers[0].paper_type}} von {{ topic.papers[0].originator }}</a></p>
      </article>
    </li>
  </ul>
  <p
    class="flex place-content-center my-60 text-lg"
    v-else-if="state.topics?.length"
    >Für dieses Anfrage liegen uns keine Ergebnisse vor.
  </p>
  <p
    class="flex place-content-center my-60 text-lg"
    v-else
    >Da scheint etwas schief gelaufen zu sein.
  </p>
</template>