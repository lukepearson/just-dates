import { DateObject } from 'dateObject';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { isValid } from '../queries/isValid';

/**
 * Returns a valid date by sorting into the right denominations.
 * For example { year: 2000, month: 12: day: 32 } would become { year: 2001, month: 1: day: 1 }
 * and { year: 2000, month: -2: day: 32 } would become { year: 2001, month: 1: day: 1 }
 * @param dateObject
 */
export const reconcile = (dateObject: DateObject): DateObject => {
  let sortedObject = sortYearMonthDay(dateObject);
  const { year, month, day } = sortedObject;
  if (isNaN(year) || isNaN(month) || isNaN(day)) return dateObject;

  while (!isValid(sortedObject)) {
    sortedObject = sortYearMonthDay(sortedObject);
  }
  return sortedObject;
};

const toNumbers = ({ year, month, day }: DateObject): DateObject => {
  return { year: Number(year), month: Number(month), day: Number(day) };
};

const sortYearMonthDay = (dateObject: DateObject) => {
  let { year, month, day } = toNumbers(dateObject);
  let daysInMonth = getDaysInMonth({ month, year });
  if (day > daysInMonth) {
    month++;
    day -= daysInMonth;
    daysInMonth = getDaysInMonth({ month, year });
  }
  if (day <= 0) {
    month--;
    daysInMonth = getDaysInMonth({ month, year });
    day += daysInMonth;
  }
  if (month > 12) {
    year++;
    month -= 12;
  }
  if (month <= 0) {
    year--;
    month += 12;
  }
  year = Math.max(1, year);
  daysInMonth = getDaysInMonth({ month, year });
  if (day > daysInMonth) {
    month++;
    day -= daysInMonth;
  }
  return { year, month, day };
};
