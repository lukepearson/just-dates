import { add } from './add';
import { DateObject, DateInterval } from '../dateObject';
import { deepStrictEqual as eq, throws } from 'assert';

describe('add', function() {
  it('adds 2 dates', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: DateInterval = { year: 2, month: 2, day: 22 };
    const result = add(date, date2);
    const expected = { year: 2022, month: 5, day: 14 };
    eq(result, expected);
  });

  it('adds weeks', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { week: 4 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 1, day: 29 };
    eq(result, expected);
  });

  it('adds days', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { day: 44 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 2, day: 14 };
    eq(result, expected);
  });

  it('adds months', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { month: 50 };
    const result = add(date, date2);
    const expected = { year: 2014, month: 3, day: 1 };
    eq(result, expected);
  });

  it('adds years', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { year: 50 };
    const result = add(date, date2);
    const expected = { year: 2060, month: 1, day: 1 };
    eq(result, expected);
  });

  it('throws an error if a is falsy', function() {
    throws(() => add(null as any, {}), Error('Missing argument "a"'));
  });

  it('throws an error if b is falsy', function() {
    throws(() => add({} as DateObject, null as any), Error('Missing argument "b"'));
  });
});
