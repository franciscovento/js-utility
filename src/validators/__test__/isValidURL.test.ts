import { describe, expect, it } from 'vitest'

import { isValidURL } from '../isValidURL'

describe('isValidURL', () => {
  it.each([
    ['http://www.google.com', true],
    ['http://www.google.com?foo=bar', true],
    ['https://www.google.com', true],
    ['www.google.com', false],
    ['google.com', false],
    ['google', false],
    ['http://google', false],
    ['http://google.', false],
    ['http://google.c', false],
    [123, false],
    [null, false],
    [undefined, false],
    [{}, false],
    [[], false]
  ])('isValidURL(%j) should return %j', (url, expected) => {
    expect(isValidURL(url)).toBe(expected)
  })
})
