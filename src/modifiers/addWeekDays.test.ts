import { addWeekDays } from './addWeekDays';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('addWeekDays', function() {
  [
    [6, 1, 7], // Mon -> Tue
    [6, 2, 8], // Mon -> Wed
    [6, 3, 9], // Mon -> Thu
    [6, 4, 10], // Mon -> Fri
    [6, 5, 13], // Mon -> Mon
    [6, 6, 14], // Mon -> Tue
    [11, 1, 14], // Sat -> Tue
    [11, 2, 15], // Sat -> Wed
    [11, 3, 16], // Sat -> Thu
    [11, 4, 17], // Sat -> Fri
    [11, 5, 20], // Sat -> Mon
    [12, 1, 14], // Sun -> Tue
    [12, 2, 15], // Sun -> Wed
    [12, 3, 16], // Sun -> Thu
    [12, 4, 17], // Sun -> Fri
    [12, 5, 20], // Sun -> Mon
  ].forEach((testCase) => {
    it(`${testCase[0]} + ${testCase[1]} == ${testCase[2]}`, function() {
      const [startingDay, daysToAdd, expectedDay] = testCase;
      const date: DateObject = { year: 2020, month: 1, day: startingDay };
      const result = addWeekDays(date, daysToAdd);
      const expected = { year: 2020, month: 1, day: expectedDay };
      eq(result, expected);
    });
  });

  it('works across two months', function() {
    const date: DateObject = { year: 2020, month: 1, day: 25 };
    const result = addWeekDays(date, 10);
    const expected = { year: 2020, month: 2, day: 10 };
    eq(result, expected);
  });

  it('works across multiple months', function() {
    const date: DateObject = { year: 2020, month: 1, day: 3 };
    const result = addWeekDays(date, 60);
    const expected = { year: 2020, month: 3, day: 27 };
    eq(result, expected);
  });

  it('returns the original date object if days is zero', function() {
    const date: DateObject = { year: 2020, month: 1, day: 25 };
    const result = addWeekDays(date, 0);
    const expected = { year: 2020, month: 1, day: 25 };
    eq(result, expected);
  });

  it('defaults days to zero', function() {
    const date: DateObject = { year: 2020, month: 1, day: 25 };
    const result = addWeekDays(date);
    const expected = { year: 2020, month: 1, day: 25 };
    eq(result, expected);
  });
});
