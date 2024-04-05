import  { expect, test } from "vitest";
import { isObject } from "../";


test('Check if value is an object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject('hello')).toBe(false);

});