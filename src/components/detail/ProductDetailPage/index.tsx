import React, { useEffect } from 'react'

import MediaContainer from '@/components/detail/MediaContainer'
import Infomation from '@/components/detail/Infomation'
import styles from './index.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { productState } from '@/recoil/detail/productState'

export default function ProductDetailPage() {
  const product = useRecoilValue(productState)

  return (
    <div className={styles.container}>
      <MediaContainer product={product} />
      <Infomation product={product} />
    </div>
  )
}
