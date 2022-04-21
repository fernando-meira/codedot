export default function removeItems(
  items: any[],
  itemToBeRemoved: string | number
) {
  return items.filter((item) => item !== itemToBeRemoved);
}
