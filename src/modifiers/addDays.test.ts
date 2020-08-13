import { addDays } from './addDays';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addDays', function() {
  it('adds days to the date', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = addDays(date, 5);
    const expected = { year: 2020, month: 2, day: 27 };
    eq(result, expected);
  });

  [
    { input: -2, expected: { year: 2020, month: 2, day: 20 } },
    { input: -21, expected: { year: 2020, month: 2, day: 1 } },
    { input: -22, expected: { year: 2020, month: 1, day: 31 } },
  ].forEach((testCase) => {
    it('works with negative numbers', function() {
      const date: DateObject = { year: 2020, month: 2, day: 22 };
      const result = addDays(date, testCase.input);
      eq(result, testCase.expected);
    });
  });
});
