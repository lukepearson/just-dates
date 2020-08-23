import { addQuarters } from './addQuarters';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addQuarters', function() {
  it('adds quarters to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 27 };
    const result = addQuarters(date, 2);
    const expected = { year: 2020, month: 8, day: 27 };
    eq(result, expected);
  });

  it('adds quarters to the date over the year boundary', function() {
    const date: DateObject = { year: 2020, month: 2, day: 27 };
    const result = addQuarters(date, 10);
    const expected = { year: 2022, month: 8, day: 27 };
    eq(result, expected);
  });

  it('adjusts the date if it lands on a month with fewer days', function() {
    const date: DateObject = { year: 2020, month: 1, day: 31 };
    const result = addQuarters(date, 1);
    const expected = { year: 2020, month: 4, day: 30 };
    eq(result, expected);
  });
});
