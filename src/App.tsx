import React from 'react'
import loadable from '@loadable/component'
import './App.scss'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
const MainLayout = loadable(() => import('./layouts/MainLayout'))
const AccessLayout = loadable(() => import('./layouts/AccessLayout'))
const MyPageLayout = loadable(() => import('./layouts/MypageLayout'))
const PaymentLayout = loadable(() => import('./layouts/PaymentLayout'))

//Main!!!!
const Search = loadable(() => import('./pages/search'))
const Detail = loadable(() => import('./pages/detail'))
//MyPage!!!!
const MyPage = loadable(() => import('./pages/mypage'))
const GetItemAll = loadable(() => import('./pages/mypage/getItemAll'))
const JjimItemAll = loadable(() => import('./pages/mypage/jjimItemAll'))
const CertProfile = loadable(() => import('./pages/mypage/certProfile'))
const EditProfile = loadable(() => import('./pages/mypage/certProfile/editProfile'))
const Account = loadable(() => import('./pages/mypage/account'))
const AddAccount = loadable(() => import('./pages/mypage/account/addAccount'))
const BankName = loadable(() => import('./pages/mypage/account/banks'))
//Access!!!!
const Access = loadable(() => import('./pages/access'))
const AgeSignUp = loadable(() => import('./pages/access/ageSignUp'))
const SignUpForm = loadable(() => import('./pages/access/signUpForm'))
const LogIn = loadable(() => import('./pages/access/logIn'))
const LogOut = loadable(() => import('./pages/access/logOut'))
const PasswordCheck = loadable(() => import('./pages/access/passwordCheck'))
const PasswordChangeForm = loadable(() => import('./pages/access/passwordChangeForm'))
//Payment!!!!
const Payment = loadable(() => import('./pages/payment'))
const Agreement = loadable(() => import('./pages/payment/agreement'))
const CheckInfo = loadable(() => import('./pages/payment/checkInfo'))
const PayMethod = loadable(() => import('./pages/payment/payMethod'))
const OrderComplete = loadable(() => import('./pages/payment/orderComplete'))

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
