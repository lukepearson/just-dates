import { DateObject } from '../dateObject';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { isValid } from '../queries/isValid';
import { checkArgs } from 'internal/checkArgs';

/**
 * Returns a valid date by sorting into the right denominations.
 * For example { year: 2000, month: 12: day: 32 } would become { year: 2001, month: 1: day: 1 }
 * and { year: 2000, month: -2: day: 32 } would become { year: 2001, month: 1: day: 1 }
 */
export const reconcile = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  let sortedObject = sortYearMonthDay(date);
  const { year, month, day } = sortedObject;
  if (isNaN(year) || isNaN(month) || isNaN(day)) return date;

  while (!isValid(sortedObject)) {
    sortedObject = sortYearMonthDay(sortedObject);
  }
  return sortedObject;
};

const toNumbers = ({ year, month, day }: DateObject): DateObject => {
  return { year: Number(year), month: Number(month), day: Number(day) };
};

const sortYearMonthDay = (date: DateObject) => {
  let { year, month, day } = toNumbers(date);
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
