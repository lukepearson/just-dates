import { add } from './add';
import { DateObject, Duration } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('add', function() {
  it('adds 2 dates', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: Duration = { year: 2, month: 2, day: 22 };
    const result = add(date, date2);
    const expected = { year: 2022, month: 5, day: 14 };
    eq(result, expected);
  });

  it('adds weeks', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { week: 4 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 1, day: 29 };
    eq(result, expected);
  });

  it('adds days', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { day: 44 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 2, day: 14 };
    eq(result, expected);
  });

  it('adds months', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { month: 50 };
    const result = add(date, date2);
    const expected = { year: 2014, month: 3, day: 1 };
    eq(result, expected);
  });

  it('adds years', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { year: 50 };
    const result = add(date, date2);
    const expected = { year: 2060, month: 1, day: 1 };
    eq(result, expected);
  });
});
