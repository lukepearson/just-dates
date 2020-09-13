import { deepStrictEqual as eq } from 'assert';
import { getWeekOfMonth } from './getWeekOfMonth';
import { format } from '../formatters/format';

describe('getWeekOfMonth', function() {
  [
    { date: { year: 1970, month: 1, day: 1 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 2 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 3 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 4 }, expected: 1 },
    { date: { year: 1970, month: 1, day: 5 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 6 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 7 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 8 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 9 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 10 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 11 }, expected: 2 },
    { date: { year: 1970, month: 1, day: 12 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 13 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 14 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 15 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 16 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 17 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 18 }, expected: 3 },
    { date: { year: 1970, month: 1, day: 19 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 20 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 21 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 22 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 23 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 24 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 25 }, expected: 4 },
    { date: { year: 1970, month: 1, day: 26 }, expected: 5 },
    { date: { year: 1970, month: 1, day: 27 }, expected: 5 },
    { date: { year: 1970, month: 1, day: 28 }, expected: 5 },
    { date: { year: 1970, month: 1, day: 29 }, expected: 5 },
    { date: { year: 1970, month: 1, day: 30 }, expected: 5 },
    { date: { year: 1970, month: 1, day: 31 }, expected: 5 },
    { date: { year: 1970, month: 2, day: 1 }, expected: 1 },
  ].forEach(({ date, expected }) => {
    it(`returns ${expected} for ${format(date)}`, function() {
      eq(getWeekOfMonth(date), expected);
    });
  });
});
