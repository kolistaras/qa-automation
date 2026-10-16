import { describe, it, expect } from 'vitest';
import { arithmeticMean } from '../src/average';

describe('arithmeticMean', () => {
  it('обчислює середнє арифметичне додатних чисел', () => {
    expect(arithmeticMean([1, 2, 3])).toBe(2);
  });

  it('правильно обчислює середнє для від’ємних чисел і нуля', () => {
    expect(arithmeticMean([-2, 0, 2])).toBe(0);
  });

  it('повертає єдиний елемент масиву', () => {
    expect(arithmeticMean([7])).toBe(7);
  });

  it('відхиляє порожній масив', () => {
    expect(() => arithmeticMean([])).toThrow('EMPTY_ARRAY');
  });
});
