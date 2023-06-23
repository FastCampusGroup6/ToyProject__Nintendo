import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { productState } from '@/recoil/detail/productState'

import { getProduct } from '@/apis/detail'
import MediaContainer from '@/components/detail/MediaContainer'
import Infomation from '@/components/detail/Infomation'
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

  // todo : not found, loading 컴포넌트 추가하기
  if (!product.id) {
    return <div>Loading ...</div>
  }

  return (
    <main className={styles.container}>
      <MediaContainer product={product} />
      <Infomation product={product} />
    </main>
  )
}
