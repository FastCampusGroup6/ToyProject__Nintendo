import { SearchProductsResponse } from './../../types/product'
import { searchQueryState } from './queryStringState'
import { atom, selector } from 'recoil'
import { v1 } from 'uuid'

export const dummyProducts: SearchProductsResponse = [
  {
    id: 'nbqtQvEiasfdTDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '어드벤처', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSSQEutyEXTDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', '보드'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtQvjtaeEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtaefnSTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtASnfdTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['아케이드', '음악', '기타'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nqwgvYwASDDet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['보드', '커뮤니케이션', '슈팅'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtdfgdfbsDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '어드벤처', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSrtbshEivYzxcDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', '보드'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nAVivYwEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtTRBHUKNYOvYwSzzSTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbrVdadDvYwSSTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['아케이드', '음악', '기타'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqVredjnyadet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['보드', '커뮤니케이션', '슈팅'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbgwerBUYNDdTDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '어드벤처', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbasabvcutyEXTDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', '보드'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqqwetneEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nbqtaejhrzswTDet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbbzgeSnfdTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['아케이드', '음악', '기타'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nqwbzsgeASDDet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['보드', '커뮤니케이션', '슈팅'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtdfgdbzdrDet7YM',
    title: '젤다의 전설 스카이워드 소드',
    price: 30000,
    description: '젤다의 전설 스카이워드 소드 설명',
    tags: ['액션', '어드벤처', 'RPG'],
    thumbnail: '/images/search/zelda_hi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqSSxoryzxcDet7YM',
    title: '젤다의 전설 야숨',
    price: 40000,
    description: '젤다의 전설 야숨 설명',
    tags: ['액션', '격투', '보드'],
    thumbnail: '/images/search/zelda_yasum_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqaxiovYwEXTDet7YD',
    title: '젤다의 전설 왕눈',
    price: 50000,
    description: '젤다의 전설 왕눈 설명',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_search_image.webp',
    discountRate: 0
  },
  {
    id: 'nnaeEpouet7YM',
    title: '젤다의 전설 꿈섬',
    price: 60000,
    description: '젤다의 전설 꿈구는 섬',
    tags: ['액션', '격투', 'RPG'],
    thumbnail: '/images/search/zelda_dream_castle.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtzaandfnafndTDet7YM',
    title: '별의 커비 디스커버리',
    price: 70000,
    description: '별의 커비 디스커버리 설명',
    tags: ['아케이드', '음악', '기타'],
    thumbnail: '/images/search/curbi_search_image.jpg',
    discountRate: 0
  },
  {
    id: 'nbqtndtjhsdadet7YM',
    title: '슈퍼마리오 파티',
    price: 70000,
    description: '슈퍼마리오 파티설명',
    tags: ['보드', '커뮤니케이션', '슈팅'],
    thumbnail: '/images/search/suma_party_search_image.jpg',
    discountRate: 0
  }
]

export const searchProductsState = atom<SearchProductsResponse>({
  key: 'searchProductsState' + v1(),
  default: dummyProducts
})

export const filteredProductState = selector<SearchProductsResponse>({
  key: 'filteredProductList' + v1(),
  get: async ({ get }) => {
    const products = get(searchProductsState)
    const sq = get(searchQueryState)
    console.log(sq)
    console.log('API가 실행됩니다. 1초뒤 결과과 반환됩니다.')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('API 끝!')

    if (!sq.genre && !sq.sort) {
      return products
    }
    const filterdProducts = [...products]
    if (!sq.sort || sq.sort === 'asc') {
      filterdProducts.sort((a, b) => (a.title > b.title ? 1 : -1))
    } else if (sq.sort === 'desc') {
      filterdProducts.sort((a, b) => (b.title > a.title ? 1 : -1))
    } else if (sq.sort === 'low') {
      filterdProducts.sort((a, b) => a.price - b.price)
    } else if (sq.sort === 'high') {
      filterdProducts.sort((a, b) => b.price - a.price)
    }
    if (!sq.genre) return filterdProducts
    return filterdProducts.filter((product) => product.tags.includes(String(sq.genre)))
  }
})
