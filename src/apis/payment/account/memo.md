### 선택 가능한 은행 목록 조회

- 은행 당 하나의 계좌만 허용됩니다.
- 사용자가 계좌를 추가하면, 해당 은행 정보 `disabled` 속성이 `true`로 변경됩니다.
- 은행 정보 `digits` 속성의 숫자를 모두 더하면 각 은행의 유효한 계좌번호 길이가 됩니다.
- `[3, 2, 4, 3]` => 123-12-1234-123

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = Bank[] // 선택 가능한 은행 정보 목록

interface Bank { // 선택 가능한 은행 정보
  name: string // 은행 이름
  code: string // 은행 코드
  digits: number[] // 은행 계좌 자릿수
  disabled: boolean // 사용자가 추가한 계좌 여부
}
```

```json
[
  {
    "name": "KB국민은행",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
  {
    "name": "신한은행",
    "code": "088",
    "digits": [3, 3, 6],
    "disabled": true
  },
  {
    "name": "우리은행",
    "code": "020",
    "digits": [4, 3, 6],
    "disabled": true
  },
  {
    "name": "하나은행",
    "code": "081",
    "digits": [3, 6, 5],
    "disabled": false
  },
  {
    "name": "케이뱅크",
    "code": "089",
    "digits": [3, 3, 6],
    "disabled": false
  },
  {
    "name": "카카오뱅크",
    "code": "090",
    "digits": [4, 2, 7],
    "disabled": false
  },
  {
    "name": "NH농협은행",
    "code": "011",
    "digits": [3, 4, 4, 2],
    "disabled": false
  }
]
```

### 계좌 목록 및 잔액 조회

- 계좌번호는 일부만 노출됩니다. E.g. `"123-XXXX-XXXX-XX"`
- 잔액의 단위는 '원화(￦)'입니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  totalBalance: number // 사용자 계좌 잔액 총합
  accounts: Bank[] // 사용자 계좌 정보 목록
}

interface Bank { // 사용자 계좌 정보
  id: string // 계좌 ID
  bankName: string // 은행 이름
  bankCode: string // 은행 코드
  accountNumber: string // 계좌 번호
  balance: number // 계좌 잔액
}
```

```json
{
  "totalBalance": 5999900,
  "accounts": [
    {
      "id": "jQMfKla8vOIFELA3mAXv",
      "bankName": "NH농협은행",
      "bankCode": "011",
      "accountNumber": "356-XXXX-XXXX-XX",
      "balance": 2999900
    },
    {
      "id": "wiPgsXvMAmcLw8AuRHIi",
      "bankName": "KB국민은행",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX",
      "balance": 3000000
    }
  ]
}
```

### 계좌 연결

- 연결된 계좌 잔액에는 자동으로 기본 '3백만원'이 추가됩니다.
- 요청하는 계좌번호와 전화번호에는 `-` 구분이 없어야 합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  bankCode: string // 연결할 은행 코드 (필수!)
  accountNumber: string // 연결할 계좌번호 (필수!)
  phoneNumber: string // 사용자 전화번호 (필수!)
  signature: boolean // 사용자 서명 (필수!)
}
```

```json
{
  "bankCode": "088",
  "accountNumber": "123456789012",
  "phoneNumber": "01012345678",
  "signature": true
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue { // 연결된 계좌 정보
  id: string // 계좌 ID
  bankName: string // 은행 이름
  bankCode: string // 은행 코드
  accountNumber: string // 계좌 번호
  balance: number // 계좌 잔액
}
```

```json
{
  "id": "1qRFC6Ey5VkSu6nyj5Ba",
  "bankName": "신한은행",
  "bankCode": "088",
  "accountNumber": "123-XXX-XXXXXX",
  "balance": 3000000
}
```


