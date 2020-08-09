import { isNumberLeapYear } from './isLeapYear';
import { YearMonth } from 'dateObject';

export const getDaysInMonth = (yearMonth: YearMonth) => {
  let { year, month } = yearMonth;
  while (month < 1) {
    month += 12;
    year--;
  }
  const monthNum = ((month - 1) % 12) + 1;
  return {
    1: 31,
    2: isNumberLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }[monthNum];
};
