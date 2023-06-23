import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import styles from './index.module.scss'
import Filter from '../Filter'
import Product from '../Product'
import { filteredProductState } from '@/recoil/search/productState'
import { SearchProductsResponse } from '@/types/product'
import { searchQueryState } from '@/recoil/search/queryStringState'

export default function ProductList() {
  const searchQuery = useRecoilValue(searchQueryState)
  const filterdProductsState = useRecoilValue(filteredProductState)
  const [filteredProducts, setFilteredProducts] = useState<SearchProductsResponse>(filterdProductsState)

  // * 검색 쿼리가 변경되면 filterdProductsState를 filteredProducts에 저장합니다.
  useEffect(() => {
    setFilteredProducts(() => [...filterdProductsState])
  }, [searchQuery])

  return (
    <div className={styles.container}>
      <Filter />
      <ul className={styles.list}>
        {filteredProducts.map((product) => {
          return <Product key={product.id} product={product} />
        })}
        {filteredProducts.length === 0 && <div>검색 결과가 없습니다.</div>}
      </ul>
    </div>
  )
}
