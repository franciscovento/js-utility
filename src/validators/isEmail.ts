import { isString } from '@/check/isString'

export function IsEmail(value: unknown): value is string {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return isString(value) ? emailRegex.test(value) : false
}
