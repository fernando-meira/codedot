import { removeItems } from '~/challenges';

describe('removeItems', () => {
  it('should return an array of the first n items', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemToBeRemoved = 5;
    const expected = [1, 2, 3, 4, 6, 7, 8, 9, 10];
    const actual = removeItems(items, itemToBeRemoved);
    expect(actual).toEqual(expected);
  });
});
