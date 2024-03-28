import { describe, expect, test } from 'vitest'

import { isString } from '@/check/isString'

describe('isString', () => {
  test.each([
    ['string', true],
    [1, false],
    [null, false],
    [undefined, false],
    [{}, false],
    [[], false]
  ])('isString(%j) should return %j', (args, expected) => {
    expect(isString(args)).toBe(expected)
  })
})
