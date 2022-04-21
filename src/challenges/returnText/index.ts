interface ReturnTextProps {
  text: string;
  flag: 'start' | 'end';
}

export default function returnText({ text, flag }: ReturnTextProps) {
  if (flag === 'start') {
    return text.slice(0, 3);
  }

  return text.slice(-3);
}
