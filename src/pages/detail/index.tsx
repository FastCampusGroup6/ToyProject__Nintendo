import React, { Suspense } from 'react'

import ProductDetailPage from '@/components/detail/ProductDetailPage'

import styles from './index.module.scss'

export default function Detail() {
  return (
    <main className={styles.container}>
      <Suspense fallback={<div>...loading</div>}>
        <ProductDetailPage />
      </Suspense>
    </main>
  )
}
