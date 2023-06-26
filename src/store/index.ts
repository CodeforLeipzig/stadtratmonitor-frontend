import { reactive, ref } from 'vue'
import type { Paper, Topic } from '@/types'

const apiUrl: URL = new URL('https://raw.githubusercontent.com/CodeforLeipzig/stadtratmonitor/master/input.json')

export let papers: Array<Paper> = reactive([])
export let topics: Array<Topic> = reactive([])

export async function papersfetch() {
  papers = await (await fetch(apiUrl)).json()
  /* const topicReferences = await [...new Set(papers?.map((paper: Paper) => paper.reference))]
  topics = await topicReferences.map( (reference: string) => {
    return {
      'reference': reference, 
      'papers': papers?.filter( (paper: Paper) => paper.reference === reference),
    }
  }) */
}

/* export function paperprocess() */

/* export const test = reactive({
  testi: papers.papers, 
  funk() {
    return [...new Set(papers.papers?.map((paper: Paper) => paper.reference))]
  }
}) */

/* export const  = reactive({
  topics: Array<Topic>,
  topicReferences: Set<String>,
  async process() {
  },
}) */