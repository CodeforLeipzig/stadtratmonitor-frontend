<script lang="ts">
import { toValue } from 'vue'
import { Papers } from './Papers.vue'

export default {
  updated() {
    this.$emit('paperFilter', this.paperFilter)
    /* this.paperFilter.type = this.paperTypes.key this.paperFilter.type. */
  },
  data() {
    return {
      paperTypes: [
        {
          key: 'DS',
          value: 'Beschlussvorlage',
        },
        {
          key: 'A',
          value: 'Antrag',
        }
      ],
      paperFilter: {
        type: '',
        originator: '',
      },
    }
  },
  props: {
    papers: Array<Papers>,
  },
  computed: {
    paperOriginators() {
      return [...new Set(this.papers?.map((paper: Papers) => paper.originator))]
    },
    /* paperType() {
      return this.paperTypes.filter((type) => type.key == )
    }, */
  },
  methods: {

  }
}
</script>

<template>
  <form class="mr-4 mt-4">
    <select
      class="w-40"
      v-model="paperFilter.type">
      <option
        v-for="(type, i) of paperTypes"
        :key="i"
        >{{ type.value }}
      </option>
    </select>
    <select 
      class="w-40"
      v-model="paperFilter.originator">
      <option v-for="(originator, i) of paperOriginators" :key="i">{{ originator }}</option>
    </select>
  </form>
</template>