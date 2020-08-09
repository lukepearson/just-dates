import { DateObject } from 'dateObject';
import { addMonths } from './addMonths';

export const subMonths = (dateObject: DateObject, months: number): DateObject =>
  addMonths(dateObject, 0 - months);
