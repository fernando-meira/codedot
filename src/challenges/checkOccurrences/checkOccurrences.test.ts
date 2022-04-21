import { checkOccurrences } from '~/challenges';

describe('checkOccurrences', () => {
  it('should return the number of occurrences of a word in a text', () => {
    expect(
      checkOccurrences('a', 'Quantas vezes o valor de a ocorre aqui?')
    ).toBe(5);
  });

  it('should return empty array', () => {
    expect(checkOccurrences('a', 'Teste')).toBe(0);
  });
});
