import { atom } from 'recoil'
import { v1 } from 'uuid'

export type SearchQuery = {
  [key: string]: string | undefined
  sort?: string
  search?: string
  genre?: string
}

export const searchQueryState = atom<SearchQuery>({
  key: 'searchQueryState' + v1(),
  default: {}
})
