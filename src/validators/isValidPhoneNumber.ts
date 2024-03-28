import { isNumber } from '@/check/isNumber'
import { isString } from '@/check/isString'

export function isValidPhoneNumber(
  value: unknown,
  maxLength: unknown = 12
): value is string {
  const phoneRegex = /^[0-9]/
  const maxL = isNumber(maxLength) ? maxLength : 12
  if (!isString(value)) return false
  if (value.length > maxL) return false
  return phoneRegex.test(value)
}
