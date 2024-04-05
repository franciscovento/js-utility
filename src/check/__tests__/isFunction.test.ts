import { describe, expect, test } from 'vitest'

import { isFunction } from '@/check/'

describe('isString', () => {
  test.each([
    ['string', false],
    [1, false],
    [null, false],
    [undefined, false],
    [{}, false],
    [[], false],
    [() => {}, true],
    [function () {}, true]
  ])('isFunction(%j) should return %j', (args, expected) => {
    expect(isFunction(args)).toBe(expected)
  })
})
