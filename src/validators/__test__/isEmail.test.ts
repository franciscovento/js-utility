import { describe, expect, it } from 'vitest'

import { IsEmail } from '@/validators/isEmail'

describe('IsEmail', () => {
  it.each([
    ['test@gmail.com', true],
    ['tesT._23@w.co', true],
    ['test', false],
    ['test@', false],
    ['test@gmail', false],
    ['test@gmail.', false],
    ['test@gmail.c', false],
    [123, false],
    [null, false],
    [undefined, false],
    [{}, false],
    [() => {}, false]
  ])('IsEmail(%j) should return %j', (email, expected) => {
    expect(IsEmail(email)).toBe(expected)
  })
})
