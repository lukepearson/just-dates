import { Duration } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

const s = (num: number) => (num === 1 ? '' : 's');

/**
 * Formats a duration to a human readable string
 * @example
 * formatDistance({ year: 2020, month: 2, day: 3 }, { year: 2023, month: 11, day: 21 })
 * // '3 years, 9 months and 18 days'
 */
export const formatDuration = (duration: Duration): string => {
  checkArgs(duration, 'duration');
  let { years = 0, months = 0, weeks = 0, days = 0 } = duration;
  days += weeks * 7;
  const diffs = [
    years ? `${years} year${s(years)}` : '',
    months ? `${months} month${s(months)}` : '',
    days ? `${days} day${s(days)}` : '',
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
