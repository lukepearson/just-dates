import { set } from './set';
import { DateObject, DatePart } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('set', function() {
  it('sets the day', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: DatePart = { day: 1 };
    const result = set(date, date2);
    const expected = { year: 2020, month: 2, day: 1 };
    eq(result, expected);
  });

  it('sets the month', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: DatePart = { month: 1 };
    const result = set(date, date2);
    const expected = { year: 2020, month: 1, day: 22 };
    eq(result, expected);
  });

  it('sets the year', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: DatePart = { year: 1 };
    const result = set(date, date2);
    const expected = { year: 1, month: 2, day: 22 };
    eq(result, expected);
  });

  it('returns a valid date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 6 };
    const date2: DatePart = { month: 9, day: 31 };
    const result = set(date, date2);
    const expected = { year: 2020, month: 10, day: 1 };
    eq(result, expected);
  });
});
