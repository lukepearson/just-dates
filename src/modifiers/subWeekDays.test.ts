import { subWeekDays } from './subWeekDays';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('subWeekDays', function() {
  [
    [20, 1, 17], // Mon -> Fri
    [20, 2, 16], // Mon -> Thu
    [20, 3, 15], // Mon -> Wed
    [20, 4, 14], // Mon -> Tue
    [20, 5, 13], // Mon -> Mon
    [20, 6, 10], // Mon -> Fri
    [17, -1, 20], // Fri -> Mon
  ].forEach((testCase) => {
    it(`${testCase[0]} - ${testCase[1]} == ${testCase[2]}`, function() {
      const [startingDay, daysToSub, expectedDay] = testCase;
      const date: DateObject = { year: 2020, month: 1, day: startingDay };
      const result = subWeekDays(date, daysToSub);
      const expected = { year: 2020, month: 1, day: expectedDay };
      eq(result, expected);
    });
  });
});
