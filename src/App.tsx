import React from 'react'
import loadable from '@loadable/component'
import './App.scss'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import PaymentLoading from '@/components/payment/Loading'
const MainLayout = loadable(() => import('./layouts/MainLayout'), {
  fallback: <div>loading...</div>
})
const AccessLayout = loadable(() => import('./layouts/AccessLayout'), {
  fallback: <div>loading...</div>
})
const MyPageLayout = loadable(() => import('./layouts/MypageLayout'), {
  fallback: <div>loading...</div>
})
const PaymentLayout = loadable(() => import('./layouts/PaymentLayout'), {
  fallback: <div>loading...</div>
})

//Main!!!!
const Search = loadable(() => import('./pages/search'), {
  fallback: <div>loading...</div>
})
const Detail = loadable(() => import('./pages/detail'), {
  fallback: <div>loading...</div>
})
//MyPage!!!!
const MyPage = loadable(() => import('./pages/mypage'), {
  fallback: <div>loading...</div>
})
const GetItemAll = loadable(() => import('./pages/mypage/getItemAll'), {
  fallback: <div>loading...</div>
})
const JjimItemAll = loadable(() => import('./pages/mypage/jjimItemAll'), {
  fallback: <div>loading...</div>
})
const CertProfile = loadable(() => import('./pages/mypage/certProfile'), {
  fallback: <div>loading...</div>
})
const EditProfile = loadable(() => import('./pages/mypage/certProfile/editProfile'), {
  fallback: <div>loading...</div>
})
const Account = loadable(() => import('./pages/mypage/account'), {
  fallback: <div>loading...</div>
})
const AddAccount = loadable(() => import('./pages/mypage/account/addAccount'), {
  fallback: <div>loading...</div>
})
const BankName = loadable(() => import('./pages/mypage/account/banks'), {
  fallback: <div>loading...</div>
})
//Access!!!!
const Access = loadable(() => import('./pages/access'), {
  fallback: <div>loading...</div>
})
const AgeSignUp = loadable(() => import('./pages/access/ageSignUp'), {
  fallback: <div>loading...</div>
})
const SignUpForm = loadable(() => import('./pages/access/signUpForm'), {
  fallback: <div>loading...</div>
})
const LogIn = loadable(() => import('./pages/access/logIn'), {
  fallback: <div>loading...</div>
})
const LogOut = loadable(() => import('./pages/access/logOut'), {
  fallback: <div>loading...</div>
})
const PasswordCheck = loadable(() => import('./pages/access/passwordCheck'), {
  fallback: <div>loading...</div>
})
const PasswordChangeForm = loadable(() => import('./pages/access/passwordChangeForm'), {
  fallback: <div>loading...</div>
})
//Payment!!!!
const Payment = loadable(() => import('./pages/payment'), {
  fallback: <PaymentLoading color="#666666" />
})
const Agreement = loadable(() => import('./pages/payment/agreement'), {
  fallback: <PaymentLoading color="#666666" />
})
const CheckInfo = loadable(() => import('./pages/payment/checkInfo'), {
  fallback: <PaymentLoading color="#666666" />
})
const PayMethod = loadable(() => import('./pages/payment/payMethod'), {
  fallback: <PaymentLoading color="#666666" />
})
const OrderComplete = loadable(() => import('./pages/payment/orderComplete'), {
  fallback: <PaymentLoading color="#666666" />
})

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
