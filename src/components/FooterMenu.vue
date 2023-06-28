<script setup lang="ts">
const entries = {
  0: {
    name: 'Impressum',
    uri: '/impressum',
  }, 
  1: {
    name: 'Über diese Seite',
    uri: '/über',
  },
}
</script>

<template>
  <ul class="flex flex-row place-content-center">
    <li
      class="p-2 place-content-center"
      v-for="{entry, i} of entries"
      :key="i"
    >
      <RouterLink :to="entry.uri">{{ entry.name }}</RouterLink>
    </li>
  </ul>
</template>