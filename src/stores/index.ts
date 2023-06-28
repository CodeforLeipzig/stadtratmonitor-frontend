import { reactive, type Ref, ref } from 'vue'
import type { Filter, Paper, Search, Topic } from '@/types'

const apiUrl: URL = new URL('https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json')

interface State {
  papers: Paper[],
  topics: Topic[],
  search: Search,
  filter: Filter[],
}

export const state: State = reactive({
  papers: [],
  topics: [],
  search: { value: ref(), type: ref() },
  filter: [],
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
    value: searchValue,
    type: searchType,
  }
}

export function updateFilter(typeKey: string, typeValue: string, originator: string) {
  state.filter = [{
    type: {
      key: typeKey,
      value: typeValue,
    },
    originator: originator,
  }]
}