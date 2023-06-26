<script setup lang="ts">
import type { Topic, Paper, Search, Filter } from '@/types'
import { papers } from '@/store'
import { computed } from 'vue';
import FilterSidebar from '@/components/papers/FilterSidebar.vue'
import TopicList from '@/components/papers/TopicList.vue'

const props = defineProps<{
  search: Search,
  filter: Filter,
}>()
const topics = computed(() => {
  const topicReferences = [...new Set(papers.papers?.map((paper: Paper) => paper.reference))]
  return topicReferences.map( (reference: string) => {
    return {
      'reference': reference, 
      'papers': papers.papers?.filter( (paper: Paper) => paper.reference === reference),
    }
  }) as Array<Topic>
})
</script>

<template>
  <FilterSidebar
    @filter="(filter: Filter) => filter = filter"
  />
  <TopicList
    :searchProp="search"
    :filterProp="filter"
  />
</template>