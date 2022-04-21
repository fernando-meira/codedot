export default function checkOccurrences(word: string, text: string): number {
  return (text.match(new RegExp(word, 'gi')) || []).length;
}
