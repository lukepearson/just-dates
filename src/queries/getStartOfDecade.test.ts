import { deepStrictEqual as eq } from 'assert';
import { getStartOfDecade } from './getStartOfDecade';

describe('getStartOfDecade', function() {
  [
    {
      input: { month: 8, year: 2020, day: 23 },
      expected: { year: 2020, month: 1, day: 1 },
    },
    {
      input: { month: 8, year: 2019, day: 24 },
      expected: { year: 2010, month: 1, day: 1 },
    },
  ].forEach(({ input, expected }) => {
    it(`returns the first day of the decade for ${input.year}`, function() {
      eq(getStartOfDecade(input), expected);
    });
  });
});
