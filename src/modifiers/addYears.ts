import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

export const addYears = (dateObject: DateObject, years: number): DateObject => {
  checkArgs(dateObject, 'dateObject');
  const { year, month, day } = dateObject;
  return reconcile({ year: year + years, month, day });
};
