import { describe, expect, test } from 'vitest'

import { isEmpty } from '../'

describe('isEmpty', () => {
  test.each([
    ['string', true],
    [null, true],
    [undefined, true],
    [[1, 2, 3, 4], false],
    [{ a: 1 }, false],
    [0, true],
    [{}, true],
    [[], true]
  ])('isEmpty(%j) should return %j', (args, expected) => {
    expect(isEmpty(args)).toBe(expected)
  })
})
