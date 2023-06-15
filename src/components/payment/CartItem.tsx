import React from 'react'
import styles from './CartItem.module.scss'
import { Product } from '@/types/product'

interface Props {
  item: Product
}

export default function CartItem({ item }: Props) {
  return (
    <>
      <li className={styles.cartItem}>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={item.thumbnail || ''} alt="게임사진" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.etc}>
              <div className={styles.remove}>
                <a className={styles.removeLink} href="#">
                  <img
                    className={styles.removeIcon}
                    src={`${process.env.PUBLIC_URL}/images/deleteIcon.svg`}
                    alt="delete"
                  />
                  <span className={styles.removeText}>삭제</span>
                </a>
              </div>
              <div className={styles.grade}>
                <div>
                  <img className={styles.gradeImg} src={`${process.env.PUBLIC_URL}/images/age_all.png`} alt="" />
                </div>
                <div>
                  <img className={styles.gradeImg} src={`${process.env.PUBLIC_URL}/images/grade_fear.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.qty}>
          <input className={styles.qtyInput} type="text" defaultValue="1" disabled={true} />
        </div>
        <div className={styles.price}>
          <span>₩ {item.price}</span>
        </div>
      </li>
    </>
  )
}
