// hola -> Hola
import { describe, expect, it } from 'vitest'

import { capitalize } from '../capitalize'

describe('capitalize', () => {
  // it('capitalize("coca cola") should be "Coca cola', () => {})
  it('capitalize("coca cola") should be "Coca Cola"', () => {
    const result = capitalize('coca cola')
    expect(result).toBe('Coca Cola')
  })
  it('capitalize ([]) should return the same item', () => {
    // @ts-expect-error should be this way
    const result = capitalize([])
    expect(result).toStrictEqual([])
  })
})
