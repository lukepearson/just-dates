import { DateObject } from 'dateObject';
import { addDays } from './addDays';

export const subDays = (dateObject: DateObject, days: number): DateObject => {
  return addDays(dateObject, 0 - days);
};
