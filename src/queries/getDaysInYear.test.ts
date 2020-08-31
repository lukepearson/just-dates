import { equal as eq } from 'assert';
import { getDaysInYear } from './getDaysInYear';

describe('getDaysInYear', function() {
  it('returns the number of days in the year', function() {
    eq(getDaysInYear(1969), 365);
    eq(getDaysInYear(1970), 365);
    eq(getDaysInYear(2020), 366);
  });
});
