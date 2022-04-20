import { isStrictEqual } from '~/challenges';

describe('isStrictEqual', () => {
  it('should return true if the two values are strictly equal', () => {
    expect(isStrictEqual(1, 1)).toBe(true);
    expect(isStrictEqual(1, '1')).toBe(false);
    expect(isStrictEqual(1, true)).toBe(false);
    expect(isStrictEqual(1, null)).toBe(false);
    expect(isStrictEqual(1, undefined)).toBe(false);
    expect(isStrictEqual(1, NaN)).toBe(false);
    expect(isStrictEqual(1, {})).toBe(false);
    expect(isStrictEqual(1, [])).toBe(false);
    expect(isStrictEqual(1, new Date())).toBe(false);
    expect(isStrictEqual(1, new RegExp('a'))).toBe(false);
    expect(isStrictEqual(1, new Error())).toBe(false);
    expect(isStrictEqual(1, new Map())).toBe(false);
    expect(isStrictEqual(1, new Set())).toBe(false);
    expect(isStrictEqual(1, new WeakMap())).toBe(false);
    expect(isStrictEqual(1, new WeakSet())).toBe(false);
  });
});
