import { deepStrictEqual as eq } from 'assert';
import { generateRange } from './generateRange';

describe('generateRange', function() {
  it('generates a date range between a and b', function() {
    eq(generateRange({ year: 2020, month: 4, day: 30 }, { year: 2020, month: 5, day: 4 }), [
      {
        day: 30,
        month: 4,
        year: 2020,
      },
      {
        day: 1,
        month: 5,
        year: 2020,
      },
      {
        day: 2,
        month: 5,
        year: 2020,
      },
      {
        day: 3,
        month: 5,
        year: 2020,
      },
      {
        day: 4,
        month: 5,
        year: 2020,
      },
    ]);
  });

  it('returns the same result if the args are swapped', function() {
    const d1 = { year: 2020, month: 4, day: 6 };
    const d2 = { year: 2022, month: 2, day: 1 };
    const result1 = generateRange(d1, d2);
    const result2 = generateRange(d2, d1);
    eq(result1, result2);
  });
});
