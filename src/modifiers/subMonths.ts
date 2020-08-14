import { DateObject } from '../dateObject';
import { addMonths } from './addMonths';
import { checkArgs } from '../internal/checkArgs';

export const subMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  return addMonths(date, 0 - months);
};
