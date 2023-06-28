import type { Ref } from "vue";

export interface Topic {
  reference: string,
  papers: Array<Paper>,
}

export interface Paper {
  body: string,
  content: string,
  name: string,
  resolution: any,
  originator: string,
  paper_type: string,
  published_at: string,
  reference: string,
  url: string,
}

export interface Search {
  value: Ref,
  type: Ref,
}

export interface Filter {
  type: {
    key: string,
    value: string,
  },
  originator: string,
}