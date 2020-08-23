import { equal as eq } from 'assert';
import { isMonday } from './isMonday';
import { format } from '../formatters/format';

describe('isMonday', function() {
  [
    { year: 1970, month: 1, day: 5 },
    { year: 2000, month: 6, day: 5 },
  ].forEach((date) => {
    it(`returns true for ${format(date)}`, function() {
      eq(isMonday(date), true);
    });
  });

  [
    { year: 1970, month: 1, day: 3 },
    { year: 1970, month: 1, day: 4 },
    { year: 1970, month: 1, day: 6 },
    { year: 1970, month: 1, day: 7 },
    { year: 1970, month: 1, day: 8 },
    { year: 1970, month: 1, day: 9 },
  ].forEach((date) => {
    it(`returns false for ${format(date)}`, function() {
      eq(isMonday(date), false);
    });
  });
});
