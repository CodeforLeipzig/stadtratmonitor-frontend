<script setup lang="ts">
import { state } from '@/stores'
import type { Paper, Topic } from '@/types';
import { computed, onMounted, onUpdated } from 'vue';

const filteredData = computed(() => {
  const searchValue: string = state.search.value
  const filterTypeKey: string = state.filter.type.key
  const filterTypeValue: string = state.filter.type.value
  const filterOriginator: string = state.filter.originator
  let filteredTopics = state.topics

  if (searchValue !== '') {
    filteredTopics = filteredTopics.filter((topic: Topic) => {
      let includes = false

      topic.papers?.filter((paper: Paper) => {
        if (
          paper.name.toLowerCase().includes(searchValue.toLowerCase())
          || paper.content.toLowerCase().includes(searchValue.toLowerCase())
          || paper.reference.toLowerCase().includes(searchValue.toLowerCase())
        ) { includes = true }
      })
      return includes
    })
  }
  if (filterTypeKey !== '') {
    filteredTopics = filteredTopics.filter((topic: Topic) => {
      let includes = false

      topic.papers?.filter((paper: Paper) => {
        if (
          paper.reference.toLowerCase().includes(filterTypeKey.toLowerCase())
          && paper.paper_type.toLowerCase().includes(filterTypeValue.toLowerCase())
        ) { includes = true }
      })
      return includes
    })
  }
  if (filterOriginator !== '') {
    filteredTopics = filteredTopics.filter((topic: Topic) => {
      let includes = false

      topic.papers?.filter((paper: Paper) => {
        if (paper.originator.toLocaleLowerCase().includes(filterOriginator.toLocaleLowerCase())) { includes = true }
      })
      return includes
    })
  }
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