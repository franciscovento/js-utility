import { describe, expect, it } from 'vitest';
import { isObjectLike } from '../';

describe('isObjectLike', () => {
  it('should return true for object-like values', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike({ foo: 'bar' })).toBe(true);
    expect(isObjectLike([])).toBe(false);
    expect(isObjectLike(null)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(123)).toBe(false);
    expect(isObjectLike('string')).toBe(false);
    expect(isObjectLike(new Date())).toBe(false);
    expect(isObjectLike(/regex/)).toBe(false);
  });
});
