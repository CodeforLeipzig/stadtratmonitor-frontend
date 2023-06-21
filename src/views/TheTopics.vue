<script lang="ts">
import FilterView from '@/components/papers/FilterView.vue'
import PaperList from '@/components/papers/PaperList.vue'

export default {
  components: {
    FilterView,
    PaperList,
  },
  data() {
    return {
      papers: this.papers,
    }
  },
  computed: {
    topics() {
      return [...new Set(this.papers?.map((paper: any) => paper.reference))]
    }
  }
}
</script>

<template>
  <FilterView
    @paperFilter="(filter) => paperFilter = filter"
    :papers="papers"
  />
  <PaperList
    :paperQuery="search"
    :paperFilter="paperFilter"
  />
  {{ topics }}
</template>