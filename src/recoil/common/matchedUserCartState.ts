import { UserCart } from '@/types/usercart'
import { atom } from 'recoil'
//Recoil의 상태를 표현하는 단위
// Atoms 업데이트 시 해당 Atom을 구독하는 모든 컴포넌트가 업데이트
import { v1 } from 'uuid'
// 개발모드 중복 랜더링 방지
export const matchedUserCartState = atom<UserCart>({
  key: 'matchedUserCartState' + v1(),
  default: [] as UserCart
})
// atom 함수를 활용해서 Atom을 생성할 때는 unique한 ID를 key로 설정해주고, 해당 기본값 default를 설정\
