type Params = {
  [key: string]: unknown
}
export function generateQueryString<T extends Params>(params: T): string {
  const ParamsOnlyStringValue: {
    // * URLSearchParams의 value는 string만 허용합니다.
    [key: string]: string
  } = {}
  for (const [key, value] of Object.entries(params)) {
    if (typeof value == 'string') {
      ParamsOnlyStringValue[key] = value
      continue
    }
    throw new Error('params의 값은 문자열만 가능합니다.')
  }
  const queryString = new URLSearchParams(ParamsOnlyStringValue)
  return queryString.toString()
}
