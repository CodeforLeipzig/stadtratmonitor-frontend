<script lang="ts">
import FilterView from '@/components/papers/FilterView.vue'
import TopicList from '@/components/papers/TopicList.vue'

export default {
  components: {
    FilterView,
    TopicList,
  },
  computed: {
    topics(): Array<Object> {
      const topicReferences = [...new Set(this.papers?.map((paper: any) => paper.reference))]
      return topicReferences.map( (ref: String) => {
        return {
          'ref': ref, 
          'papers': this.papers?.filter( (paper: any) => paper.reference === ref) as Object,
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