<script lang="ts">
import FilterView from '@/components/papers/FilterView.vue'
import TopicList from '@/components/papers/TopicList.vue'

export default {
  components: {
    FilterView,
    TopicList,
  },
  computed: {
    topics() {
      const topicReferences = [...new Set(this.papers?.map((paper: any) => paper.reference))]
      return topicReferences.map( (entry: any) => {
        return {
          'ref': entry, 
          'paper': this.papers?.find( (paper: any) => paper.reference == entry)
        }
      })
    }, 
  }, 
  props: {
    papers: Array,
    search: Object,
    filter: Object,
  }
}
</script>

<template>
  <FilterView
      @filter="(filter: any) => filter = filter"
      :papers="papers"
    />
  <TopicList
    :topics="topics"
    :search="search"
    :filter="filter"
  ></TopicList>
</template>