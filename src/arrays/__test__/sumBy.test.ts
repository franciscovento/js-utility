import { describe, expect, test } from 'vitest'

import { sumBy } from '@/arrays/'

describe('sumBy', () => {
  const elements = [
    {
      name: 'John',
      age: 10
    },
    {
      name: 'Jane',
      age: 20
    },
    {
      name: 'Jim',
      age: 30
    }
  ]

  test('sumBy should return sum of the property', () => {
    expect(sumBy(elements, (item) => item.age)).toStrictEqual(60)
  })
})
