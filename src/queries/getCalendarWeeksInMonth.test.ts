import { deepStrictEqual as eq } from 'assert';
import { getCalendarWeeksInMonth } from './getCalendarWeeksInMonth';
import { format } from '../formatters/format';

describe('getCalendarWeeksInMonth', function() {
  [
    { date: { year: 1970, month: 1, day: 1 }, expected: 5 },
    { date: { year: 1970, month: 2, day: 2 }, expected: 5 },
    { date: { year: 1970, month: 3, day: 3 }, expected: 6 },
  ].forEach(({ date, expected }) => {
    it(`returns ${expected} for ${format(date)}`, function() {
      eq(getCalendarWeeksInMonth(date), expected);
    });
  });
});
