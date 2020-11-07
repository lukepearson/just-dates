import { deepStrictEqual as eq } from 'assert';
import { getDuration } from './getDuration';
import { format } from '../formatters/format';
import { formatDuration } from './formatDuration';

describe('getDuration', function() {
  [
    {
      a: { year: 2020, month: 11, day: 2 },
      b: { year: 2020, month: 12, day: 2 },
      expected: { years: 0, months: 1, days: 0 },
    },
    {
      a: { year: 2020, month: 12, day: 31 },
      b: { year: 2021, month: 1, day: 1 },
      expected: { years: 0, months: 0, days: 1 },
    },
    {
      a: { year: 2020, month: 12, day: 31 },
      b: { year: 2030, month: 12, day: 30 },
      expected: { years: 9, months: 11, days: 30 },
    },
    {
      a: { year: 2020, month: 8, day: 20 },
      b: { year: 2026, month: 1, day: 10 },
      expected: { years: 5, months: 4, days: 21 },
    },
    {
      a: { year: 2021, month: 6, day: 6 },
      b: { year: 2020, month: 6, day: 6 },
      expected: { years: 1, months: 0, days: 0 },
    },
    {
      a: { year: 2026, month: 6, day: 6 },
      b: { year: 2026, month: 6, day: 6 },
      expected: { years: 0, months: 0, days: 0 },
    },
    {
      a: { year: 2026, month: 1, day: 1 },
      b: { year: 2026, month: 12, day: 31 },
      expected: { years: 0, months: 11, days: 30 },
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} - ${format(b)} == ${formatDuration(expected)}`, function() {
      eq(getDuration(a, b), expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = getDuration({ day: 10, month: 1, year: 2020 }, { day: 1, month: 1, year: 2020 });
    const result2 = getDuration(
      { day: 1, month: 1, year: 2020 },
      { day: 10, month: 1, year: 2020 }
    );
    eq(result, { days: 9, months: 0, years: 0 });
    eq(result, result2);
  });
});
