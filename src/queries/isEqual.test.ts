import { equal as eq } from 'assert';
import { isEqual } from './isEqual';
import { DateObject } from 'dateObject';

describe('isBefore', function() {
  it('returns false if the second date is after the first date', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 7 };
    eq(isEqual(before, after), false);
  });

  it('returns false if the second date is long after the first date', function() {
    const before: DateObject = { year: 0, month: 1, day: 1 };
    const after: DateObject = { year: 50000, month: 6, day: 30 };
    eq(isEqual(before, after), false);
  });

  it('returns false if the second date is before the first date', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 7 };
    eq(isEqual(after, before), false);
  });

  it('returns false if the second date is long before the first date', function() {
    const before: DateObject = { year: 6, month: 5, day: 2 };
    const after: DateObject = { year: 200000, month: 12, day: 31 };
    eq(isEqual(after, before), false);
  });

  it('returns true if the dates are equal', function() {
    const before: DateObject = { year: 2020, month: 1, day: 7 };
    const after: DateObject = { year: 2020, month: 1, day: 7 };
    eq(isEqual(before, after), true);
  });

  it('returns true if the dates are equal after reconciliation', function() {
    const before: DateObject = { year: 2020, month: 1, day: 1 };
    const after: DateObject = { year: 2020, month: 2, day: -30 };
    eq(isEqual(before, after), true);
  });
});
