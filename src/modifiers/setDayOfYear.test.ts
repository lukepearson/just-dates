import { setDayOfYear } from './setDayOfYear';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('setDayOfYear', function() {
  it('sets the date to the specified day of the year', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = setDayOfYear(date, 2);
    const expected = { year: 2020, month: 1, day: 2 };
    eq(result, expected);
  });

  it('sets the date to the specified day of the leap year', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = setDayOfYear(date, 366);
    const expected = { year: 2020, month: 12, day: 31 };
    eq(result, expected);
  });

  it('sets the date to the specified day of the non-leap year', function() {
    const date: DateObject = { year: 2019, month: 2, day: 22 };
    const result = setDayOfYear(date, 365);
    const expected = { year: 2019, month: 12, day: 31 };
    eq(result, expected);
  });

  it('overflows into next year', function() {
    const date: DateObject = { year: 2019, month: 2, day: 22 };
    const result = setDayOfYear(date, 366);
    const expected = { year: 2020, month: 1, day: 1 };
    eq(result, expected);
  });
});
