import { equal as eq } from 'assert';
import { diffMonths } from './diffMonths';
import { format } from '../formatters/format';

describe('diffMonths', function() {
  [
    {
      input: [
        { year: 2020, month: 11, day: 2 },
        { year: 2020, month: 12, day: 2 },
      ],
      expected: 1,
    },
    {
      input: [
        { year: 2020, month: 8, day: 1 },
        { year: 2021, month: 2, day: 10 },
      ],
      expected: 6,
    },
    {
      input: [
        { year: 2021, month: 2, day: 10 },
        { year: 2020, month: 8, day: 1 },
      ],
      expected: 6,
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input[0])} to ${format(input[1])} == ${expected} months`, function() {
      const result = diffMonths(input[0], input[1]);
      eq(result, expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diffMonths({ day: 1, month: 1, year: 2020 }, { day: 1, month: 2, year: 2020 });
    const result2 = diffMonths({ day: 1, month: 2, year: 2020 }, { day: 1, month: 1, year: 2020 });
    eq(result, 1);
    eq(result, result2);
  });
});
