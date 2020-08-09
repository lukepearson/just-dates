import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

export const addMonths = (dateObject: DateObject, months: number): DateObject => {
  const { year, month, day } = dateObject;
  return reconcile({ year, month: month + months, day });
};
