import { cutArray } from '~/challenges';

describe('cutArray', () => {
  it('should return an array of the first n items', () => {
    expect(cutArray([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(cutArray([1, 2, 3, 4, 5], 2)).toEqual([1, 2]);
    expect(cutArray([1, 2, 3, 4, 5], 1)).toEqual([1]);
    expect(cutArray([1, 2, 3, 4, 5], 0)).toEqual([]);
    expect(cutArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
