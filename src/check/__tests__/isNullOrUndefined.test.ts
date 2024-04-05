import { describe, expect, test } from 'vitest'

import { isNullOrUndefined } from '..'

describe('isEmpty', () => {
  test.each([
    [null, true],
    [undefined, true],
    [[1, 2, 3, 4], false],
    [{ a: 1 }, false],
    [0, false],
    [{}, false],
    [[], false]
  ])('isNullOrUndefined(%j) should return %j', (args, expected) => {
    expect(isNullOrUndefined(args)).toBe(expected)
  })
})
