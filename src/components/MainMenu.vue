<script lang="ts">
export default {
  data() {
    return {
      entries: this.mainMenuEntries
    }
  }
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