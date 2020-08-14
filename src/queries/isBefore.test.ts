import { equal as eq } from 'assert';
import { isBefore } from './isBefore';
import { DateObject } from '../dateObject';

describe('isBefore', function() {
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

  it('returns true if the month is before in the same year', function() {
    const before: DateObject = { year: 2020, month: 6, day: 6 };
    const after: DateObject = { year: 2020, month: 7, day: 1 };
    eq(isBefore(before, after), true);
  });

  it('returns true if the day is before in the same month', function() {
    const before: DateObject = { year: 2020, month: 7, day: 6 };
    const after: DateObject = { year: 2020, month: 7, day: 7 };
    eq(isBefore(before, after), true);
  });

  it('returns true if the year is before', function() {
    const before: DateObject = { year: 2019, month: 12, day: 31 };
    const after: DateObject = { year: 2020, month: 1, day: 1 };
    eq(isBefore(before, after), true);
  });
});
