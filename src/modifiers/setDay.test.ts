import { setDay } from './setDay';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('setDay', function() {
  it('sets the day', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = setDay(date, 2);
    const expected = { year: 2020, month: 2, day: 2 };
    eq(result, expected);
  });

  it('returns a valid date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = setDay(date, 60);
    const expected = { year: 2020, month: 3, day: 31 };
    eq(result, expected);
  });
});
