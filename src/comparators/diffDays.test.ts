import { equal as eq } from 'assert';
import { diffDays } from './diffDays';

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
    const result1 = diffDays({ day: 1, month: 10, year: 2000 }, { day: 1, month: 4, year: 2000 });
    const result2 = diffDays({ day: 1, month: 4, year: 2000 }, { day: 1, month: 10, year: 2000 });
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
});
