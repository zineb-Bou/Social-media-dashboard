const million = 1_000_000;
const thousand = 1000;
export function formatNumber(num) {
  if (num >= 10 * million) {
    const numericPart = Math.floor(num / million);
    const suffix = 'm';
    return `${numericPart}${suffix}`;
  }
  if (num >= 10 * thousand) {
    const numericPart = Math.floor(num / thousand);
    const suffix = 'k';
    return `${numericPart}${suffix}`;
  }
  return num.toString();
}
