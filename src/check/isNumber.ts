import { typeOf } from '@/misc'

export function isNumber(value: unknown): value is number {
  return typeOf(value) === 'number'
}
