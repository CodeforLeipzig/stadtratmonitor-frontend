<script setup lang="ts">
const entries = {
  0: {
    name: 'Themen',
    uri: '/themen',
  }, 
  1: {
    name: 'Karte',
    uri: '/karte',
  },
  2: {
    name: 'Dokumentation', 
    uri: '/doku',
  },
}
</script>

<template>
  <ul class="flex flex-row place-content-center">
    <li
      class="p-2 place-content-center"
      v-for="(entry, i) of entries"
      :key="i"
    >
      <RouterLink :to="entry.uri">{{ entry.name }}</RouterLink>
    </li>
  </ul>
</template>