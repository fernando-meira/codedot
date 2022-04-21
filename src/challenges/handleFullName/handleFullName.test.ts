import { handleFullName } from '~/challenges';

describe('handleFullName', () => {
  it('should return the first name', () => {
    const result = handleFullName({
      fullName: 'John Doe',
      flag: 'firstName',
    });

    expect(result).toBe('John');
  });

  it('should return all name minus first name.', () => {
    const result = handleFullName({
      fullName: 'John Doe Lorem',
      flag: 'lastName',
    });

    expect(result).toBe('Doe Lorem');
  });

  it('should return full name if the flag does not exist.', () => {
    const result = handleFullName({
      fullName: 'John Doe Lorem',
    });

    expect(result).toBe('John Doe Lorem');
  });
});
