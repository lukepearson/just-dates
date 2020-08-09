import { DateObject } from 'dateObject';
import { getDaysInMonth } from './getDaysInMonth';
import { checkArgs } from '../internal/checkArgs';

/**
 * Checks whether a date object is valid between 0-1-1 and ????-12-31?
 * @param dateObject
 */
export const isValid = (dateObject: DateObject): boolean => {
  checkArgs(dateObject, 'dateObject');
  const { day, month, year } = dateObject;
  if (year < 1) return false;
  if (month > 12 || month < 1) return false;
  if (day > getDaysInMonth({ month, year }) || day < 1) return false;
  if (isNaN(day + month + year)) return false;
  return true;
};
