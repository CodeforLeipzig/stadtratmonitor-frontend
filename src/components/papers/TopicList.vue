<script setup lang="ts">
import type { Topic, Search, Filter } from '@/types'
import { computed } from 'vue';

const props = defineProps<{
  topics: Array<Topic>,
  search: Search,
  filter: Filter,
}>()
const filteredData = computed(() => {
  //const searchValue: string = search['value'];
  let filteredTopics = props.topics
  /* if (searchValue !== '') {
    filteredTopics = this.topics?.filter((topic: Object) => {
      return topic.papers?.filter().name.toLowerCase().includes(searchValue.toLowerCase()) || paper.content.toLowerCase().includes(searchValue.toLowerCase()) || paper.reference.toLowerCase().includes(searchValue.toLowerCase())
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
})
const filteredDataLength = computed(() => {
  if (filteredData.value !== undefined) {
    return Object.keys(filteredData).length
  } else {
    return 0
  }
})

function date(paperDate: Date) {
  const date = new Date(paperDate)
  return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(date)
}
</script>

<template>
  <ul
    v-if="filteredDataLength"
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
        <!-- <p>{{ date(topic.papers[0].published_at) }}: <a :href="topic.papers[0].url" class="text-secondary-button-500">{{ paper.paper_type}} von {{ paper.originator }}</a></p> -->
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