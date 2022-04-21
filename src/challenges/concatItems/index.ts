export default function concatItems(
  firstArray: any[],
  secondArray: any[]
): any[] {
  const concatenatedItems = [...firstArray, ...secondArray];
  const removeDuplicates = concatenatedItems.filter(
    (item, index) => concatenatedItems.indexOf(item) === index
  );

  return removeDuplicates;
}
