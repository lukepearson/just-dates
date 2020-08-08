import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

export const addDays = (dateObject: DateObject, days: number): DateObject => {
  let { year, month, day } = dateObject;
  day += days;
  return reconcile({ year, month, day });
};
