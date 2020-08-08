import { equal as eq } from 'assert';
import { isAfter } from './isAfter';
import { DateObject } from 'dateObject';

describe('isAfter', function() {
  it('returns true if the second date is after the first', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 7 };
    eq(isAfter(after, before), true);
  });

  it('returns false if the second date is before the first', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 5 };
    eq(isAfter(after, before), false);
  });

  it('returns false if the dates are equal', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(isAfter(after, before), false);
  });

  it('handles negative years', function() {
    const before: DateObject = { year: -200, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(isAfter(after, before), true);
  });

  it('handles negative values', function() {
    const before: DateObject = { year: 200, month: 5, day: -600 };
    const after: DateObject = { year: 200, month: 1, day: 6 };
    eq(isAfter(after, before), true);
  });

  it('handles big years', function() {
    const before: DateObject = { year: -200000, month: -99, day: 0 };
    const after: DateObject = { year: 200000, month: 2000, day: 29 };
    eq(isAfter(after, before), true);
  });
});
