import { ProductDetail } from '@/types/product'

export const dummyProduct: ProductDetail = {
  id: 'foo',
  title: '젤다의 전설 브레스 오브 더 와일드',
  price: 60000,
  description: `<div class="product attribute mfr_description"><div class="value"><p>광대한 세계를 무대로 어디로 가든, 무엇을 하든,</p><p>모험의 모든 것을 당신이 원하는 대로 할 수 있습니다.</p><p>야생 동물을 사냥하며&nbsp;지낼 것인가? 몬스터를 퇴치하러 갈 것인가?</p><p>절경 포인트를 보러 다닐 것인가?</p><p>달리고, 헤엄치고, 날고, 높은 곳을 오르고,</p><p>광활한 세계에서 본인이 마음먹은 대로 모험할 수 있습니다.</p><p>Nintendo Switch를 통해, 자택의 TV로 느긋하게 플레이 하다가&nbsp;</p><p>그대로 들고 나가 외출 중에도 계속해서 모험을 즐길 수 있는 등,</p><p>자유로운 플레이 스타일로 즐길 수 있습니다.</p></div><strong class="type">※메이커로부터의 설명입니다.</strong></div><div class="product-attributes"><div class="product-attributes-all"><div class="product-attributes-all-item"><div class="product-attribute platform"><div class="product-attribute-title">대응 기종</div><div class="product-attribute-val">Nintendo Switch</div></div><div class="product-attribute game_category"><div class="product-attribute-title">장르</div><div class="product-attribute-val">액션, 어드벤처</div></div><div class="product-attribute release_date"><div class="product-attribute-title">발매일</div><div class="product-attribute-val">2018. 4. 3.</div></div><div class="product-attribute publisher"><div class="product-attribute-title">메이커</div><div class="product-attribute-val">한국닌텐도</div></div><div class="product-attribute no_of_players"><div class="product-attribute-title">플레이 인원수</div><div class="product-attribute-val">1명</div></div></div><div class="product-attributes-all-item"><div class="product-attribute supported_languages"><div class="product-attribute-title">대응언어</div><div class="product-attribute-val">한국어, 영어, 스페인어, 프랑스어, 독일어, 이태리어, 네덜란드어, 러시아어, 일본어, 중국어</div></div><div class="product-attribute required_space"><div class="product-attribute-title">필요한 용량</div><div class="product-attribute-val">13.4GB</div></div><div class="product-attribute supported_controllers"><div class="product-attribute-title">대응 컨트롤러</div><div class="product-attribute-val">Nintendo Switch Pro 컨트롤러</div></div><div class="product-attribute supported_play_modes"><div class="product-attribute-title">플레이 모드</div><div class="product-attribute-val">TV 모드, 테이블 모드, 휴대 모드</div></div></div></div><div class="attribute-group-esrb"><div class="product-attribute product-attribute-img"><div class="product-attribute-title">이용 등급</div><img class="product-attribute-esrb" src="https://store.nintendo.co.kr/media/attribute/swatch/a/g/age_12.png" alt="이용 등급"></div><div class="product-attribute product-attribute-img"><div class="product-attribute-title">GRAC Content Descriptor</div><img class="product-attribute-grac_content_descriptor" src="https://store.nintendo.co.kr/media/attribute/swatch/g/r/grade2.png" alt="https://store.nintendo.co.kr/media/attribute/swatch/g/r/grade2.png"></div></div></div>`,
  tags: ['액션', '어드벤처'],
  thumbnail: '/images/detail/jelda_main.jpg',
  photo: null,
  isSoldOut: false,
  reservations: [
    { start: '2022-01-01', end: '2022-01-02', isCanceled: false, isExpired: false },
    { start: '2022-01-02', end: '2022-01-03', isCanceled: false, isExpired: false }
  ],
  discountRate: 0
}
