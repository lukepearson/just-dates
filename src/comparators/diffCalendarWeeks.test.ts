import { equal as eq } from 'assert';
import { diffCalendarWeeks } from './diffCalendarWeeks';
import { format } from '../formatters/format';

describe('diffCalendarWeeks', function() {
  [
    {
      a: { year: 2015, month: 12, day: 28 },
      b: { year: 2016, month: 1, day: 1 },
      expected: 0,
    },
    {
      a: { year: 2015, month: 12, day: 27 },
      b: { year: 2016, month: 1, day: 1 },
      expected: 1,
    },
    {
      a: { year: 2015, month: 12, day: 29 },
      b: { year: 2016, month: 1, day: 4 },
      expected: 1,
    },
    {
      a: { year: 2015, month: 12, day: 28 },
      b: { year: 2016, month: 5, day: 2 },
      expected: 18,
    },
    {
      a: { day: 3, month: 1, year: 2020 },
      b: { day: 7, month: 1, year: 2020 },
      expected: 1,
    },
    {
      a: { day: 1, month: 1, year: 2020 },
      b: { day: 10, month: 1, year: 2020 },
      expected: 1,
    },
    {
      a: { day: 30, month: 12, year: 2019 },
      b: { day: 23, month: 8, year: 2020 },
      expected: 33,
    },
    {
      a: { day: 30, month: 12, year: 2019 },
      b: { day: 24, month: 8, year: 2020 },
      expected: 34,
    },
    {
      a: { day: 30, month: 12, year: 2019 },
      b: { day: 30, month: 8, year: 2020 },
      expected: 34,
    },
    {
      a: { day: 20, month: 8, year: 2000 },
      b: { day: 8, month: 3, year: 2020 },
      expected: 1019,
    },
    {
      a: { day: '20', month: '8', year: '2000' },
      b: { day: '8', month: '3', year: '2020' },
      expected: 1019,
    },
  ].forEach(({ a, b, expected }) => {
    it(`${format(a)} to ${format(b)} == ${expected} weeks`, function() {
      eq(diffCalendarWeeks(a, b), expected);
    });
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diffCalendarWeeks(
      { day: 10, month: 1, year: 2020 },
      { day: 1, month: 1, year: 2020 }
    );
    eq(result, 1);
  });
});
