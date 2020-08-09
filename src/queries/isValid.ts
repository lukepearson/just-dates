import { DateObject } from 'dateObject';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Checks whether a date object is valid between 0-1-1 and ????-12-31?
 * @param dateObject
 */
export const isValid = (dateObject: DateObject): boolean => {
  if (!dateObject) throw new Error('Invalid date object');
  const { day, month, year } = dateObject;
  if (year < 1) return false;
  if (month > 12 || month < 1) return false;
  if (day > getDaysInMonth(month, year) || day < 1) return false;
  if (isNaN(day + month + year)) return false;
  return true;
};
