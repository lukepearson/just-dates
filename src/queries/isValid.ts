import { DateObject } from 'dateObject';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Is it a valid date between 0001-1-1 and 9999-12-31?
 * Checks number of days in month, including leap years
 * @param dateObject
 */
export const isValid = (dateObject: DateObject): boolean => {
  if (!dateObject) return false;
  const { day, month, year } = dateObject;
  if (year < 1 || year > 9999) return false;
  if (month > 12 || month < 1) return false;
  if (day > getDaysInMonth(month, year) || day < 1) return false;
  if (isNaN(day + month + year)) return false;
  return true;
};
