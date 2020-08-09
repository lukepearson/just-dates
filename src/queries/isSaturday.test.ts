import { equal as eq } from 'assert';
import { isSaturday } from './isSaturday';
import { format } from '../formatters/format';

describe('isSaturday', function() {
  [
    { year: 1970, month: 1, day: 3 },
    { year: 2000, month: 6, day: 3 },
  ].forEach((saturday) => {
    it(`returns true for ${format(saturday)}`, function() {
      eq(isSaturday(saturday), true);
    });
  });
});
