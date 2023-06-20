import { atom, selector } from 'recoil'
import { v1 } from 'uuid'
import { searchProducts } from '@/apis/search'
import { searchQueryState } from './queryStringState'
import { SearchProductsResponse } from './../../types/product'

// export const searchProductsState = atom<SearchProductsResponse>({
//   key: 'searchProductsState' + v1(),
//   default: []
// })

export const filteredProductState = selector<SearchProductsResponse>({
  key: 'filteredProductList' + v1(),
  get: async ({ get }) => {
    // const products = get(searchProductsState)
    const sq = get(searchQueryState)

    // ! 전체목록을 봐야해서 임시로 주석!
    // if (!sq.search) return []
    const products: SearchProductsResponse = await searchProducts({
      searchText: sq.search ? sq.search : '',
      searchTags: [sq.genre ? sq.genre : '']
    })

    if (!sq.sort || sq.sort === 'asc') {
      products.sort((a, b) => (a.title > b.title ? 1 : -1))
    } else if (sq.sort === 'desc') {
      products.sort((a, b) => (b.title > a.title ? 1 : -1))
    } else if (sq.sort === 'low') {
      products.sort((a, b) => a.price - b.price)
    } else if (sq.sort === 'high') {
      products.sort((a, b) => b.price - a.price)
    }
    return products
  }
})
