import React from 'react'
import styles from './index.module.scss'

export default function Notice() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>유의사항</h3>
      <ul>
        <li>Nintendo Switch의 다운로드 번호는 Nintendo Switch의 닌텐도 e숍에서만 사용 가능합니다.</li>
        <li>닌텐도 3DS의 다운로드 번호는 닌텐도 3DS 시리즈의 닌텐도 e숍에서만 사용 가능합니다.</li>
        <li>
          전화번호의 잘못된 기입, 잘못된 주문으로 발생하는 모든 문제에 대한 책임은 고객에게 있으므로 연락처 기입시에
          유의해 주시기 바랍니다.
        </li>
        <li>
          한국닌텐도 홈페이지에서 구입한 소프트웨어, 추가 콘텐츠, 체험판 등의 다운로드 번호로 해당 콘텐츠를 이용할 수
          있습니다.
        </li>
        <li>소프트웨어에 대한 이용 등급 및 상세 정보는 홈페이지를 참고해 주시기 바랍니다.</li>
        <li>본 다운로드 번호는 전송 후 90일간만 유효합니다. 사용 기한에 유의해 주시기 바랍니다.</li>
        <li>본 다운로드 번호의 사용에는 Nintendo Switch 게임기 및 다운로드를 위한 인터넷 환경이 반드시 필요합니다.</li>
        <li>
          구매하신 콘텐츠를 「지금 다운로드」 로 다운로드 받은 후에는 재화의 가치가 현저히 감소하기 때문에 환불이
          불가능합니다. 단, 예외 상품이 있으므로 각 상품의 상세 내용을 반드시 확인해 주시기 바랍니다.
        </li>
        <p>
          상담 및 문의처{' '}
          <a href="https://support.nintendo.co.kr/information">https://support.nintendo.co.kr/information</a>
        </p>
      </ul>
    </div>
  )
}
