import { add } from './add';
import { DateObject, Duration } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';
import { format } from 'util';

describe('add', function() {
  it('adds 2 dates', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const date2: Duration = { years: 2, months: 2, days: 22 };
    const result = add(date, date2);
    const expected = { year: 2022, month: 5, day: 14 };
    eq(result, expected);
  });

  it('adds weeks', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { weeks: 4 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 1, day: 29 };
    eq(result, expected);
  });

  it('adds days', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { days: 44 };
    const result = add(date, date2);
    const expected = { year: 2010, month: 2, day: 14 };
    eq(result, expected);
  });

  it('adds months', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { months: 50 };
    const result = add(date, date2);
    const expected = { year: 2014, month: 3, day: 1 };
    eq(result, expected);
  });

  it('adds years', function() {
    const date: DateObject = { year: 2010, month: 1, day: 1 };
    const date2: Duration = { years: 50 };
    const result = add(date, date2);
    const expected = { year: 2060, month: 1, day: 1 };
    eq(result, expected);
  });

  [
    {
      input: { year: 50, month: 3, day: 30 },
      input2: { days: 30 },
      expected: { year: 50, month: 4, day: 29 },
    },
    {
      input: { year: 1950, month: 5, day: 26 },
      input2: { days: 26, weeks: 2 },
      expected: { year: 1950, month: 7, day: 5 },
    },
    {
      input: { year: 1950, month: 5, day: 26 },
      input2: { months: 2, weeks: 2 },
      expected: { year: 1950, month: 8, day: 9 },
    },
  ].forEach(({ input, input2, expected }) => {
    it(`${format(input)} + ${format(input2)} = ${format(expected)}`, function() {
      eq(add(input, input2), expected);
    });
  });
});
