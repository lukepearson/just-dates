import { DateObject, StringDateObject } from '../dateObject';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { isValid } from '../queries/isValid';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns a valid date by sorting into the right units.
 * @example reconcile({ year: 2000, month: 12: day: 32 })
 * // { year: 2001, month: 1: day: 1 }
 * @example reconcile({ year: 2000, month: -2: day: 32 })
 * // { year: 2001, month: 1: day: 1 }
 */
export const reconcile = (date: DateObject | StringDateObject): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  let sortedObject = sortYearMonthDay(date);
  const { year, month, day } = sortedObject;
  if (isNaN(year) || isNaN(month) || isNaN(day)) return date;

  while (!isValid(sortedObject)) {
    sortedObject = sortYearMonthDay(sortedObject);
  }
  return sortedObject;
};

const sortYearMonthDay = (date: DateObject) => {
  let { year, month, day } = date;
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
  return { year: Math.max(1, year), month, day };
};
