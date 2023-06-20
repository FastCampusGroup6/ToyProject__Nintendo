import { selector } from 'recoil'
import { v1 } from 'uuid'
import { searchProducts } from '@/apis/search'
import { searchQueryState } from './queryStringState'
import { SearchProductsResponse } from './../../types/product'

export const filteredProductState = selector<SearchProductsResponse>({
  key: 'filteredProductList' + v1(),
  get: async ({ get }) => {
    const sq = get(searchQueryState)

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
