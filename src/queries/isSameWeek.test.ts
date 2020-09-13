import { isSameWeek } from './isSameWeek';
import { format } from '../formatters/format';
import { equal as eq } from 'assert';

describe('isSameWeek', function() {
  [
    {
      a: { year: 1970, month: 1, day: 4 },
      b: { year: 1970, month: 1, day: 6 },
      expected: false,
    },
    {
      a: { year: 1970, month: 1, day: 7 },
      b: { year: 1970, month: 1, day: 9 },
      expected: true,
    },
    {
      a: { year: 1970, month: 2, day: 7 },
      b: { year: 1980, month: 2, day: 9 },
      expected: false,
    },
    {
      a: { year: 1970, month: 1, day: 19 },
      b: { year: 1970, month: 1, day: 25 },
      expected: true,
    },
    {
      a: { year: 2020, month: 6, day: 8 },
      b: { year: 2020, month: 6, day: 14 },
      expected: true,
    },
  ].forEach(({ a, b, expected }) => {
    it(`isSameWeek(${format(a)}, ${format(b)}) === ${expected}`, function() {
      eq(isSameWeek(a, b), expected);
    });
  });
});
