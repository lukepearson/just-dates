import { equal as eq } from 'assert';
import { getQuarter } from './getQuarter';
import { format } from '../formatters/format';

describe('getQuarter', function() {
  [
    {
      input: { month: 8, year: 2020, day: 23 },
      expected: 3,
    },
    {
      input: { month: 8, year: 2020, day: 24 },
      expected: 3,
    },
    {
      input: { month: 5, year: 2020, day: 25 },
      expected: 2,
    },
    {
      input: { year: 1998, month: 1, day: 1 },
      expected: 1,
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input)} == ${expected}`, function() {
      eq(getQuarter(input), expected);
    });
  });
});
