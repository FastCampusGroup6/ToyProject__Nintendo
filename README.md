# SumTendo 게임판매 웹서비스
+ Sumtendo 는 닌텐도 게임을 판매하는 웹서비스 입니다.

## Description

### Stack

### 

## Environment


## Files
```
📦ToyProject__Nintendo
 ┣ 📂.vscode
 ┃ ┣ 📜javascript.code-snippets
 ┃ ┗ 📜settings.json
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┃ ┣ 📂access
 ┃ ┃ ┃ ┣ 📂signIn
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂signOut
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📂signUp
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┣ 📂access
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜memo.md
 ┃ ┃ ┃ ┗ 📂product
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜memo.md
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📂editedUserInfo
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📂userList
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂access
 ┃ ┃ ┃ ┗ 📂validate
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂HeaderSearchBar
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂MainHeader
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂UserHeader
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜Bank.module.scss
 ┃ ┃ ┃ ┣ 📜Bank.tsx
 ┃ ┃ ┃ ┣ 📜BankBtn.module.scss
 ┃ ┃ ┃ ┣ 📜BankBtn.tsx
 ┃ ┃ ┃ ┣ 📜Modal.module.scss
 ┃ ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📂Infomation
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂MediaContainer
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂Notice
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📂ConnectAccountBanner
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂HomeSwiper
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜swiper.css
 ┃ ┃ ┃ ┣ 📂News
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂OnlineStore
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂Softwares
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📂bank
 ┃ ┃ ┃ ┃ ┣ 📜BankSelect.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜BankSelect.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ConnectedAccount.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜ConnectedAccount.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ConnectedBank.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜ConnectedBank.tsx
 ┃ ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┃ ┣ 📜Nav.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜Nav.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SideBar.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜SideBar.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SideBarItem.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜SideBarItem.tsx
 ┃ ┃ ┃ ┗ 📂productList
 ┃ ┃ ┃ ┃ ┣ 📜GetItem.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜GetItem.tsx
 ┃ ┃ ┃ ┃ ┣ 📜GetItemMore.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜GetItemMore.tsx
 ┃ ┃ ┃ ┃ ┣ 📜GetList.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜GetList.tsx
 ┃ ┃ ┃ ┃ ┣ 📜JjimItem.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜JjimItem.tsx
 ┃ ┃ ┃ ┃ ┣ 📜JjimItemMore.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜JjimItemMore.tsx
 ┃ ┃ ┃ ┃ ┣ 📜JjimList.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜JjimList.tsx
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┣ 📂payMethod
 ┃ ┃ ┃ ┃ ┣ 📜BankConnect.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜BankConnect.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ConnectedBank.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜ConnectedBank.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PossibleBank.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜PossibleBank.tsx
 ┃ ┃ ┃ ┣ 📜Btn.module.scss
 ┃ ┃ ┃ ┣ 📜Btn.tsx
 ┃ ┃ ┃ ┣ 📜CartItem.module.scss
 ┃ ┃ ┃ ┣ 📜CartItem.tsx
 ┃ ┃ ┃ ┣ 📜Loading.module.scss
 ┃ ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┃ ┣ 📜PayProcessFlow.module.scss
 ┃ ┃ ┃ ┣ 📜PayProcessFlow.tsx
 ┃ ┃ ┃ ┣ 📜ShoppingCart.module.scss
 ┃ ┃ ┃ ┗ 📜ShoppingCart.tsx
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Filter
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Genre
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Product
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂ProductList
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Search
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂SearchSwiper
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜swiper.css
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useCartItems.ts
 ┃ ┃ ┗ 📜useUserInfo.ts
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜AccessLayout.module.scss
 ┃ ┃ ┣ 📜AccessLayout.tsx
 ┃ ┃ ┣ 📜MainLayout.tsx
 ┃ ┃ ┣ 📜MypageLayout.module.scss
 ┃ ┃ ┣ 📜MypageLayout.tsx
 ┃ ┃ ┣ 📜PaymentLayout.module.scss
 ┃ ┃ ┗ 📜PaymentLayout.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂access
 ┃ ┃ ┃ ┣ 📂ageSignUp
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂logIn
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂logOut
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂passwordChangeForm
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂passwordCheck
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂signUpForm
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┃ ┣ 📂addAccount
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂certProfile
 ┃ ┃ ┃ ┃ ┣ 📂editProfile
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂getItemAll
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┣ 📂agreement
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂checkInfo
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂orderComplete
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂payMethod
 ┃ ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┣ 📜index.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂recoil
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜userState.ts
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┗ 📜productState.ts
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┣ 📜productState.ts
 ┃ ┃ ┃ ┗ 📜queryStringState.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜account.ts
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜product.ts
 ┃ ┃ ┣ 📜user.ts
 ┃ ┃ ┗ 📜usercart.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┣ 📜getBankLogo.ts
 ┃ ┃ ┗ 📜search.ts
 ┃ ┣ 📜App.scss
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜custom.d.ts
 ┃ ┣ 📜index.scss
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜_variables.scss
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜Convention.md
 ┣ 📜craco.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜SETUP_GUIDE.md
 ┗ 📜tsconfig.json
```