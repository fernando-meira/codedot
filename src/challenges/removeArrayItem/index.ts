export default function removeArrayItem(
  items: any[],
  itemToRemove: any
): any[] {
  return items.filter((item) => item !== itemToRemove);
}
