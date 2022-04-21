export default function sortItems(items: any[], order: 'asc' | 'desc'): any[] {
  if (order === 'asc') {
    return items.sort((itemA, itemB) => itemA - itemB);
  }

  return items.sort((itemA, itemB) => itemB - itemA);
}
