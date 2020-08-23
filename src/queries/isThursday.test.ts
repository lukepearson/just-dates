import { equal as eq } from 'assert';
import { isThursday } from './isThursday';
import { format } from '../formatters/format';

describe('isThursday', function() {
  [
    { year: 1970, month: 1, day: 1 },
    { year: 1970, month: 1, day: 8 },
    { year: 2000, month: 6, day: 8 },
  ].forEach((date) => {
    it(`returns true for ${format(date)}`, function() {
      eq(isThursday(date), true);
    });
  });

  [
    { year: 1970, month: 1, day: 2 },
    { year: 1970, month: 1, day: 3 },
    { year: 1970, month: 1, day: 4 },
    { year: 1970, month: 1, day: 5 },
    { year: 1970, month: 1, day: 6 },
    { year: 1970, month: 1, day: 7 },
    { year: 1970, month: 1, day: 9 },
    { year: 1970, month: 1, day: 10 },
  ].forEach((date) => {
    it(`returns false for ${format(date)}`, function() {
      eq(isThursday(date), false);
    });
  });
});
