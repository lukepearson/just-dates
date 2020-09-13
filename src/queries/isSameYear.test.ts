import { isSameYear } from './isSameYear';
import { format } from '../formatters/format';
import { equal as eq } from 'assert';

describe('isSameYear', function() {
  [
    {
      a: { year: 1970, month: 1, day: 4 },
      b: { year: 1970, month: 1, day: 6 },
      expected: true,
    },
    {
      a: { year: 1982, month: 1, day: 7 },
      b: { year: 1982, month: 12, day: 10 },
      expected: true,
    },
    {
      a: { year: 1999, month: 2, day: 7 },
      b: { year: 1980, month: 11, day: 9 },
      expected: false,
    },
  ].forEach(({ a, b, expected }) => {
    it(`isSameYear(${format(a)}, ${format(b)}) === ${expected}`, function() {
      eq(isSameYear(a, b), expected);
    });
  });
});
