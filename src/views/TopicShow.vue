<script lang="ts">
export default {
  computed: {
    topicId() {
      return this.$route.params.id
    },
    topic() {
      this.papers?.find( (paper: any) => paper.reference == this.topicId )
    }
  },
  props: {
    papers: Array,
  },
}
</script>

<template>
  {{ $route.name }}
</template>