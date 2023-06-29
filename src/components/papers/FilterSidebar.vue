<script setup lang="ts">
import type { Paper, Filter } from '@/types'
import { state, updateFilter } from '@/stores';
import { computed, onUpdated, reactive, ref } from 'vue';

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
let filterTypeKey = ref('')
let filterTypeValue = ref('')
let filterType = reactive({
  key: filterTypeKey.value,
  value: filterTypeValue.value,
})
let filterOriginator = ref('')

const paperOriginators = computed(() => {
  return [...new Set(state.papers?.map((paper: Paper) => paper.originator))].sort()
})
/* const paperType = computed(() => {
  return paperTypes.filter((type) => type.key == )
}) */

function resetFilterType() {
  filterType = { key: '', value: '' }
}
function resetFilterOriginator() {
  filterOriginator.value = ''
}
onUpdated(() => {
  updateFilter(filterTypeKey, filterTypeValue, filterOriginator)
})
</script>

<template>
  <form class="mr-4 mt-4">
    <label for="typeSelect">Kategorie</label>
    <div class="flex flex-row mb-4">
      <select
        id="typeSelect"
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="filterType"
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
        @click.prevent="resetFilterType()"
        title="zurücksetzen"
        >✖
      </button>
    </div>
    <label for="originatorSelect">Einreicher</label>
    <div class="flex flex-row mb-4">
      <select 
        id="originatorSelect"
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="filterOriginator">
        <option
          v-for="(originator, i) of paperOriginators"
          :key="i"
          >{{ originator }}
        </option>
      </select>
      <button 
        class="pl-2"
        @click.prevent="resetFilterOriginator()"
        title="zurücksetzen"
        >✖
      </button>
    </div>
  </form>
</template>