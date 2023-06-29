import React, { useState, useEffect } from 'react'
import styles from './JjimList.module.scss'
import JjimItem from '@/components/mypage/productList/JjimItem'
// import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
// import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { Products, Product } from '@/types/product'

export default function JjimList() {
  const [jjimItem, setJjimItem] = useState<Products>([])

  // const currentLocation = useLocation()

  useEffect(() => {
    const storedJjimItems = localStorage.getItem('jjimItem')
    if (storedJjimItems) {
      setJjimItem(JSON.parse(storedJjimItems))
    } else {
      // localStorage.setItem('jjimItem', JSON.stringify([dummyGoods1, dummyGoods2]))
      // setJjimItem([dummyGoods1, dummyGoods2])
    }
  }, [])

  return (
    <section className={styles.section}>
      <span className={styles.jjimList}>찜한 상품</span>
      <a className={`${styles.aTag} ${styles.jjimMore}`} href={'/user/:username/jjimItemAll'}>
        전체 내역 조회
      </a>
      <ul className={styles.jjimItem}>
        {jjimItem.map((item: Product, index: number) => (
          <JjimItem key={index} item={item} />
        ))}
      </ul>
    </section>
  )
}
