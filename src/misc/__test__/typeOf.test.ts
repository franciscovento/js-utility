import { describe, expect, test } from 'vitest'

import { typeOf } from '../'

describe('typeOf', () => {
  test.each([
    [null, 'null'],
    [undefined, 'undefined'],
    [42, 'number'],
    [3.14, 'number'],
    [-10, 'number'],
    [['a', 'b', 'c'], 'object'],
    [{ a: 1 }, 'object']
  ])('typeOf(%j) should return %j', (args, expected) => {
    expect(typeOf(args)).toBe(expected)
  })
})
