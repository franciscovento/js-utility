import { typeOf } from '@/misc'

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeOf(value) === 'object'
}
