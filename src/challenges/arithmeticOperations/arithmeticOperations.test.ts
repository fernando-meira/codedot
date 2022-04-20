import { arithmeticOperations } from '~/challenges';

describe('arithmeticOperations', () => {
  it('should return the correct result', () => {
    expect(
      arithmeticOperations({
        firstValue: 2,
        secondValue: 2,
        thirdValue: 1,
        fourthValue: 4,
        fifthValue: 5,
        sixthValue: 6,
      })
    ).toBe('191.10');
  });
});
