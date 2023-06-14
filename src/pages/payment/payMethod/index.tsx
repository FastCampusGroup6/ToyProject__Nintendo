import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ConnectedBank from '@/components/payment/payMethod/ConnectedBank'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'
import Modal from '@/components/common/Modal'
import dummyAccountsList from '@/pages/payment/dummyAccountsList.json'
import { Banks } from '@/types/account'
import PossibleBank from '@/components/payment/payMethod/PossibleBank'
import BankConnect from '@/components/payment/payMethod/BankConnect'

//사용되는 api
// 1. 계좌 조회
// 2. 계좌 연결
// 3. 제품거래(구매) 신청
// 4. 선택가능한 은행 목록 조회

export default function PayMethod() {
  const { accounts }: AccountsBalance = dummyAccounts
  const accountsList: Banks = dummyAccountsList
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nextModal, setNextModal] = useState(false)
  const [bankIndex, setBankIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
  }, [])

  // 계좌 조회 버튼 핸들러
  const handleAccountsOpen = () => {
    setIsOpen(!isOpen)
  }
  // 선택계좌 결제하기 버튼 생성 핸들러
  const handleBankOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }

  //모달버튼열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleNextModal = (index: number) => {
    setNextModal(true)
    setBankIndex(index)
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
              <button
                className={styles.btn}
                onClick={() => {
                  navigate('/payment/:username/orderComplete')
                }}
              >
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
                  <span>19,990</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>0원</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>19,990</span>
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
            />
          </div>
        )}
      </Modal>
    </>
  )
}
