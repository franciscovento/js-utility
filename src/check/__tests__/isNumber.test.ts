import { describe, it, expect } from 'vitest';
import { isNumber } from '../';

describe('isNumber', () => {
  it('should return true if value is a number', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber(-10)).toBe(true);
  });

  it('should return false if value is not a number', () => {
    expect(isNumber('42')).toBe(false);
    expect(isNumber('3.14')).toBe(false);
    expect(isNumber('not a number')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });
});