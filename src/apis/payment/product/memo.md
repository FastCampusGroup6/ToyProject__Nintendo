### 제품 거래(구매) 신청

- 사용자 전용 API입니다.
- 거래(구매) 신청시 연결된 계좌에서 결제됩니다.
- 결제할 계좌(ID)를 꼭 선택해야 합니다.(`계좌 목록 및 잔액 조회` API를 사용하세요)
- 선택한 계좌의 잔액보다 결제 금액이 크면 결제가 처리되지 않습니다.(에러 반환)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  productId: string // 거래할 제품 ID (필수!)
  accountId: string // 결제할 사용자 계좌 ID (필수!)
  reservation?: { // 예약 정보(예약 시스템을 사용하는 경우만 필요)
    start: string // 예약 시작 시간(ISO)
    end: string // 예약 종료 시간(ISO)
  }
}
```

```js
const isoString = new Date().toISOString()
```

```json
{
  "productId": "nbqtQvEivYwEXTDet7YM",
  "accountId": "Mq2KKHk8vlmr6Xkg58Fa",
  "reservation": {
    "start": "2021-11-12T06:00:00.000Z",
    "end": "2021-11-12T07:00:00.000Z"
  }
}
```

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true // 거래 신청 처리 여부
```