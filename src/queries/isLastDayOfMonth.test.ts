import { equal as eq } from 'assert';
import { isLastDayOfMonth } from './isLastDayOfMonth';
import { format } from '../formatters/format';

describe('isLastDayOfMonth', function() {
  [
    {
      input: { month: 8, year: 2020, day: 31 },
      expected: true,
    },
    {
      input: { month: 2, year: 2019, day: 28 },
      expected: true,
    },
    {
      input: { month: 8, year: 2020, day: 32 },
      expected: false,
    },
    {
      input: { year: 1998, month: 1, day: 1 },
      expected: false,
    },
  ].forEach(({ input, expected }) => {
    it(`isLastDayOfMonth(${format(input)}) === ${expected}`, function() {
      eq(isLastDayOfMonth(input), expected);
    });
  });
});
