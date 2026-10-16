export function arithmeticMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('EMPTY_ARRAY');
  }

  const sum = numbers.reduce((total, current) => total + current, 0);

  return sum / numbers.length;
}
