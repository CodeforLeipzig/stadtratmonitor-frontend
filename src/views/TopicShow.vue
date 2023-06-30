<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { state } from '@/stores';
import type { Topic } from '@/types';

const router = useRouter()
const route = useRoute()

const routeId = computed(() => {
  return route.params.reference
})
const topic = computed(() => {
  return state.topics?.find( (topic: Topic) => topic.reference == routeId.value )
})
const firstPaper = computed(() => {
  return topic.value?.papers[0]
})

function goBack() {
  return router.go(-1)
}
</script>

<template>
  <div class="flex flex-row gap-4 justify-center mt-4">
    <button
      class="bg-background-100 dark:bg-background-900 p-4 rounded-lg"
      @click.prevent="goBack()"
      >🔙
    </button>
    <p>{{ topic?.papers[0].name }}</p>
    <p>{{ routeId }}</p>
    <a
      class="bg-background-100 dark:bg-background-900 p-4 rounded-lg"
      :href="firstPaper?.url"
      >🔗
    </a>
  </div>
  <div class="p-8 mt-10 bg-background-100 dark:bg-background-900 rounded-xl">
    <p class="text-2xl">Dokumente</p>
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