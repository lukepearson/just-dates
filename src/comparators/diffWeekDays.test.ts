import { equal as eq } from 'assert';
import { diffWeekDays } from './diffWeekDays';
import { format } from '../formatters/format';

describe('diffWeekDays', function() {
  [
    {
      a: { year: 2015, month: 5, day: 2 },
      b: { year: 2015, month: 5, day: 2 },
      expected: 0,
    },
    {
      a: { year: 2015, month: 5, day: 2 },
      b: { year: 2015, month: 5, day: 7 },
      expected: 3,
    },
    {
      a: { year: 2020, month: 8, day: 5 },
      b: { year: 2020, month: 8, day: 20 },
      expected: 11,
    },
    {
      a: { year: 2020, month: 8, day: 5 },
      b: { year: 2021, month: 2, day: 28 },
      expected: 148,
    },
    {
      a: { year: 2021, month: 2, day: 28 },
      b: { year: 2020, month: 8, day: 5 },
      expected: 148,
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} to ${format(b)} == ${expected} weekdays`, function() {
      eq(diffWeekDays(a, b), expected);
    });
  });
});
