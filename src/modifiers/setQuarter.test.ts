import { setQuarter } from './setQuarter';
import { deepStrictEqual as eq } from 'assert';
import { format } from '../formatters/format';

describe('setQuarter', function() {
  [
    {
      input: { year: 2020, month: 2, day: 22, quarter: 1 },
      expected: { year: 2020, month: 2, day: 22 },
    },
    {
      input: { year: 2020, month: 2, day: 2, quarter: 2 },
      expected: { year: 2020, month: 5, day: 2 },
    },
    {
      input: { year: 2020, month: 2, day: 2, quarter: 3 },
      expected: { year: 2020, month: 8, day: 2 },
    },
    {
      input: { year: 2020, month: 2, day: 2, quarter: 4 },
      expected: { year: 2020, month: 11, day: 2 },
    },
    {
      input: { year: 2020, month: 12, day: 16, quarter: 1 },
      expected: { year: 2020, month: 3, day: 16 },
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input)} quarter ${input.quarter} == ${format(expected)}`, function() {
      const result = setQuarter(input, input.quarter);
      eq(result, expected);
    });
  });
});
