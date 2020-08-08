import { deepEqual as deepEq, equal as eq } from 'assert';
import { isValid } from './isValid';

describe('isValid', function() {
  it('can create a valid calendar using isValid', function() {
    const expectedCalendar = [
      { year: 2000, month: 1, day: 1 },
      { year: 2000, month: 1, day: 2 },
      { year: 2000, month: 1, day: 3 },
      { year: 2000, month: 1, day: 4 },
      { year: 2000, month: 1, day: 5 },
      { year: 2000, month: 1, day: 6 },
      { year: 2000, month: 1, day: 7 },
      { year: 2000, month: 1, day: 8 },
      { year: 2000, month: 1, day: 9 },
      { year: 2000, month: 1, day: 10 },
      { year: 2000, month: 1, day: 11 },
      { year: 2000, month: 1, day: 12 },
      { year: 2000, month: 1, day: 13 },
      { year: 2000, month: 1, day: 14 },
      { year: 2000, month: 1, day: 15 },
      { year: 2000, month: 1, day: 16 },
      { year: 2000, month: 1, day: 17 },
      { year: 2000, month: 1, day: 18 },
      { year: 2000, month: 1, day: 19 },
      { year: 2000, month: 1, day: 20 },
      { year: 2000, month: 1, day: 21 },
      { year: 2000, month: 1, day: 22 },
      { year: 2000, month: 1, day: 23 },
      { year: 2000, month: 1, day: 24 },
      { year: 2000, month: 1, day: 25 },
      { year: 2000, month: 1, day: 26 },
      { year: 2000, month: 1, day: 27 },
      { year: 2000, month: 1, day: 28 },
      { year: 2000, month: 1, day: 29 },
      { year: 2000, month: 1, day: 30 },
      { year: 2000, month: 1, day: 31 },
      { year: 2000, month: 2, day: 1 },
      { year: 2000, month: 2, day: 2 },
      { year: 2000, month: 2, day: 3 },
      { year: 2000, month: 2, day: 4 },
      { year: 2000, month: 2, day: 5 },
      { year: 2000, month: 2, day: 6 },
      { year: 2000, month: 2, day: 7 },
      { year: 2000, month: 2, day: 8 },
      { year: 2000, month: 2, day: 9 },
      { year: 2000, month: 2, day: 10 },
      { year: 2000, month: 2, day: 11 },
      { year: 2000, month: 2, day: 12 },
      { year: 2000, month: 2, day: 13 },
      { year: 2000, month: 2, day: 14 },
      { year: 2000, month: 2, day: 15 },
      { year: 2000, month: 2, day: 16 },
      { year: 2000, month: 2, day: 17 },
      { year: 2000, month: 2, day: 18 },
      { year: 2000, month: 2, day: 19 },
      { year: 2000, month: 2, day: 20 },
      { year: 2000, month: 2, day: 21 },
      { year: 2000, month: 2, day: 22 },
      { year: 2000, month: 2, day: 23 },
      { year: 2000, month: 2, day: 24 },
      { year: 2000, month: 2, day: 25 },
      { year: 2000, month: 2, day: 26 },
      { year: 2000, month: 2, day: 27 },
      { year: 2000, month: 2, day: 28 },
      { year: 2000, month: 2, day: 29 },
      { year: 2000, month: 3, day: 1 },
      { year: 2000, month: 3, day: 2 },
      { year: 2000, month: 3, day: 3 },
      { year: 2000, month: 3, day: 4 },
      { year: 2000, month: 3, day: 5 },
      { year: 2000, month: 3, day: 6 },
      { year: 2000, month: 3, day: 7 },
      { year: 2000, month: 3, day: 8 },
      { year: 2000, month: 3, day: 9 },
      { year: 2000, month: 3, day: 10 },
      { year: 2000, month: 3, day: 11 },
      { year: 2000, month: 3, day: 12 },
      { year: 2000, month: 3, day: 13 },
      { year: 2000, month: 3, day: 14 },
      { year: 2000, month: 3, day: 15 },
      { year: 2000, month: 3, day: 16 },
      { year: 2000, month: 3, day: 17 },
      { year: 2000, month: 3, day: 18 },
      { year: 2000, month: 3, day: 19 },
      { year: 2000, month: 3, day: 20 },
      { year: 2000, month: 3, day: 21 },
      { year: 2000, month: 3, day: 22 },
      { year: 2000, month: 3, day: 23 },
      { year: 2000, month: 3, day: 24 },
      { year: 2000, month: 3, day: 25 },
      { year: 2000, month: 3, day: 26 },
      { year: 2000, month: 3, day: 27 },
      { year: 2000, month: 3, day: 28 },
      { year: 2000, month: 3, day: 29 },
      { year: 2000, month: 3, day: 30 },
      { year: 2000, month: 3, day: 31 },
      { year: 2000, month: 4, day: 1 },
      { year: 2000, month: 4, day: 2 },
      { year: 2000, month: 4, day: 3 },
      { year: 2000, month: 4, day: 4 },
      { year: 2000, month: 4, day: 5 },
      { year: 2000, month: 4, day: 6 },
      { year: 2000, month: 4, day: 7 },
      { year: 2000, month: 4, day: 8 },
      { year: 2000, month: 4, day: 9 },
      { year: 2000, month: 4, day: 10 },
      { year: 2000, month: 4, day: 11 },
      { year: 2000, month: 4, day: 12 },
      { year: 2000, month: 4, day: 13 },
      { year: 2000, month: 4, day: 14 },
      { year: 2000, month: 4, day: 15 },
      { year: 2000, month: 4, day: 16 },
      { year: 2000, month: 4, day: 17 },
      { year: 2000, month: 4, day: 18 },
      { year: 2000, month: 4, day: 19 },
      { year: 2000, month: 4, day: 20 },
      { year: 2000, month: 4, day: 21 },
      { year: 2000, month: 4, day: 22 },
      { year: 2000, month: 4, day: 23 },
      { year: 2000, month: 4, day: 24 },
      { year: 2000, month: 4, day: 25 },
      { year: 2000, month: 4, day: 26 },
      { year: 2000, month: 4, day: 27 },
      { year: 2000, month: 4, day: 28 },
      { year: 2000, month: 4, day: 29 },
      { year: 2000, month: 4, day: 30 },
      { year: 2000, month: 5, day: 1 },
      { year: 2000, month: 5, day: 2 },
      { year: 2000, month: 5, day: 3 },
      { year: 2000, month: 5, day: 4 },
      { year: 2000, month: 5, day: 5 },
      { year: 2000, month: 5, day: 6 },
      { year: 2000, month: 5, day: 7 },
      { year: 2000, month: 5, day: 8 },
      { year: 2000, month: 5, day: 9 },
      { year: 2000, month: 5, day: 10 },
      { year: 2000, month: 5, day: 11 },
      { year: 2000, month: 5, day: 12 },
      { year: 2000, month: 5, day: 13 },
      { year: 2000, month: 5, day: 14 },
      { year: 2000, month: 5, day: 15 },
      { year: 2000, month: 5, day: 16 },
      { year: 2000, month: 5, day: 17 },
      { year: 2000, month: 5, day: 18 },
      { year: 2000, month: 5, day: 19 },
      { year: 2000, month: 5, day: 20 },
      { year: 2000, month: 5, day: 21 },
      { year: 2000, month: 5, day: 22 },
      { year: 2000, month: 5, day: 23 },
      { year: 2000, month: 5, day: 24 },
      { year: 2000, month: 5, day: 25 },
      { year: 2000, month: 5, day: 26 },
      { year: 2000, month: 5, day: 27 },
      { year: 2000, month: 5, day: 28 },
      { year: 2000, month: 5, day: 29 },
      { year: 2000, month: 5, day: 30 },
      { year: 2000, month: 5, day: 31 },
      { year: 2000, month: 6, day: 1 },
      { year: 2000, month: 6, day: 2 },
      { year: 2000, month: 6, day: 3 },
      { year: 2000, month: 6, day: 4 },
      { year: 2000, month: 6, day: 5 },
      { year: 2000, month: 6, day: 6 },
      { year: 2000, month: 6, day: 7 },
      { year: 2000, month: 6, day: 8 },
      { year: 2000, month: 6, day: 9 },
      { year: 2000, month: 6, day: 10 },
      { year: 2000, month: 6, day: 11 },
      { year: 2000, month: 6, day: 12 },
      { year: 2000, month: 6, day: 13 },
      { year: 2000, month: 6, day: 14 },
      { year: 2000, month: 6, day: 15 },
      { year: 2000, month: 6, day: 16 },
      { year: 2000, month: 6, day: 17 },
      { year: 2000, month: 6, day: 18 },
      { year: 2000, month: 6, day: 19 },
      { year: 2000, month: 6, day: 20 },
      { year: 2000, month: 6, day: 21 },
      { year: 2000, month: 6, day: 22 },
      { year: 2000, month: 6, day: 23 },
      { year: 2000, month: 6, day: 24 },
      { year: 2000, month: 6, day: 25 },
      { year: 2000, month: 6, day: 26 },
      { year: 2000, month: 6, day: 27 },
      { year: 2000, month: 6, day: 28 },
      { year: 2000, month: 6, day: 29 },
      { year: 2000, month: 6, day: 30 },
      { year: 2000, month: 7, day: 1 },
      { year: 2000, month: 7, day: 2 },
      { year: 2000, month: 7, day: 3 },
      { year: 2000, month: 7, day: 4 },
      { year: 2000, month: 7, day: 5 },
      { year: 2000, month: 7, day: 6 },
      { year: 2000, month: 7, day: 7 },
      { year: 2000, month: 7, day: 8 },
      { year: 2000, month: 7, day: 9 },
      { year: 2000, month: 7, day: 10 },
      { year: 2000, month: 7, day: 11 },
      { year: 2000, month: 7, day: 12 },
      { year: 2000, month: 7, day: 13 },
      { year: 2000, month: 7, day: 14 },
      { year: 2000, month: 7, day: 15 },
      { year: 2000, month: 7, day: 16 },
      { year: 2000, month: 7, day: 17 },
      { year: 2000, month: 7, day: 18 },
      { year: 2000, month: 7, day: 19 },
      { year: 2000, month: 7, day: 20 },
      { year: 2000, month: 7, day: 21 },
      { year: 2000, month: 7, day: 22 },
      { year: 2000, month: 7, day: 23 },
      { year: 2000, month: 7, day: 24 },
      { year: 2000, month: 7, day: 25 },
      { year: 2000, month: 7, day: 26 },
      { year: 2000, month: 7, day: 27 },
      { year: 2000, month: 7, day: 28 },
      { year: 2000, month: 7, day: 29 },
      { year: 2000, month: 7, day: 30 },
      { year: 2000, month: 7, day: 31 },
      { year: 2000, month: 8, day: 1 },
      { year: 2000, month: 8, day: 2 },
      { year: 2000, month: 8, day: 3 },
      { year: 2000, month: 8, day: 4 },
      { year: 2000, month: 8, day: 5 },
      { year: 2000, month: 8, day: 6 },
      { year: 2000, month: 8, day: 7 },
      { year: 2000, month: 8, day: 8 },
      { year: 2000, month: 8, day: 9 },
      { year: 2000, month: 8, day: 10 },
      { year: 2000, month: 8, day: 11 },
      { year: 2000, month: 8, day: 12 },
      { year: 2000, month: 8, day: 13 },
      { year: 2000, month: 8, day: 14 },
      { year: 2000, month: 8, day: 15 },
      { year: 2000, month: 8, day: 16 },
      { year: 2000, month: 8, day: 17 },
      { year: 2000, month: 8, day: 18 },
      { year: 2000, month: 8, day: 19 },
      { year: 2000, month: 8, day: 20 },
      { year: 2000, month: 8, day: 21 },
      { year: 2000, month: 8, day: 22 },
      { year: 2000, month: 8, day: 23 },
      { year: 2000, month: 8, day: 24 },
      { year: 2000, month: 8, day: 25 },
      { year: 2000, month: 8, day: 26 },
      { year: 2000, month: 8, day: 27 },
      { year: 2000, month: 8, day: 28 },
      { year: 2000, month: 8, day: 29 },
      { year: 2000, month: 8, day: 30 },
      { year: 2000, month: 8, day: 31 },
      { year: 2000, month: 9, day: 1 },
      { year: 2000, month: 9, day: 2 },
      { year: 2000, month: 9, day: 3 },
      { year: 2000, month: 9, day: 4 },
      { year: 2000, month: 9, day: 5 },
      { year: 2000, month: 9, day: 6 },
      { year: 2000, month: 9, day: 7 },
      { year: 2000, month: 9, day: 8 },
      { year: 2000, month: 9, day: 9 },
      { year: 2000, month: 9, day: 10 },
      { year: 2000, month: 9, day: 11 },
      { year: 2000, month: 9, day: 12 },
      { year: 2000, month: 9, day: 13 },
      { year: 2000, month: 9, day: 14 },
      { year: 2000, month: 9, day: 15 },
      { year: 2000, month: 9, day: 16 },
      { year: 2000, month: 9, day: 17 },
      { year: 2000, month: 9, day: 18 },
      { year: 2000, month: 9, day: 19 },
      { year: 2000, month: 9, day: 20 },
      { year: 2000, month: 9, day: 21 },
      { year: 2000, month: 9, day: 22 },
      { year: 2000, month: 9, day: 23 },
      { year: 2000, month: 9, day: 24 },
      { year: 2000, month: 9, day: 25 },
      { year: 2000, month: 9, day: 26 },
      { year: 2000, month: 9, day: 27 },
      { year: 2000, month: 9, day: 28 },
      { year: 2000, month: 9, day: 29 },
      { year: 2000, month: 9, day: 30 },
      { year: 2000, month: 10, day: 1 },
      { year: 2000, month: 10, day: 2 },
      { year: 2000, month: 10, day: 3 },
      { year: 2000, month: 10, day: 4 },
      { year: 2000, month: 10, day: 5 },
      { year: 2000, month: 10, day: 6 },
      { year: 2000, month: 10, day: 7 },
      { year: 2000, month: 10, day: 8 },
      { year: 2000, month: 10, day: 9 },
      { year: 2000, month: 10, day: 10 },
      { year: 2000, month: 10, day: 11 },
      { year: 2000, month: 10, day: 12 },
      { year: 2000, month: 10, day: 13 },
      { year: 2000, month: 10, day: 14 },
      { year: 2000, month: 10, day: 15 },
      { year: 2000, month: 10, day: 16 },
      { year: 2000, month: 10, day: 17 },
      { year: 2000, month: 10, day: 18 },
      { year: 2000, month: 10, day: 19 },
      { year: 2000, month: 10, day: 20 },
      { year: 2000, month: 10, day: 21 },
      { year: 2000, month: 10, day: 22 },
      { year: 2000, month: 10, day: 23 },
      { year: 2000, month: 10, day: 24 },
      { year: 2000, month: 10, day: 25 },
      { year: 2000, month: 10, day: 26 },
      { year: 2000, month: 10, day: 27 },
      { year: 2000, month: 10, day: 28 },
      { year: 2000, month: 10, day: 29 },
      { year: 2000, month: 10, day: 30 },
      { year: 2000, month: 10, day: 31 },
      { year: 2000, month: 11, day: 1 },
      { year: 2000, month: 11, day: 2 },
      { year: 2000, month: 11, day: 3 },
      { year: 2000, month: 11, day: 4 },
      { year: 2000, month: 11, day: 5 },
      { year: 2000, month: 11, day: 6 },
      { year: 2000, month: 11, day: 7 },
      { year: 2000, month: 11, day: 8 },
      { year: 2000, month: 11, day: 9 },
      { year: 2000, month: 11, day: 10 },
      { year: 2000, month: 11, day: 11 },
      { year: 2000, month: 11, day: 12 },
      { year: 2000, month: 11, day: 13 },
      { year: 2000, month: 11, day: 14 },
      { year: 2000, month: 11, day: 15 },
      { year: 2000, month: 11, day: 16 },
      { year: 2000, month: 11, day: 17 },
      { year: 2000, month: 11, day: 18 },
      { year: 2000, month: 11, day: 19 },
      { year: 2000, month: 11, day: 20 },
      { year: 2000, month: 11, day: 21 },
      { year: 2000, month: 11, day: 22 },
      { year: 2000, month: 11, day: 23 },
      { year: 2000, month: 11, day: 24 },
      { year: 2000, month: 11, day: 25 },
      { year: 2000, month: 11, day: 26 },
      { year: 2000, month: 11, day: 27 },
      { year: 2000, month: 11, day: 28 },
      { year: 2000, month: 11, day: 29 },
      { year: 2000, month: 11, day: 30 },
      { year: 2000, month: 12, day: 1 },
      { year: 2000, month: 12, day: 2 },
      { year: 2000, month: 12, day: 3 },
      { year: 2000, month: 12, day: 4 },
      { year: 2000, month: 12, day: 5 },
      { year: 2000, month: 12, day: 6 },
      { year: 2000, month: 12, day: 7 },
      { year: 2000, month: 12, day: 8 },
      { year: 2000, month: 12, day: 9 },
      { year: 2000, month: 12, day: 10 },
      { year: 2000, month: 12, day: 11 },
      { year: 2000, month: 12, day: 12 },
      { year: 2000, month: 12, day: 13 },
      { year: 2000, month: 12, day: 14 },
      { year: 2000, month: 12, day: 15 },
      { year: 2000, month: 12, day: 16 },
      { year: 2000, month: 12, day: 17 },
      { year: 2000, month: 12, day: 18 },
      { year: 2000, month: 12, day: 19 },
      { year: 2000, month: 12, day: 20 },
      { year: 2000, month: 12, day: 21 },
      { year: 2000, month: 12, day: 22 },
      { year: 2000, month: 12, day: 23 },
      { year: 2000, month: 12, day: 24 },
      { year: 2000, month: 12, day: 25 },
      { year: 2000, month: 12, day: 26 },
      { year: 2000, month: 12, day: 27 },
      { year: 2000, month: 12, day: 28 },
      { year: 2000, month: 12, day: 29 },
      { year: 2000, month: 12, day: 30 },
      { year: 2000, month: 12, day: 31 },
    ];
    const calendar = [];
    const currentDate = { year: 2000, month: 1, day: 1 };
    while (isValid(currentDate)) {
      while (isValid(currentDate)) {
        calendar.push({ ...currentDate });
        currentDate.day += 1;
      }
      currentDate.month += 1;
      currentDate.day = 1;
    }
    deepEq(expectedCalendar, calendar);
  });

  it('returns false if the month is out of range', function() {
    eq(isValid({ year: 2000, month: 0, day: 10 }), false);
    eq(isValid({ year: 2000, month: -1, day: 10 }), false);
    eq(isValid({ year: 2000, month: 13, day: 10 }), false);
    eq(isValid({ year: 2000, month: NaN, day: 10 }), false);
  });

  it('returns false if the day is out of range', function() {
    eq(isValid({ year: 2000, month: 1, day: 32 }), false);
    eq(isValid({ year: 2000, month: 2, day: 30 }), false);
    eq(isValid({ year: 2000, month: 2, day: 0 }), false);
    eq(isValid({ year: 2000, month: 6, day: -1 }), false);
    eq(isValid({ year: 2000, month: 6, day: NaN }), false);
  });

  it('returns false if the day is out of range in a non-leap year', function() {
    eq(isValid({ year: 1999, month: 2, day: 29 }), false);
  });
});
