import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

export const addYears = (dateObject: DateObject, years: number): DateObject => {
  const { year, month, day } = dateObject;
  return reconcile({ year: year + years, month, day });
};
