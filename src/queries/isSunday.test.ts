import { equal as eq } from 'assert';
import { format } from '../formatters/format';
import { isSunday } from './isSunday';

describe('isSunday', function() {
  [
    { year: 1970, month: 1, day: 4 },
    { year: 1980, month: 1, day: 6 },
  ].forEach((sunday) => {
    it(`returns true for ${format(sunday)}`, function() {
      eq(isSunday(sunday), true);
    });
  });
});
