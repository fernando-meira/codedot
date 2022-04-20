interface ArithmeticOperationsProps {
  firstValue: number;
  secondValue: number;
  thirdValue: number;
  fourthValue: number;
  fifthValue: number;
  sixthValue: number;
}

export default function arithmeticOperations({
  firstValue,
  secondValue,
  thirdValue,
  fourthValue,
  fifthValue,
  sixthValue,
}: ArithmeticOperationsProps) {
  const sum = firstValue + secondValue;
  const sub = sum - thirdValue;
  const mult = sub * fourthValue;
  const div = mult / fifthValue;
  const pot = div ** sixthValue;

  return pot.toFixed(2);
}
