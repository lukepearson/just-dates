import { deepStrictEqual as eq } from 'assert';
import { diff } from './diff';
import { format } from '../formatters/format';

describe('diff', function() {
  [
    {
      a: { year: 2020, month: 11, day: 2 },
      b: { year: 2020, month: 12, day: 2 },
      expected: { year: 0, month: 1, day: 0 },
    },
    {
      a: { year: 2020, month: 12, day: 31 },
      b: { year: 2021, month: 1, day: 1 },
      expected: { year: 0, month: 0, day: 1 },
    },
    {
      a: { year: 2020, month: 12, day: 31 },
      b: { year: 2030, month: 12, day: 30 },
      expected: { year: 9, month: 11, day: 30 },
    },
    {
      a: { year: 2020, month: 8, day: 20 },
      b: { year: 2026, month: 1, day: 10 },
      expected: { year: 5, month: 4, day: 21 },
    },
    {
      a: { year: 2021, month: 6, day: 6 },
      b: { year: 2020, month: 6, day: 6 },
      expected: { year: 1, month: 0, day: 0 },
    },
    {
      a: { year: 2026, month: 6, day: 6 },
      b: { year: 2026, month: 6, day: 6 },
      expected: { year: 0, month: 0, day: 0 },
    },
    {
      a: { year: 2026, month: 1, day: 1 },
      b: { year: 2026, month: 12, day: 31 },
      expected: { year: 0, month: 11, day: 30 },
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} - ${format(b)} == ${format(expected)} months`, function() {
      eq(diff(a, b), expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diff({ day: 10, month: 1, year: 2020 }, { day: 1, month: 1, year: 2020 });
    const result2 = diff({ day: 1, month: 1, year: 2020 }, { day: 10, month: 1, year: 2020 });
    eq(result, { day: 9, month: 0, year: 0 });
    eq(result, result2);
  });
});
