import { DateObject } from '../dateObject';
import { addDays } from './addDays';
import { deepStrictEqual as eq } from 'assert';
import { reconcile } from './reconcile';

describe('reconcile', function() {
  it('increments the month if there are more days than in the month', function() {
    const date: DateObject = { day: 29, month: 2, year: 2000 };
    const expectedDate: DateObject = { day: 2, month: 3, year: 2000 };
    eq(addDays(date, 2), expectedDate);
  });

  it('decrements the month if there are fewer than 1 days', function() {
    const date: DateObject = { day: 1, month: 2, year: 2000 };
    const expectedDate: DateObject = { day: 30, month: 1, year: 2000 };
    eq(addDays(date, -2), expectedDate);
  });

  it('increments the year if there are more than 365 days', function() {
    [
      { input: 10, expected: { day: 7, month: 1, year: 2002 } },
      { input: 375, expected: { day: 7, month: 1, year: 2003 } },
      { input: 700, expected: { day: 28, month: 11, year: 2003 } },
      { input: 8000, expected: { day: 23, month: 11, year: 2023 } },
    ].forEach((testCase) => {
      const date: DateObject = { day: 28 + testCase.input, month: 12, year: 2001 };
      eq(reconcile(date), testCase.expected);
    });
  });

  it('decrements the year if months is less than 1', function() {
    [
      { input: -10, expected: { day: 18, month: 12, year: 2001 } },
      { input: -375, expected: { day: 18, month: 12, year: 2000 } },
      { input: -700, expected: { day: 28, month: 1, year: 2000 } },
      { input: -8000, expected: { day: 2, month: 2, year: 1980 } },
    ].forEach((testCase) => {
      const date: DateObject = { day: 28 + testCase.input, month: 12, year: 2001 };
      eq(reconcile(date), testCase.expected, `input = ${testCase.input}`);
    });

    eq(reconcile({ day: 1, month: 0, year: 2001 }), { day: 1, month: 12, year: 2000 });
  });

  it('can handle large numbers of days', function() {
    const input = { day: 8000000, month: 22, year: 1 };
    const expected = { day: 2, month: 1, year: 21906 };
    eq(reconcile(input), expected);
  });

  it('converts invalid strings to NaN', function() {
    const input = { day: 'fork handles', month: 62, year: 1 } as any;
    const expected = { day: NaN, month: 62, year: 1 };
    eq(reconcile(input), expected);
  });

  it('returns the original date object if the input is NaN', function() {
    const input = { day: NaN, month: 62, year: 1 } as any;
    const expected = { day: NaN, month: 62, year: 1 };
    eq(reconcile(input), expected);
  });
});
