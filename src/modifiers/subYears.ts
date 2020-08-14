import { DateObject } from '../dateObject';
import { addYears } from './addYears';
import { checkArgs } from '../internal/checkArgs';

export const subYears = (date: DateObject, years: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(years, 'years');
  return addYears(date, 0 - years);
};
