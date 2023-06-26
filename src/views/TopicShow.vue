<script setup lang="ts">
import { computed } from 'vue'
import type { Paper } from '@/types'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  papers: Array<Paper>,
})
const router = useRouter()
const route = useRoute()
const topicId = computed(() => {
  return route.params.id
})
const topic = computed(() => {
  props.papers?.find( (paper: any) => paper.reference == topicId )
})
</script>

<template>
  {{ $route.name }}
</template>