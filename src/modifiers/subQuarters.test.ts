import { subQuarters } from './subQuarters';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addQuarters', function() {
  it('subtracts quarters from the date', function() {
    const date: DateObject = { year: 2020, month: 8, day: 27 };
    const result = subQuarters(date, 2);
    const expected = { year: 2020, month: 2, day: 27 };
    eq(result, expected);
  });

  it('subtracts quarters from the date over the year boundary', function() {
    const date: DateObject = { year: 2022, month: 8, day: 27 };
    const result = subQuarters(date, 10);
    const expected = { year: 2020, month: 2, day: 27 };
    eq(result, expected);
  });

  it('adjusts the date if it lands on a month with fewer days', function() {
    const date: DateObject = { year: 2020, month: 5, day: 31 };
    const result = subQuarters(date, 1);
    const expected = { year: 2020, month: 2, day: 29 };
    eq(result, expected);
  });
});
