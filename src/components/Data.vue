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
    }, 
    filterData() {
      
    },

  },
}
</script>

<template>
  <ul>
    <li v-for="paper in papers">
      <article>
        <a :href="paper.url">
          <h4 class="text-xl">{{ paper.name }}</h4>
          <p>{{ paper.published_at }}: FIXME von {{ paper.originator }}</p>
        </a>
      </article>
    </li>
  </ul>
</template>