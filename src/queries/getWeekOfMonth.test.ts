import { deepStrictEqual as eq } from 'assert';
import { getWeekOfMonth } from './getWeekOfMonth';
import { format } from '../formatters/format';

describe('getWeekOfMonth', function() {
  [
    { date: { year: 1970, month: 1, day: 3 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 4 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 5 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 6 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 7 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 8 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 10 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 20 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 24 }, expected: 4 },
  ].forEach(({ date, expected }) => {
    it(`returns ${expected} for ${format(date)}`, function() {
      eq(getWeekOfMonth(date), expected);
    });
  });
});
