import { equal as eq } from 'assert';
import { getCalendarWeek } from './getCalendarWeek';
import { format } from '../formatters/format';

describe('getCalendarWeek', function() {
  [
    {
      input: { year: 2019, month: 1, day: 1 },
      expected: 1,
    },
    {
      input: { year: 2020, month: 2, day: 17 },
      expected: 8,
    },
    {
      input: { year: 2020, month: 2, day: 29 },
      expected: 9,
    },
    {
      input: { year: 2020, month: 4, day: 6 },
      expected: 15,
    },
    {
      input: { year: 2020, month: 4, day: 14 },
      expected: 16,
    },
    {
      input: { year: 2020, month: 8, day: 23 },
      expected: 34,
    },
    {
      input: { year: 2016, month: 5, day: 1 },
      expected: 17,
    },
    {
      input: { year: 2016, month: 5, day: 2 },
      expected: 18,
    },
    {
      input: { year: 2002, month: 3, day: 25 },
      expected: 13,
    },
    {
      input: { year: 2010, month: 6, day: 9 },
      expected: 23,
    },
  ].forEach(({ input, expected }) => {
    it(`${format(input)} == week number ${expected}`, function() {
      eq(getCalendarWeek(input), expected);
    });
  });
});
