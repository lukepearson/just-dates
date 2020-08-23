import { setMonth } from './setMonth';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('setMonth', function() {
  it('sets the date to the specified month', function() {
    const date: DateObject = { year: 2020, month: 1, day: 6 };
    const result = setMonth(date, 5);
    const expected = { year: 2020, month: 5, day: 6 };
    eq(result, expected);
  });

  it('sets the date to the last day of the month if the newer month has fewer days', function() {
    const date: DateObject = { year: 2020, month: 1, day: 31 };
    const result = setMonth(date, 2);
    const expected = { year: 2020, month: 2, day: 29 };
    eq(result, expected);
  });
});
