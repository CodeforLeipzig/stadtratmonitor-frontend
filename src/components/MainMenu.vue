<script lang="ts">
export default {
  data() {
    return {
      menuEntries: this.menuEntries,
    }
  }, 
}
</script>

<template>
  <ul class="flex flex-row place-content-center">
    <li class="p-2 place-content-center" v-for="entry of menuEntries">
      <a :href="entry.uri">{{ entry.name }}</a>
    </li>
  </ul>
</template>