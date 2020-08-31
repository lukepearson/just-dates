import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { diff } from '../comparators/diff';

const s = (num: number) => (num === 1 ? '' : 's');

/**
 * Returns the difference between two DateObjects as a string
 * @example
 * formatDistance({ year: 2020, month: 2, day: 3 }, { year: 2023, month: 11, day: 21 })
 * // '3 years, 9 months and 18 days'
 */
export const formatDistance = (a: DateObject, b: DateObject): string => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const { year, month, day } = diff(a, b);
  const diffs = [
    year ? `${year} year${s(year)}` : '',
    month ? `${month} month${s(month)}` : '',
    day ? `${day} day${s(day)}` : '',
  ].filter((n) => n.length);
  if (!diffs.length) return '0 days';
  if (diffs.length > 2) {
    diffs[0] += ',';
  }
  if (diffs.length > 1) {
    diffs.splice(diffs.length - 1, 0, 'and');
  }
  return diffs.join(' ');
};
