import { deepStrictEqual as eq } from 'assert';
import { diff } from './diff';
import { format } from '../formatters/format';

describe('diff', function() {
  [
    {
      input: [
        { year: 2020, month: 11, day: 2 },
        { year: 2020, month: 12, day: 2 },
      ],
      expected: { year: 0, month: 1, day: 0 },
    },
    {
      input: [
        { year: 2020, month: 12, day: 31 },
        { year: 2021, month: 1, day: 1 },
      ],
      expected: { year: 0, month: 0, day: 1 },
    },
    {
      input: [
        { year: 2020, month: 12, day: 31 },
        { year: 2030, month: 12, day: 30 },
      ],
      expected: { year: 9, month: 11, day: 30 },
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input[0])} - ${format(input[1])} == ${format(expected)} months`, function() {
      const result = diff(input[0], input[1]);
      eq(result, expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diff({ day: 10, month: 1, year: 2020 }, { day: 1, month: 1, year: 2020 });
    const result2 = diff({ day: 1, month: 1, year: 2020 }, { day: 10, month: 1, year: 2020 });
    eq(result, { day: 9, month: 0, year: 0 });
    eq(result, result2);
  });
});
