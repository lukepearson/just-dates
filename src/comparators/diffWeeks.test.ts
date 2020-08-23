import { equal as eq } from 'assert';
import { diffWeeks } from './diffWeeks';
import { format } from '../formatters/format';

describe('diffWeeks', function() {
  [
    {
      input: [
        { year: 2015, month: 12, day: 28 },
        { year: 2016, month: 5, day: 2 },
      ],
      expected: 18,
    },
    {
      input: [
        { day: 1, month: 1, year: 2020 },
        { day: 10, month: 1, year: 2020 },
      ],
      expected: 1,
    },
    {
      input: [
        { day: 30, month: 12, year: 2019 },
        { day: 23, month: 8, year: 2020 },
      ],
      expected: 33,
    },
    {
      input: [
        { day: 30, month: 12, year: 2019 },
        { day: 24, month: 8, year: 2020 },
      ],
      expected: 34,
    },
    {
      input: [
        { day: 30, month: 12, year: 2019 },
        { day: 30, month: 8, year: 2020 },
      ],
      expected: 34,
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input[0])} to ${format(input[1])} == ${expected} weeks`, function() {
      const result = diffWeeks(input[0], input[1]);
      eq(result, expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diffWeeks({ day: 10, month: 1, year: 2020 }, { day: 1, month: 1, year: 2020 });
    eq(result, 1);
  });
});
