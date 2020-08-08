import { equal as eq } from 'assert';
import { isLeapYear } from './isLeapYear';

describe('isLeapYear', function() {
  [10, 1006, 2001, 2005, 2009, 2010, 2070].map((year) => {
    it(`returns false for the year ${year}`, function() {
      const date = { year, day: 1, month: 10 };
      eq(isLeapYear(date), false);
    });
  });

  [4, 8, 12, 2000, 2020, 2040, 2060].map((year) => {
    it(`returns true for the year ${year}`, function() {
      const date = { year, day: 1, month: 10 };
      eq(isLeapYear(date), true);
    });
  });
});
