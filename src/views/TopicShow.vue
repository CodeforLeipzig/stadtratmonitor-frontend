<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { state } from '@/stores';
import type { Paper, Topic } from '@/types';

const router = useRouter()
const route = useRoute()

const routeId = computed(() => {
  return route.params.reference
})
const topic = computed(() => {
  return state.topics?.find( (topic: Topic) => topic.reference == routeId.value )
})
const firstPaper = computed(() => {
  return topic.value?.papers[0] as Paper
})
const subject = computed(() => {
  const subjectStart = firstPaper?.value.content.search(/(?<=Sachverhalt)/g) || 0
  const subjectEnd = firstPaper?.value.content.search(/Anlage/g)

  return firstPaper.value?.content.substring(subjectStart, subjectEnd).trim()
})

function goBack() {
  return router.go(-1)
}
</script>

<template>
  <div class="flex flex-row gap-4 justify-center mt-4 w-full">
    <button
      class="bg-background-100 dark:bg-background-900 p-4 rounded-lg"
      @click.prevent="goBack()"
      >🔙
    </button>
    <h2 class="grow text-center m-auto text-xl">{{ topic?.papers[0].name }}</h2>
    <a
      class="bg-background-100 dark:bg-background-900 p-4 rounded-lg"
      :href="firstPaper?.url"
      >🔗
    </a>
  </div>
  <div>
    <h3 class="text-2xl">Betreff</h3>
    <p class="whitespace-pre">{{ subject }}</p>
  </div>
  <div class="p-8 mt-10 bg-background-100 dark:bg-background-900 rounded-xl">
    <h3 class="text-2xl">Dokumente</h3>
    <ul class="list-disc">
      <li
        v-for="(paper, i) of topic?.papers"
        :key="i"
        >
        <p>{{ paper.name }}</p>
      </li>
    </ul>
  </div>
</template>