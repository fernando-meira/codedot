import { sortItems } from '~/challenges';

describe('sortItems', () => {
  const items = [3, 2, 1, 6, 5, 4, 7, 10, 9, 8];

  it('should return items sorted in ascending order.', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const actual = sortItems(items, 'asc');
    expect(actual).toEqual(expected);
  });

  it('should return items sorted in descending order.', () => {
    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const actual = sortItems(items, 'desc');
    expect(actual).toEqual(expected);
  });

  it('should return empty array.', () => {
    const items = [];
    const expected = [];
    const actual = sortItems(items, 'desc');
    expect(actual).toEqual(expected);
  });
});
