import { sub } from './sub';
import { DateObject, DateInterval } from 'dateObject';
import { deepStrictEqual as eq, throws } from 'assert';

describe('sub', function() {
  it('subtracts 2 dates', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: DateInterval = { year: 2, month: 2, day: 22 };
    const result = sub(date, date2);
    const expected = { year: 2017, month: 11, day: 30 };
    eq(result, expected);
  });

  it('subtracts weeks', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { week: 4 };
    const result = sub(date, date2);
    const expected = { year: 2009, month: 12, day: 4 };
    eq(result, expected);
  });

  it('subtracts days', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { day: 1 };
    const result = sub(date, date2);
    const expected = { year: 2009, month: 12, day: 31 };
    eq(result, expected);
  });

  it('subtracts months', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { month: 50 };
    const result = sub(date, date2);
    const expected = { year: 2005, month: 11, day: 1 };
    eq(result, expected);
  });

  it('subtracts years', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: DateInterval = { year: 50 };
    const result = sub(date, date2);
    const expected = { year: 1960, month: 1, day: 1 };
    eq(result, expected);
  });

  it('throws an error if a is falsy', function() {
    throws(() => sub(null as any, {}), Error('Missing argument "a"'));
  });

  it('throws an error if b is falsy', function() {
    throws(() => sub({} as DateObject, null as any), Error('Missing argument "b"'));
  });
});
