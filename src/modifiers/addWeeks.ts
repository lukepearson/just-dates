import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

export const addWeeks = (date: DateObject, weeks: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weeks, 'weeks');
  const weekDays = weeks * 7;
  return reconcile({
    ...date,
    day: date.day + weekDays,
  });
};
