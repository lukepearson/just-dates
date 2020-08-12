import { DateObject } from 'dateObject';
import { addDays } from './addDays';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from '../queries/isSaturday';
import { isSunday } from '../queries/isSunday';

export const addWeekDays = (dateObject: DateObject, days: number = 0): DateObject => {
  checkArgs(dateObject, 'dateObject');
  if (!days) return dateObject;
  const weekDate = skipWeekend(dateObject);
  const extraDays = Math.floor(days / 5) * 2;
  return skipWeekend(addDays(weekDate, days + extraDays));
};

const skipWeekend = (dateObject: DateObject): DateObject => {
  if (isSaturday(dateObject)) return addDays(dateObject, 2);
  if (isSunday(dateObject)) return addDays(dateObject, 1);
  return dateObject;
};
