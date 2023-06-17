<script lang="ts">
export default {
  data() {
    return {
      menuEntries: this.footerMenuEntries,
    }
  }, 
}
</script>

<template>
  <ul class="flex flex-row place-content-center">
    <li
      v-for="{entry, i} of menuEntries"
      :key="i"
      class="p-2 place-content-center"
    >
      <a :href="entry.uri">{{ entry.name }}</a>
    </li>
  </ul>
</template>