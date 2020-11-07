import { equal as eq } from 'assert';
import { getDayOfYear } from './getDayOfYear';

describe('getDayOfYear', function() {
  it('returns the day of the year', function() {
    eq(getDayOfYear({ month: 12, year: 1969, day: 29 }), 363);
    eq(getDayOfYear({ month: 1, year: 1970, day: 5 }), 5);
    eq(getDayOfYear({ month: 1, year: 1970, day: 12 }), 12);
    eq(getDayOfYear({ month: 8, year: 2020, day: 3 }), 216);
    eq(getDayOfYear({ month: 8, year: 2020, day: 10 }), 223);
    eq(getDayOfYear({ month: 8, year: 2020, day: 17 }), 230);
    eq(getDayOfYear({ month: 5, year: 2020, day: 1 }), 122);
    eq(getDayOfYear({ month: 5, year: 2019, day: 1 }), 121);
  });
});
