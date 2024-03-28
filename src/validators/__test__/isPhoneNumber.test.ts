import { describe, expect, it } from 'vitest'

import { isValidPhoneNumber } from '../isValidPhoneNumber'

describe('isValidPhoneNumber', () => {
  it.each([
    ['123456789', true],
    ['1234567891234567793418', false],
    [123456789, false]
  ])('isPhoneNumber(%j) should return %j', (value, expected) => {
    expect(isValidPhoneNumber(value)).toBe(expected)
  })
})
