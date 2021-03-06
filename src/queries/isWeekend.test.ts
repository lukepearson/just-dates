import { equal as eq } from 'assert';
import { format } from '../formatters/format';
import { isWeekend } from './isWeekend';

describe('isWeekend', function() {
  [
    { year: 1970, month: 1, day: 3 }, // Saturday
    { year: 1980, month: 1, day: 6 }, // Sunday
  ].forEach((date) => {
    it(`returns true for ${format(date)}`, function() {
      eq(isWeekend(date), true);
    });
  });

  [
    { year: 1980, month: 1, day: 7 },
    { year: 1980, month: 1, day: 8 },
    { year: 1980, month: 1, day: 9 },
    { year: 1980, month: 1, day: 10 },
    { year: 1980, month: 1, day: 11 },
  ].forEach((date) => {
    it(`returns false for ${format(date)}`, function() {
      eq(isWeekend(date), false);
    });
  });
});
