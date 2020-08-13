import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

export const addWeeks = (dateObject: DateObject, weeks: number = 0): DateObject => {
  checkArgs(dateObject, 'dateObject');
  const weekDays = weeks * 7;
  return reconcile({
    ...dateObject,
    day: dateObject.day + weekDays,
  });
};
