import { deepEqual as eq } from 'assert';
import { getStartOfWeekYear } from './getStartOfWeekYear';

describe('getStartOfWeekYear', function() {
  [
    {
      input: { month: 12, year: 2020, day: 29 },
      expected: { year: 2019, month: 12, day: 30 },
    },
    {
      input: { month: 6, year: 2004, day: 13 },
      expected: { year: 2003, month: 12, day: 29 },
    },
    {
      input: { month: 6, year: 2003, day: 13 },
      expected: { year: 2002, month: 12, day: 30 },
    },
    {
      input: { month: 6, year: 2002, day: 13 },
      expected: { year: 2001, month: 12, day: 31 },
    },
  ].forEach(({ input, expected }) => {
    it('returns the first monday of the week year', function() {
      eq(getStartOfWeekYear(input), expected);
    });
  });
});
