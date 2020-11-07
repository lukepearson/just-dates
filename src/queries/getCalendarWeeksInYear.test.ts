import { deepStrictEqual as eq } from 'assert';
import { getCalendarWeeksInYear } from './getCalendarWeeksInYear';

describe('getCalendarWeeksInYear', function() {
  [
    { year: 2019, expected: 52 },
    { year: 2020, expected: 53 },
    { year: 2021, expected: 52 },
    { year: 2022, expected: 52 },
  ].forEach(({ year, expected }) => {
    it(`the year ${year} has ${expected} calendar weeks`, function() {
      eq(getCalendarWeeksInYear(year), expected);
    });
  });
});
