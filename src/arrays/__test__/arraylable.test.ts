import { describe, expect, test } from 'vitest'

import { arraylable } from '@/arrays/arraylable'

describe('arraylable', () => {
  test.each([
    [null, []],
    [{}, []],
    [1, []],
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [['some value'], ['some value']],
    [() => { }, []]
  ])('arraylable(%j) should return %j', (args, expected) => {
    // @ts-expect-error should accept any type
    expect(arraylable(args)).toStrictEqual(expected)
  })
})
