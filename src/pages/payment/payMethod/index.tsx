import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow' // X
import ConnectedBank from '@/components/payment/payMethod/ConnectedBank' // X
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'
import Modal from '@/components/common/Modal'
import { Banks, AccountConnectionRequest } from '@/types/account'
import PossibleBank from '@/components/payment/payMethod/PossibleBank'
import BankConnect from '@/components/payment/payMethod/BankConnect'
import { Product } from '@/types/product'
import { getSelectableAccounts, getConnectedAccounts, postConnectAccount } from '@/apis/payment/account'
import { postBuyProduct } from '@/apis/payment/product'
import Loading from '@/components/payment/Loading'
import useUserInfo from '@/hooks/useUserInfo'
import useCartItems from '@/hooks/useCartItems'

export default function PayMethod() {
  const [connectedAccounts, setConnectedAccounts] = useState<AccountsBalance>({
    totalBalance: 0,
    accounts: []
  })
  const [possibleAccounts, setPossibleAccounts] = useState<Banks>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
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
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, _isLoggedIn, _logout] = useUserInfo()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, _addcartItems, _removeCartItemsByUser, _removeOneCartItemByUser] = useCartItems(userInfo)

  const orderPrice = cartItems.map((item: Product) => item.price).reduce((acc: number, cur: number) => acc + cur, 0)
  const orderFinalPrice = cartItems
    .map((item: Product) => item.price - (item.price * item.discountRate) / 100)
    .reduce((acc: number, cur: number) => acc + cur, 0)
  const discountPrice = orderPrice - orderFinalPrice

  //accessToken 가져오기
  const accessToken = localStorage.getItem('token') || ''
  // 연결가능한 계좌에서 선택된 계좌
  const selectedAccount = possibleAccounts.filter((account) => !account.disabled)[bankIndex]

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
    setIsModalOpen(false)
    setNextModal(false)
    setBankIndex(0)
  }, [])

  // 계좌 조회 버튼 핸들러
  const handleAccountsOpen = async () => {
    setIsOpen(!isOpen)
    setIsClicked(false)
    setActiveIndex(NaN)
    //1. 게좌 조회 버튼을 처음 눌렀을 때만 getSelectableAAccounts fetch
    //2. 이후 클릭해서 해당 창이 열렸을 때는, connectedAccounts에 저장된 값을 불러오기.
    if (connectedAccounts.accounts.length === 0) {
      try {
        setIsLoading(true)
        const res = await getConnectedAccounts(accessToken)
        setConnectedAccounts(res)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // 선택계좌 결제하기 버튼 생성 핸들러
  const handleBankOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }

  //모달버튼열기 핸들러
  const handleModalOpen = async () => {
    setIsModalOpen(true)
    if (possibleAccounts.length === 0) {
      try {
        setIsLoading(true)
        const res = await getSelectableAccounts(accessToken)
        setPossibleAccounts(res)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
  }

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

  const handleBankConnectOrder = async () => {
    const accountNumLength = selectedAccount.digits.reduce((acc, val) => acc + val, 0)
    if (BankConnectData.accountNumber.length !== accountNumLength) {
      alert('올바른 계좌번호를 입력해주세요!')
    } else if (BankConnectData.phoneNumber.length !== 11) {
      alert('올바른 전화번호를 입력해주세요!')
    } else {
      // 수행할 로직
      try {
        setIsLoading(true)
        const bankConnectRes = await postConnectAccount(accessToken, BankConnectData)
        alert('계좌 등록이 완료되었습니다!')
        const bankConnectId = bankConnectRes.id
        const buyPromises = cartItems.map((item) =>
          postBuyProduct(accessToken, { productId: item.id, accountId: bankConnectId })
        )
        await Promise.all(buyPromises)
        alert('결제 완료되었습니다! 결제 완료 페이지로 이동합니다.')
        setIsLoading(false)
        navigate(`/payment/${userInfo.displayName}/orderComplete`)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleSelectedBankOrder = async () => {
    // api 거래 신청 요청.
    try {
      setIsLoading(true)
      const buyPromises = cartItems.map((item) => {
        postBuyProduct(accessToken, {
          productId: item.id,
          accountId: connectedAccounts.accounts[activeIndex].id
        })
      })
      await Promise.all(buyPromises).then(() => {
        alert('결제 완료되었습니다! 결제 완료 페이지로 이동합니다.')
      })
      setIsLoading(false)
      navigate(`/payment/${userInfo.displayName}/orderComplete`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <PayProcessFlow />
      <div className={styles.inner}>
        {isOpen && (
          <div className={styles.bankSelect}>
            {isLoading ? (
              <Loading color="#e60112" />
            ) : (
              <div className={styles.banks}>
                {connectedAccounts.accounts.length !== 0 ? (
                  <>
                    <div className={styles.title}>결제할 계좌를 선택해주세요!</div>
                    <div className={styles.bankContainer}>
                      {connectedAccounts.accounts.map((account, index) => (
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
                  </>
                ) : (
                  <>
                    <div>연결된 계좌가 없습니다!</div>
                    <div>간편 결제를 이용해주세요.</div>
                  </>
                )}
              </div>
            )}
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
                  <span>{`₩ ${orderPrice.toLocaleString()}`}</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>{`₩ ${discountPrice.toLocaleString()}`}</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>{`₩ ${orderFinalPrice.toLocaleString()}`}</span>
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
            {isLoading ? (
              <Loading color="#ff7c00" />
            ) : (
              <div className={styles.accountLists}>
                {possibleAccounts
                  .filter((account) => !account.disabled)
                  .map((account, index) => (
                    <PossibleBank
                      key={index}
                      bankName={account.name}
                      onClick={() => {
                        handleNextModal(index)
                      }}
                    />
                  ))}
              </div>
            )}
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
              isLoading={isLoading}
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
