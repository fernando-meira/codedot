export default function formatDate(date: Date | string) {
  const numericDate = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return numericDate;
}
