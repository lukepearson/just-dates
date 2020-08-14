import { addYears } from './addYears';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addYears', function() {
  it('adds years to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 29 };
    const result = addYears(date, 1);
    const expected = { year: 2021, month: 3, day: 1 };
    eq(result, expected);
  });

  it('works with negative numbers', function() {
    const date: DateObject = { year: 2020, month: 2, day: 20 };
    const expected = { year: 2018, month: 2, day: 20 };
    const result = addYears(date, -2);
    eq(result, expected);
  });
});
