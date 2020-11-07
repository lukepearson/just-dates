import { deepStrictEqual as eq } from 'assert';
import { format } from '../formatters/format';
import { diffYears } from './diffYears';

describe('diffYears', function() {
  [
    {
      a: { year: 1970, month: 1, day: 3 },
      b: { year: 1980, month: 1, day: 6 },
      expected: 10,
    },
    {
      a: { year: 1970, month: 1, day: 31 },
      b: { year: 1980, month: 12, day: 1 },
      expected: 10,
    },
    {
      a: { year: 1980, month: 12, day: 1 },
      b: { year: 1970, month: 1, day: 31 },
      expected: 10,
    },
    {
      a: { year: 1900, month: 12, day: 31 },
      b: { year: 1901, month: 1, day: 1 },
      expected: 0,
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} - ${format(b)} == ${expected}`, function() {
      eq(expected, diffYears(a, b));
    });
  });
});
