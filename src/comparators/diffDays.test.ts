import { equal as eq } from 'assert';
import { diffDays, getTotalDays } from './diffDays';

describe('diffDays', function() {
  it('returns 1 for consecutive days', function() {
    const result = diffDays({ day: 1, month: 4, year: 2000 }, { day: 2, month: 4, year: 2000 });
    eq(result, 1);
  });

  it('returns days within a month', function() {
    const result = diffDays({ day: 1, month: 4, year: 2000 }, { day: 10, month: 4, year: 2000 });
    eq(result, 9);
  });

  it('returns days across several months', function() {
    const result = diffDays({ day: 1, month: 4, year: 2000 }, { day: 30, month: 11, year: 2000 });
    eq(result, 243);
  });

  it('returns days across two months', function() {
    const result = diffDays({ day: 2, month: 4, year: 2000 }, { day: 30, month: 5, year: 2000 });
    eq(result, 58);
  });

  it('returns days since the year 1', function() {
    const result = diffDays({ day: 1, month: 1, year: 1 }, { day: 30, month: 5, year: 2000 });
    eq(result, 730269);
  });

  it('returns the same result regardless of argument order', function() {
    const a = { day: 1, month: 10, year: 2000 };
    const b = { day: 1, month: 4, year: 2000 };
    const result1 = diffDays(a, b);
    const result2 = diffDays(b, a);
    eq(result1, result2);
  });

  it('returns days across a year', function() {
    const result = diffDays({ day: 1, month: 1, year: 2001 }, { day: 31, month: 12, year: 2001 });
    eq(result, 364);

    const leapYear = diffDays({ day: 1, month: 1, year: 2020 }, { day: 31, month: 12, year: 2020 });
    eq(leapYear, 365);
  });

  it('returns days across years including a leap year', function() {
    const result = diffDays({ day: 1, month: 1, year: 2003 }, { day: 8, month: 11, year: 2006 });
    eq(result, 1407);
  });

  describe('getTotalDays', function() {
    it('returns 1 for the first day', function() {
      const result = getTotalDays({ day: 1, month: 1, year: 0 });
      eq(result, 1);
    });

    it('returns 365 for the last day of the first year', function() {
      const result = getTotalDays({ day: 31, month: 12, year: 0 });
      eq(result, 366);
    });

    it('returns 366 for the first day of the second year', function() {
      const result = getTotalDays({ day: 1, month: 1, year: 1 });
      eq(result, 367);
    });

    it('returns 737791 for the 2020-01-01', function() {
      const result = getTotalDays({ year: 2020, month: 1, day: 1 });
      eq(result, 737791);
    });
  });
});
