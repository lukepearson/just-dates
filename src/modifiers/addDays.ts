import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

export const addDays = (dateObject: DateObject, days: number): DateObject => {
  const { year, month, day } = dateObject;
  return reconcile({ year, month, day: day + days });
};
