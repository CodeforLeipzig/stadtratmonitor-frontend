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
}
</script>

<template>
  {{ $route.name }}
</template>