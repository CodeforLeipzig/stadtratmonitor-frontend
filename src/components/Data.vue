<script lang="ts">
interface Paper {
  url: string
}

export default {
  created() {
    this.fetchData()
  },
  data() {
    return {
      apiUri: 'https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json', 
      papers: null,
    }
  }, 
  methods: {
    async fetchData() {
      this.papers = await (await fetch(this.apiUri)).json()
    }
  },
}
</script>

<template>
  <ul>
    <li v-for="paper in papers">
      <a :href="paper.url">{{ paper.name }}</a>
    </li>
  </ul>
</template>