import { equal as eq } from 'assert';
import { diffMonths } from './diffMonths';
import { format } from '../formatters/format';

describe('diffMonths', function() {
  [
    {
      a: { year: 2020, month: 11, day: 2 },
      b: { year: 2020, month: 12, day: 2 },
      expected: 1,
    },
    {
      a: { year: 2020, month: 8, day: 1 },
      b: { year: 2021, month: 2, day: 10 },
      expected: 6,
    },
    {
      a: { year: 2021, month: 2, day: 10 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 6,
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} to ${format(b)} == ${expected} months`, function() {
      eq(diffMonths(a, b), expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diffMonths({ day: 1, month: 1, year: 2020 }, { day: 1, month: 2, year: 2020 });
    const result2 = diffMonths({ day: 1, month: 2, year: 2020 }, { day: 1, month: 1, year: 2020 });
    eq(result, 1);
    eq(result, result2);
  });
});
