<script lang="ts">
import { type Papers } from './PaperList.vue'

export default {
  updated() {
    this.$emit('paperFilter', this.paperFilter)
  },
  data() {
    return {
      paperTypes: [
        {
          value: 'Anfrage',
          key: 'F',
        },
        {
          value: 'Einwohneranfrage',
          key: 'EF',
        },
        {
          value: 'Antrag',
          key: 'A',
        },
        {
          value: 'Antwort zur Anfrage',
          key: 'AW',
        },
        {
          value: 'Änderungsantrag',
          key: 'ÄA',
        },
        {
          value: 'Beschlussvorlage',
          key: 'DS',
        },
        {
          value: 'Informationsvorlage',
          key: 'Ifo',
        },
        {
          value: 'Neufassung',
          key: 'NF',
        },
        {
          value: 'Petition',
          key: 'P',
        },
        {
          value: 'Verwaltungsstandpunkt',
          key: 'VSP',
        },
        {
          value: 'Wichtige Angelegenheit',
          key: 'WA',
        },
      ],
      paperFilter: {
        type: {
          key: '',
          value: '',
        },
        originator: '',
      },
    }
  },
  props: {
    papers: Array<Papers>,
  },
  computed: {
    paperOriginators() {
      return [...new Set(this.papers?.map((paper: Papers) => paper.originator))].sort()
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
    <fieldset class="flex flex-row mb-4">
      <legend>Kategorie</legend>
      <select
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="paperFilter.type">
        <option
          v-for="(type, i) of paperTypes"
          :key="i"
          :value="type"
          >{{ type.value }}
        </option>
      </select>
      <button 
        class="pl-2"
        @click.prevent="paperFilter.type = { key: '', value: ''}"
        title="zurücksetzen"
        >✖
      </button>
    </fieldset>
    <fieldset class="flex flex-row mb-4">
      <legend>Einreicher</legend>
      <select 
        class="w-40 p-2 bg-background-100 dark:bg-background-900 rounded-lg"
        v-model="paperFilter.originator">
        <option v-for="(originator, i) of paperOriginators" :key="i">{{ originator }}</option>
      </select>
      <button 
        class="pl-2"
        @click.prevent="paperFilter.originator = ''"
        title="zurücksetzen"
        >✖
      </button>
    </fieldset>
  </form>
</template>