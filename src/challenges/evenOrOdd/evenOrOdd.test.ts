import { evenOrOdd } from '~/challenges';

describe('evenOrOdd', () => {
  it('should return "Even" if the number is even', () => {
    expect(evenOrOdd(2)).toBe('Even');
  });

  it('should return "Odd" if the number is odd', () => {
    expect(evenOrOdd(1)).toBe('Odd');
  });
});
