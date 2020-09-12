import { deepStrictEqual as eq } from 'assert';
import { getStartOfMonth } from './getStartOfMonth';

describe('getStartOfMonth', function() {
  [
    {
      input: { month: 8, year: 2020, day: 23 },
      expected: { year: 2020, month: 8, day: 1 },
    },
    {
      input: { month: 4, year: 2019, day: 24 },
      expected: { year: 2019, month: 4, day: 1 },
    },
  ].forEach(({ input, expected }) => {
    it(`returns the first day of the month for ${input.year}`, function() {
      eq(getStartOfMonth(input), expected);
    });
  });
});
