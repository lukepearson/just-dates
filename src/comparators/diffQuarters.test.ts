import { equal as eq } from 'assert';
import { diffQuarters } from './diffQuarters';
import { format } from '../formatters/format';

describe('diffQuarters', function() {
  [
    {
      a: { year: 2021, month: 2, day: 10 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 2,
    },
    {
      a: { year: 2021, month: 3, day: 10 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 2,
    },
    {
      a: { year: 2021, month: 4, day: 10 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 2,
    },
    {
      a: { year: 2021, month: 5, day: 10 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 3,
    },
    {
      a: { year: 16, month: 4, day: 30 },
      b: { year: 2020, month: 8, day: 1 },
      expected: 8017,
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} to ${format(b)} == ${expected} quarters`, function() {
      eq(diffQuarters(a, b), expected);
    });
  });
});
