import { isSameMonth } from './isSameMonth';
import { format } from '../formatters/format';
import { equal as eq } from 'assert';

describe('isSameMonth', function() {
  [
    {
      a: { year: 1970, month: 1, day: 4 },
      b: { year: 1970, month: 1, day: 6 },
      expected: true,
    },
    {
      a: { year: 1970, month: 2, day: 4 },
      b: { year: 1980, month: 2, day: 6 },
      expected: false,
    },
  ].forEach(({ a, b, expected }) => {
    it(`isSameMonth(${format(a)}, ${format(b)}) === ${expected}`, function() {
      eq(isSameMonth(a, b), expected);
    });
  });
});
