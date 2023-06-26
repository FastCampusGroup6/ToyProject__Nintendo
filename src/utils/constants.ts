export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
export const displayNameRegex = /^[a-zA-Z가-힣0-9\s]{1,10}$/

//payment regex
export const ACCOUNT_NUMBER_REGEX = /[^0-9]/g
export const PHONE_NUMBER_REGEX = /[^0-9]/g
export const PHONE_NUMBER_FORMAT_REGEX = /(\d{3})(\d{4})(\d{4})/
