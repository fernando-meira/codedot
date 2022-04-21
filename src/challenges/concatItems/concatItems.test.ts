import { concatItems } from '~/challenges';

describe('concatItems', () => {
  it('should return concat two arrays', () => {
    const firstArray = [1, 2, 3, 4];
    const secondArray = [4, 5, 6];

    const result = concatItems(firstArray, secondArray);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return empty array', () => {
    const firstArray = [];
    const secondArray = [];

    const result = concatItems(firstArray, secondArray);

    expect(result).toEqual([]);
  });
});
