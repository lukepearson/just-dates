import { DateObject } from '../dateObject';
import { addDays } from './addDays';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from '../queries/isSaturday';
import { isSunday } from '../queries/isSunday';

export const addWeekDays = (date: DateObject, weekDays: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weekDays, 'weekDays');
  const weekDate = skipWeekend(date);
  const extraDays = Math.floor(weekDays / 5) * 2;
  return skipWeekend(addDays(weekDate, weekDays + extraDays));
};

const skipWeekend = (date: DateObject): DateObject => {
  if (isSaturday(date)) return addDays(date, 2);
  if (isSunday(date)) return addDays(date, 1);
  return date;
};
