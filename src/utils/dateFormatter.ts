export function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function getNonMinorUserDate() {
  const YEARS = 18;
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear() - YEARS,
    currentDate.getMonth(),
    currentDate.getDate()
  );
}
