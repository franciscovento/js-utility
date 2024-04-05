import { describe, expect, test } from 'vitest'

import { sum } from '@/arrays/'

describe('sum', () => {
  test.each([
    [[1, 2], 3],
    [[1, 2, -3], 0],
    [[1, 2, 3, 4], 10],
    [[-3, -4], -7]
  ])('sum(%j) should return %j', (args, expected) => {
    expect(sum(args)).toStrictEqual(expected)
  })
})
