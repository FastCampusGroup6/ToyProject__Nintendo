import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { productState } from '@/recoil/detail/productState'

import { getProduct } from '@/apis/detail'
import ProductDetailPage from '@/components/detail/ProductDetailPage'

import styles from './index.module.scss'

export default function Detail() {
  const location = useLocation()

  const [product, setProduct] = useRecoilState(productState)

  useEffect(() => {
    const productId = location.pathname.split('/detail/')[1]
    if (!productId) return
    getProduct(productId).then((product) => {
      setProduct(() => ({ ...product }))
    })
  }, [])

  return <main className={styles.container}>{!product.id ? <div>loading ...</div> : <ProductDetailPage />}</main>
}
