import { addMonths } from './addMonths';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addMonths', function() {
  it('adds months to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 27 };
    const result = addMonths(date, 5);
    const expected = { year: 2020, month: 7, day: 27 };
    eq(result, expected);
  });

  it('adds months to the date over the year boundary', function() {
    const date: DateObject = { year: 2020, month: 2, day: 27 };
    const result = addMonths(date, 500);
    const expected = { year: 2061, month: 10, day: 27 };
    eq(result, expected);
  });

  it('sets the date to the last day of the month if new new month has fewer days', function() {
    const date: DateObject = { year: 2020, month: 1, day: 31 };
    const result = addMonths(date, 1);
    const expected = { year: 2020, month: 2, day: 29 };
    eq(result, expected);
  });

  [
    { input: -2, expected: { year: 2019, month: 12, day: 20 } },
    { input: -21, expected: { year: 2018, month: 5, day: 20 } },
    { input: -22, expected: { year: 2018, month: 4, day: 20 } },
  ].forEach((testCase) => {
    it('works with negative numbers', function() {
      const date: DateObject = { year: 2020, month: 2, day: 20 };
      const result = addMonths(date, testCase.input);
      eq(result, testCase.expected);
    });
  });
});
