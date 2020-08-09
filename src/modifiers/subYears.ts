import { DateObject } from 'dateObject';
import { addYears } from './addYears';

export const subYears = (dateObject: DateObject, years: number): DateObject =>
  addYears(dateObject, 0 - years);
