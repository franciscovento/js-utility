import { isString } from '@/check/isString'

export function isValidURL(value: unknown): value is URL {
  const urlRegex = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,})(\/[\w .-]*)*(\?[\w%&=-]*)*$/i
  return isString(value) ? urlRegex.test(value) : false
}
