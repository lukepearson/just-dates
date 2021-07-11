import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, StringDateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getQuarter } from '../queries/getQuarter';
import { addQuarters } from './addQuarters';

/**
 * Sets the date of a DateObject to a specific quarter, returns a new DateObject
 * @example
 * setQuarter({ year: 2019, month: 2, day: 1 }, 2);
 * // { year: 2019, month: 12, day: 31 }
 */
export const setQuarter = (date: DateObject | StringDateObject, quarter: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(quarter, 'quarter');
  const currentQuarter = getQuarter(date);
  return addQuarters(date, quarter - currentQuarter);
};
