import { deepStrictEqual as eq } from 'assert';
import { format } from '../formatters/format';
import { getCalendarYear } from './getCalendarYear';

describe('getCalendarYear', function() {
  [
    { input: { year: 2016, month: 1, day: 1 }, expected: 2015 },
    { input: { year: 2019, month: 12, day: 29 }, expected: 2019 },
    { input: { year: 2019, month: 12, day: 30 }, expected: 2020 },
  ].forEach(({ input, expected }) => {
    it(`${format(input)} is in the calendar year ${expected}`, function() {
      eq(getCalendarYear(input), expected);
    });
  });
});
