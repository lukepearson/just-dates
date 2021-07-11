import { DateObject, Duration, StringDateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Subtracts a Duration from a DateObject, returns a new DateObject
 * @example
 * sub({ year: 2020, month: 2, day: 10 }, { month: 1 });
 * // { year: 2020, month: 1, day: 10 }
 * @example
 * sub({ year: 2020, month: 2, day: 10 }, { week: 2 });
 * // { year: 2020, month: 1, day: 27 }
 */
export const sub = (date: DateObject | StringDateObject, duration: Duration): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(duration, 'duration');
  const weekDays = (duration.weeks || 0) * 7;
  const days = (duration.days || 0) + weekDays;
  const delta = {
    year: duration.years || 0,
    month: duration.months || 0,
    day: days,
  };
  return reconcile({
    year: date.year - delta.year,
    month: date.month - delta.month,
    day: date.day - delta.day,
  });
};
