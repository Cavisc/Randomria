export default function formatNumber(numbers) {
  return numbers.map(String).map((number) => number.padStart(2, "0"));
}
