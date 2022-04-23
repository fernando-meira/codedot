import { removeArrayItem } from '~/challenges';

describe('removeArrayItem', () => {
  it('should return an array with filtered items', () => {
    const input = [1, 2, 3, 4, 5];
    const output = [2, 3, 4, 5];

    expect(removeArrayItem(input, 1)).toEqual(output);
  });
});
