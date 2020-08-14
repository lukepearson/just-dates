import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

export const addYears = (date: DateObject, years: number): DateObject => {
  checkArgs(date, 'date');
  const { year, month, day } = date;
  return reconcile({ year: year + years, month, day });
};
