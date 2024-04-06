import { isNumber } from '@/check'

export function isValidAge(value: unknown): value is number {
  return isNumber(value) && value >= 0 && value <= 125
}
