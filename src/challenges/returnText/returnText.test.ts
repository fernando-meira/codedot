import { returnText } from '~/challenges';

describe('returnText', () => {
  it('should return the first 3 characters of the string', () => {
    expect(returnText({ text: 'Hello', flag: 'start' })).toBe('Hel');
  });

  it('should return the last 3 characters of the string', () => {
    expect(returnText({ text: 'Hello', flag: 'end' })).toBe('llo');
  });

  it('should return all characters if the word has less than three characters', () => {
    expect(returnText({ text: 'Hi', flag: 'start' })).toBe('Hi');
  });
});
