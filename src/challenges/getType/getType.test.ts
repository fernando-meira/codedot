import { getType } from '~/challenges';

describe('getType', () => {
  it('should return the type of the given value', () => {
    expect(getType(1)).toBe('number');
    expect(getType(true)).toBe('boolean');
    expect(getType('foo')).toBe('string');
    expect(getType(null)).toBe('object');
    expect(getType(undefined)).toBe('undefined');
    expect(getType(Symbol('foo'))).toBe('symbol');
    expect(getType(() => {})).toBe('function');
    expect(getType([])).toBe('object');
    expect(getType({})).toBe('object');
  });
});
