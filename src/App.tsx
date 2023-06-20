import React from 'react'
import './App.scss'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AccessLayout from './layouts/AccessLayout'
import MyPageLayout from './layouts/MypageLayout'
import PaymentLayout from './layouts/PaymentLayout'

//Main!!!!
import Search from './pages/search'
import Detail from './pages/detail'
//MyPage!!!!
import MyPage from './pages/mypage'
import GetItemAll from './pages/mypage/getItemAll'
import JjimItemAll from './pages/mypage/jjimItemAll'
import CertProfile from './pages/mypage/certProfile'
import EditProfile from './pages/mypage/certProfile/editProfile'
import Account from './pages/mypage/account'
import AddAccount from './pages/mypage/account/addAccount'
import BankName from './pages/mypage/account/banks'
//Access!!!!
import Access from './pages/access'
import AgeSignUp from './pages/access/ageSignUp'
import SignUpForm from './pages/access/signUpForm'
import LogIn from './pages/access/logIn'
import LogOut from './pages/access/logOut'
import PasswordCheck from './pages/access/passwordCheck'
import PasswordChangeForm from './pages/access/passwordChangeForm'
//Payment!!!!
import Payment from './pages/payment'
import Agreement from './pages/payment/agreement'
import CheckInfo from './pages/payment/checkInfo'
import PayMethod from './pages/payment/payMethod'
import OrderComplete from './pages/payment/orderComplete'

function App() {
  return (
    <Routes>
      <Route path="/user" element={<MyPageLayout />}>
        <Route path="/user/:username" element={<MyPage />} />
        <Route path="/user/:username/getItemAll" element={<GetItemAll />} />
        <Route path="/user/:username/jjimItemAll" element={<JjimItemAll />} />
        <Route path="/user/:username/certProfile" element={<CertProfile />} />
        <Route path="/user/:username/certProfile/editProfile" element={<EditProfile />} />
        <Route path="/user/:username/account" element={<Account />} />
        <Route path="/user/:username/account/addAccount" element={<AddAccount />} />
        <Route path="/user/:username/account/banks/:bankName" element={<BankName />} />
      </Route>
      <Route path="/access" element={<AccessLayout />}>
        <Route path="/access" element={<Access />} />
        <Route path="/access/agesignup" element={<AgeSignUp />} />
        <Route path="/access/signupform" element={<SignUpForm />} />
        <Route path="/access/login" element={<LogIn />} />
        <Route path="/access/logout" element={<LogOut />} />
        <Route path="/access/passwordcheck" element={<PasswordCheck />} />
        <Route path="/access/passwordchangeform" element={<PasswordChangeForm />} />
      </Route>
      <Route path="/payment" element={<PaymentLayout />}>
        <Route path="/payment/:username" element={<Payment />} />
        <Route path="/payment/:username/agreement" element={<Agreement />} />
        <Route path="/payment/:username/checkInfo" element={<CheckInfo />} />
        <Route path="/payment/:username/payMethod" element={<PayMethod />} />
        <Route path="/payment/:username/orderComplete" element={<OrderComplete />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:productId" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
