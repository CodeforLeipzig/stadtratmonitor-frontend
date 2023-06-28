<script setup lang="ts">
/* import { computed } from 'vue'
import type { Paper } from '@/types'
import { useRoute } from 'vue-router'

const props = defineProps({
  papers: Array<Paper>,
})
const route = useRoute()
const topicId = computed(() => {
  return route.params.id
})
const topic = computed(() => {
  return props.papers?.find( (paper: any) => paper.reference == topicId.value )
}) */
</script>

<template>
  {{ $route.name }}
</template>