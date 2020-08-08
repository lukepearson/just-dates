import { equal as eq } from 'assert';
import { isBefore } from './isBefore';
import { DateObject } from 'dateObject';

describe('isBefore', function() {
  it('returns true if the second date is before the first', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 7 };
    eq(isBefore(before, after), true);
  });

  it('returns false if the second date is after the first', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 5 };
    eq(isBefore(before, after), false);
  });

  it('returns false if the dates are equal', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(isBefore(before, after), false);
  });

  it('handles negative years', function() {
    const before: DateObject = { year: -200, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(isBefore(before, after), true);
  });

  it('handles negative values', function() {
    const before: DateObject = { year: 200, month: 5, day: -600 };
    const after: DateObject = { year: 200, month: 1, day: 6 };
    eq(isBefore(before, after), true);
  });

  it('handles big years', function() {
    const before: DateObject = { year: -200000, month: -99, day: 0 };
    const after: DateObject = { year: 200000, month: 2000, day: 29 };
    eq(isBefore(before, after), true);
  });
});
