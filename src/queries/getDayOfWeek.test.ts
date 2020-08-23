import { equal as eq } from 'assert';
import { getDayOfWeek } from './getDayOfWeek';
import { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY } from '../dateObject';

describe('getDayOfWeek', function() {
  it('returns 1 for monday', function() {
    eq(getDayOfWeek({ month: 12, year: 1969, day: 29 }), MONDAY);
    eq(getDayOfWeek({ month: 1, year: 1970, day: 5 }), MONDAY);
    eq(getDayOfWeek({ month: 1, year: 1970, day: 12 }), MONDAY);
    eq(getDayOfWeek({ month: 8, year: 2020, day: 3 }), MONDAY);
    eq(getDayOfWeek({ month: 8, year: 2020, day: 10 }), MONDAY);
    eq(getDayOfWeek({ month: 8, year: 2020, day: 17 }), MONDAY);
  });

  it('returns 2 for tuesday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 6 }), TUESDAY);
  });

  it('returns 3 for wednesday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 7 }), WEDNESDAY);
  });

  it('returns 4 for thursday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 8 }), THURSDAY);
  });

  it('returns 5 for friday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 2 }), FRIDAY);
    eq(getDayOfWeek({ month: 1, year: 1970, day: 9 }), FRIDAY);
  });

  it('returns 6 for saturday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 3 }), SATURDAY);
    eq(getDayOfWeek({ month: 1, year: 1970, day: 10 }), SATURDAY);
  });

  it('returns 7 for sunday', function() {
    eq(getDayOfWeek({ month: 1, year: 1970, day: 4 }), SUNDAY);
    eq(getDayOfWeek({ month: 1, year: 1970, day: 11 }), SUNDAY);
    eq(getDayOfWeek({ month: 8, year: 2020, day: 23 }), SUNDAY);
  });
});
