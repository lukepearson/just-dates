import { setWeek } from './setWeek';
import { deepStrictEqual as eq } from 'assert';
import { getDayOfWeek } from '../queries/getDayOfWeek';
import { format } from '../formatters/format';

describe('setWeek', function() {
  [
    {
      input: { year: 2020, month: 2, day: 22, week: 16 },
      expected: { year: 2020, month: 4, day: 18 },
    },
    {
      input: { year: 2020, month: 2, day: 2, week: 16 },
      expected: { year: 2020, month: 4, day: 19 },
    },
  ].forEach(({ input, expected }) => {
    it(`${input.year} week ${input.week} == ${format(expected)}`, function() {
      const weekDay = getDayOfWeek(input);
      const result = setWeek(input, input.week);
      eq(weekDay, getDayOfWeek(result));
      eq(result, expected);
    });
  });
});
