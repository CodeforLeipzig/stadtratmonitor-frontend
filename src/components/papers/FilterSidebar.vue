<script setup lang="ts">
import type { Paper, Filter } from '@/types'
import { state, updateFilter } from '@/stores';
import { computed, onUpdated } from 'vue';

const paperTypes = [
  {
    value: 'Anfrage',
    key: 'F',
  }, {
    value: 'Einwohneranfrage',
    key: 'EF',
  }, {
    value: 'Antrag',
    key: 'A',
  }, {
    value: 'Antwort zur Anfrage',
    key: 'AW',
  }, {
    value: 'Änderungsantrag',
    key: 'ÄA',
  }, {
    value: 'Beschlussvorlage',
    key: 'DS',
  }, {
    value: 'Informationsvorlage',
    key: 'Ifo',
  }, {
    value: 'Neufassung',
    key: 'NF',
  }, {
    value: 'Petition',
    key: 'P',
  }, {
    value: 'Verwaltungsstandpunkt',
    key: 'VSP',
  }, {
    value: 'Wichtige Angelegenheit',
    key: 'WA',
  },
]
const filter: Filter = {
  type: {
    key: '',
    value: '',
  },
  originator: '',
}
const paperOriginators = computed(() => {
  return [...new Set(state.papers?.map((paper: Paper) => paper.originator))].sort()
})
/* const paperType = computed(() => {
  return paperTypes.filter((type) => type.key == )
}) */
onUpdated(() => {
  updateFilter(filter.type.key, filter.type.value, filter.originator)
})
</script>

<template>
  <form class="mr-4 mt-4">
    <fieldset class="flex flex-row mb-4">
      <legend>Kategorie</legend>
      <select
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="filter.type"
        >
        <option
          v-for="(type, i) of paperTypes"
          :key="i"
          :value="type"
          >{{ type.value }}
        </option>
      </select>
      <button 
        class="pl-2"
        @click.prevent="filter.type = { key: '', value: ''}"
        title="zurücksetzen"
        >✖
      </button>
    </fieldset>
    <fieldset class="flex flex-row mb-4">
      <legend>Einreicher</legend>
      <select 
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="filter.originator">
        <option
          v-for="(originator, i) of paperOriginators"
          :key="i"
          >{{ originator }}
        </option>
      </select>
      <button 
        class="pl-2"
        @click.prevent="filter.originator = ''"
        title="zurücksetzen"
        >✖
      </button>
    </fieldset>
  </form>
</template>