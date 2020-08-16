import { DateObject } from '../dateObject';
import { getDaysInMonth } from './getDaysInMonth';
import { checkArgs } from '../internal/checkArgs';

/**
 * Checks whether a date object is valid after 1-1-1
 */
export const isValid = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  const { day, month, year } = date;
  if (year < 1) return false;
  if (month > 12 || month < 1) return false;
  if (day > getDaysInMonth({ month, year }) || day < 1) return false;
  if (isNaN(day + month + year)) return false;
  return true;
};
