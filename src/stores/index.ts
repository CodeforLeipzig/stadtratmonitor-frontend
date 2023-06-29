import { reactive, type Ref, ref } from 'vue'
import type { Filter, Paper, Search, Topic } from '@/types'

const apiUrl: URL = new URL('https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json')

interface State {
  papers: Paper[],
  topics: Topic[],
  search: Search,
  filter: Filter,
}

export const state: State = reactive({
  papers: [],
  topics: [],
  search: { value: '', type: '' },
  filter: { type: { key: '', value: '' }, originator: '',},
})

export async function fetchPapers() {
  state.papers = await (await fetch(apiUrl)).json()
}

export function getTopics() {
  const topicReferences = [...new Set(state.papers?.map((paper) => paper.reference))]
  state.topics = topicReferences.map((reference) => {
    return {
      reference: reference,
      papers: state.papers?.filter((paper: Paper) => paper.reference === reference)
    }
  })
}

export function updateSearch(searchValue: Ref, searchType: Ref) {
  state.search = {
    value: searchValue.value,
    type: searchType.value,
  }
}

export function updateFilter(typeKey: Ref, typeValue: Ref, originator: Ref) {
  state.filter = {
    type: {
      key: typeKey.value,
      value: typeValue.value,
    },
    originator: originator.value,
  }
}