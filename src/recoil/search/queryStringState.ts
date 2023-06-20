import { atom } from 'recoil'
import { v1 } from 'uuid'

export type SearchQuery = {
  sort?: string
  search?: string
  genre?: string
  [key: string]: string | undefined
}

export const searchQueryState = atom<SearchQuery>({
  key: 'searchQueryState' + v1(),
  default: {}
})
