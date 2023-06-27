import { reactive } from 'vue'
import type { Paper, Topic } from '@/types'

const apiUrl: URL = new URL(
  'https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json'
)

interface State {
  papers: Paper[]
  topics: Topic[]
}

export const state: State = reactive({ papers: [], topics: [] })

export async function papersFetch() {
  const papersData: Paper[] = await (await fetch(apiUrl)).json()
  const topicReferences = await [...new Set(papersData?.map((paper) => paper.reference))]
  state.papers = papersData
  state.topics = await topicReferences.map((reference) => {
    return {
      reference: reference,
      papers: papersData?.filter((paper: Paper) => paper.reference === reference)
    }
  })
}