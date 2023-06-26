const getBankLogo = (bankName: string) => {
  let bankLogo = ''
  switch (bankName) {
    case 'KB국민은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbbank.svg`
      break
    case '신한은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/shbank.svg`
      break
    case '우리은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/wooribank.svg`
      break
    case '하나은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/hanabank.svg`
      break
    case '케이뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbank.svg`
      break
    case 'NH농협은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/nhbank.svg`
      break
    case '카카오뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kakaobank.svg`
      break
  }
  return bankLogo
}
export default getBankLogo
