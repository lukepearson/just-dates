import { deepEqual as eq } from 'assert';
import { getStartOfWeek } from './getStartOfWeek';

describe('getStartOfWeek', function() {
  [
    {
      input: { month: 8, year: 2020, day: 23 },
      expected: { year: 2020, month: 8, day: 17 },
    },
    {
      input: { month: 8, year: 2020, day: 24 },
      expected: { year: 2020, month: 8, day: 24 },
    },
    {
      input: { month: 8, year: 2020, day: 25 },
      expected: { year: 2020, month: 8, day: 24 },
    },
    {
      input: { year: 1998, month: 1, day: 1 },
      expected: { year: 1997, month: 12, day: 29 },
    },
  ].forEach(({ input, expected }) => {
    it('returns the first day of the week', function() {
      eq(getStartOfWeek(input), expected);
    });
  });
});
