import { deepStrictEqual as eq } from 'assert';
import { getStartOfQuarter } from './getStartOfQuarter';
import { format } from '../formatters/format';

describe('getStartOfQuarter', function() {
  [
    {
      input: { month: 8, year: 2020, day: 23 },
      expected: { year: 2020, month: 7, day: 1 },
    },
    {
      input: { month: 4, year: 2019, day: 24 },
      expected: { year: 2019, month: 4, day: 1 },
    },
    {
      input: { month: 12, year: 2019, day: 24 },
      expected: { year: 2019, month: 10, day: 1 },
    },
    {
      input: { month: 1, year: 2019, day: 24 },
      expected: { year: 2019, month: 1, day: 1 },
    },
    {
      input: { month: 3, year: 2019, day: 24 },
      expected: { year: 2019, month: 1, day: 1 },
    },
  ].forEach(({ input, expected }) => {
    it(`returns the first day of the month for ${format(input)}`, function() {
      eq(getStartOfQuarter(input), expected);
    });
  });
});
