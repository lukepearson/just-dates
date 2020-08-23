import { DateObject } from '../dateObject';
import { addDays } from './addDays';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from '../queries/isSaturday';
import { isSunday } from '../queries/isSunday';
import { addWeeks } from './addWeeks';

/**
 * Adds week days to a DateObject, returns a new DateObject
 * @example
 * addWeekDays({ year: 2020, month: 1, day: 11 }, 5);
 * // { year: 2020, month: 1, day:  }
 */
export const addWeekDays = (date: DateObject, weekDays: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weekDays, 'weekDays');
  const isNegative = weekDays < 0;
  const days = Math.abs(weekDays);
  const weekDate = skipWeekend(date, isNegative);
  const extraWeeks = Math.floor(days / 5);
  let extraDays = Math.abs(days % 5);
  let newDate = addWeeks(weekDate, isNegative ? 0 - extraWeeks : extraWeeks);
  while (extraDays--) {
    newDate = skipWeekend(addDays(newDate, isNegative ? -1 : 1), isNegative);
  }
  return newDate;
};

const skipWeekend = (date: DateObject, isNegative: boolean): DateObject => {
  if (isSaturday(date)) return addDays(date, isNegative ? -1 : 2);
  if (isSunday(date)) return addDays(date, isNegative ? -2 : 1);
  return date;
};
