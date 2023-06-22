import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ConnectedBank from '@/components/payment/payMethod/ConnectedBank'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'
import Modal from '@/components/common/Modal'
import dummyAccountsList from '@/pages/payment/dummyAccountsList.json'
import { Banks, AccountConnectionRequest } from '@/types/account'
import PossibleBank from '@/components/payment/payMethod/PossibleBank'
import BankConnect from '@/components/payment/payMethod/BankConnect'
import { Product } from '@/types/product'

//사용되는 api
// 1. 계좌 조회
// 3.제품거래(구매) 신청
/*
  ### 제품 거래(구매) 신청

- 사용자 전용 API입니다.
- 거래(구매) 신청시 연결된 계좌에서 결제됩니다.
- 결제할 계좌(ID)를 꼭 선택해야 합니다.(`계좌 목록 및 잔액 조회`API를 사용하세요)
- 선택한 계좌의 잔액보다 결제 금액이 크면 결제가 처리되지 않습니다.(에러 반환)

`curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'`

요청 데이터 타입 및 예시:

`interface RequestBody {
  productId: string // 거래할 제품 ID (필수!)
  accountId: string // 결제할 사용자 계좌 ID (필수!)
  reservation?: { // 예약 정보(예약 시스템을 사용하는 경우만 필요)
    start: string // 예약 시작 시간(ISO)
    end: string // 예약 종료 시간(ISO)
  }
}`
*/
// 4. 선택가능한 은행 목록 조회

// todo
// 1. 총 계산금액 (할인율 포함) - 주문 금액, 할인율, 최종 결제 금액 표기 ✅
// 2. 새로고침 시 모달 초기화 ✅
// 3. 모달 계좌 연결 정보 입력 (정규식) ✅
// 4. 계좌 데이터 연결(중요) -아아아아아
// 5. api 불러와서 연동

export default function PayMethod() {
  const { accounts }: AccountsBalance = dummyAccounts //
  const accountsList: Banks = dummyAccountsList // api 연결 응답데이터 받기
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nextModal, setNextModal] = useState(false)
  const [bankIndex, setBankIndex] = useState(0)
  const navigate = useNavigate()
  const [BankConnectData, setBankConnectData] = useState<AccountConnectionRequest>({
    bankCode: '',
    accountNumber: '',
    phoneNumber: '',
    signature: true
  })

  //cartItems 할인 계산
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
  const orderPrice = cartItems.map((item: Product) => item.price).reduce((acc: number, cur: number) => acc + cur, 0)
  const orderFinalPrice = cartItems
    .map((item: Product) => item.price - (item.price * item.discountRate) / 100)
    .reduce((acc: number, cur: number) => acc + cur, 0)
  const discountPrice = orderPrice - orderFinalPrice

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
    setIsModalOpen(false)
    setNextModal(false)
    setBankIndex(0)
  }, [])
  //필요없음
  // 계좌 조회 버튼 핸들러
  const handleAccountsOpen = () => {
    setIsOpen(!isOpen)
    setIsClicked(false)
    setActiveIndex(null)
  }
  //필요없음
  // 선택계좌 결제하기 버튼 생성 핸들러
  const handleBankOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }
  //필요없음
  //모달버튼열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  //필요없음
  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false)
    setNextModal(false)
  }
  //다음 모달 핸들러
  const handleNextModal = (index: number) => {
    setNextModal(true)
    setBankIndex(index)
  }
  //BankConnect컴포넌트서 가져올 데이터를 위한 Props함수
  const handleBankConnectData = (data: AccountConnectionRequest) => {
    setBankConnectData(data)
  }

  const handleBankConnectOrder = () => {
    const accountNumLength = selectedAccount.digits.reduce((acc, val) => acc + val, 0)
    if (BankConnectData.accountNumber.length !== accountNumLength) {
      alert('올바른 계좌번호를 입력해주세요!')
    } else if (BankConnectData.phoneNumber.length !== 10) {
      alert('올바른 전화번호를 입력해주세요!')
    } else {
      // 수행할 로직
      navigate('/payment/:username/orderComplete')
    }
    // api 은행 계좌 등록 요청. function(BankConnectData)
    // 요청 완료 시 api 거래 신청 요청. accountId, productId 만 있으면 됨. function(BankConnectData.accountNumber, )
    // 근데 productId가 배열데이터가 아님. 아
    // 반복문 사용해서 productId만큼 요청보내기?
    // 예외처리 - BankConnectData가 양식에 맞지 않을 경우, 올바른 계좌번호를 or 전화번호를 입력해주세요! alert보내기 ✅
    // 아 어렵다
    // 완료 시 navigate('/payment/:username/orderComplete')
  }

  const handleSelectedBankOrder = () => {
    // api 거래 신청 요청.
    // 완료시 navigate('/payment/:username/orderComplete')
    navigate('/payment/:username/orderComplete')
  }

  const selectedAccount = accountsList[bankIndex]

  return (
    <>
      <PayProcessFlow />
      <div className={styles.inner}>
        {isOpen && (
          <div className={styles.bankSelect}>
            <div className={styles.banks}>
              <div className={styles.title}>결제할 계좌를 선택해주세요!</div>
              <div className={styles.bankContainer}>
                {accounts.map((account, index) => (
                  <ConnectedBank
                    key={index}
                    bankName={account.bankName}
                    accountNumber={account.accountNumber}
                    balance={account.balance}
                    handleOnClick={() => handleBankOnClick(index)}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
            {isClicked && (
              <button className={styles.btn} onClick={handleSelectedBankOrder}>
                선택 계좌로 결제하기
              </button>
            )}
          </div>
        )}
        <div className={styles.payments}>
          <div className={styles.payment}>
            <div className={styles.paymentContainer}>결제 금액</div>
            <div className={styles.paymentInfo}>
              <div>
                <div className={styles.title}>
                  <span>주문 금액</span>
                </div>
                <div className={styles.title}>
                  <span>배송비</span>
                </div>
                <div className={styles.title}>
                  <span>할인</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <span>{orderPrice}</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>{discountPrice}</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>{orderFinalPrice}</span>
              </div>
            </div>
          </div>
          <div className={styles.payMethod}>
            <div className={styles.title}>
              <span>결제 수단</span>
            </div>
            <div className={styles.payMethodContainer}>
              <button className={styles.btn} onClick={handleAccountsOpen}>
                계좌조회
              </button>
              <button className={styles.btn} onClick={handleModalOpen}>
                간편결제
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
        {!nextModal && (
          <div className={styles.accountListContainer}>
            <div className={styles.title}>계좌 등록</div>
            <div className={styles.accountLists}>
              {accountsList
                .filter((account) => !account.disabled)
                .map((account, index) => (
                  <PossibleBank
                    key={index}
                    bankName={account.name}
                    onClick={() => {
                      handleNextModal(index)
                    }}
                  />
                  //1. possibleBank를 click했을 때 해당 은행의 정보를 BankConnect에서 사용할 수 있어야 함.
                  //2. 필요한 정보는 account.name, account.code, account.digit
                  //3. account의 몇번째 index를 눌렀느냐에 따라 받아오는 정보가 달라짐.
                  //3-1. filter한 accountsList배열에서 index를 찾아야 함.
                  //4. onclick이벤트에 해당 배열의 index를 저장.
                  //4-1. accountList 배열에서 index값을 가져오기?
                ))}
            </div>
            <div className={styles.subs}> 등록할 계좌를 선택해주세요!</div>
          </div>
        )}
        {nextModal && (
          <div className={styles.BankConnectContainer}>
            <BankConnect
              bankName={selectedAccount.name}
              bankCode={selectedAccount.code}
              bankDigits={selectedAccount.digits}
              handleBankConnectData={handleBankConnectData}
            />
            <button className={styles.btn} onClick={handleBankConnectOrder}>
              계좌 등록 후 바로 결제하기
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}
