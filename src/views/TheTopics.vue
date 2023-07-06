<script setup lang="ts">
import FilterSidebar from '@/components/papers/FilterSidebar.vue'
import TopicList from '@/components/papers/TopicList.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <SearchBar />
  <div
    class="flex flex-row"
    >
    <FilterSidebar />
    <TopicList />
  </div>
</template>