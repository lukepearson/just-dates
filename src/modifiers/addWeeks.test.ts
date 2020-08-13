import { addWeeks } from './addWeeks';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq, throws } from 'assert';

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

  it('defaults to 0 weeks', function() {
    const date: DateObject = { year: 2020, month: 2, day: 1 };
    const result = addWeeks(date);
    const expected = { year: 2020, month: 2, day: 1 };
    eq(result, expected);
  });

  it('throws an error if dateObject is falsy', function() {
    throws(() => addWeeks(null as any, 1), Error('Missing argument "dateObject"'));
  });
});
