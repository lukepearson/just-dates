import { isSameQuarter } from './isSameQuarter';
import { format } from '../formatters/format';
import { equal as eq } from 'assert';

describe('isSameQuarter', function() {
  [
    {
      a: { year: 1970, month: 1, day: 4 },
      b: { year: 1970, month: 3, day: 6 },
      expected: true,
    },
    {
      a: { year: 1970, month: 2, day: 4 },
      b: { year: 1970, month: 1, day: 6 },
      expected: true,
    },
    {
      a: { year: 1970, month: 4, day: 4 },
      b: { year: 1970, month: 7, day: 6 },
      expected: false,
    },
    {
      a: { year: 1970, month: 2, day: 4 },
      b: { year: 1980, month: 2, day: 6 },
      expected: false,
    },
  ].forEach(({ a, b, expected }) => {
    it(`isSameQuarter(${format(a)}, ${format(b)}) === ${expected}`, function() {
      eq(isSameQuarter(a, b), expected);
    });
  });
});
