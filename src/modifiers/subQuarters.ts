import { DateObject } from '../dateObject';
import { addQuarters } from './addQuarters';
import { checkArgs } from '../internal/checkArgs';

export const subQuarters = (date: DateObject, quarters: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(quarters, 'quarters');
  return addQuarters(date, 0 - quarters);
};
