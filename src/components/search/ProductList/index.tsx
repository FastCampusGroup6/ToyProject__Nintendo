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

  useEffect(() => {
    setFilteredProducts(() => [...filterdProductsState])
  }, [searchQuery])

  return (
    <div className={styles.container}>
      <Filter />
      <ul className={styles.list}>
        {filteredProducts.length ? (
          filteredProducts.map((product) => {
            return <Product key={product.id} product={product} />
          })
        ) : (
          <div>선택된 게임이 없습니다요</div>
        )}
      </ul>
    </div>
  )
}
