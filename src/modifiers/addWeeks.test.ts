import { addWeeks } from './addWeeks';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addWeeks', function() {
  it('adds weeks to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 1 };
    const result = addWeeks(date, 1);
    const expected = { year: 2020, month: 2, day: 8 };
    eq(result, expected);
  });

  it('adds multiple weeks to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 1 };
    const result = addWeeks(date, 10);
    const expected = { year: 2020, month: 4, day: 11 };
    eq(result, expected);
  });
});
