import { formatDuration } from './formatDuration';
import { deepStrictEqual as eq } from 'assert';

describe('formatDuration', function() {
  [
    {
      duration: { days: 1 },
      expected: '1 day',
    },
    {
      duration: { months: 1 },
      expected: '1 month',
    },
    {
      duration: { years: 1 },
      expected: '1 year',
    },
    {
      duration: { weeks: 1 },
      expected: '7 days',
    },
    {
      duration: { months: 2, weeks: 2, days: 2 },
      expected: '2 months and 16 days',
    },
    {
      duration: { years: 0, months: 0, days: 1 },
      expected: '1 day',
    },
    {
      duration: { days: 2 },
      expected: '2 days',
    },
    {
      duration: { days: 30 },
      expected: '30 days',
    },
    {
      duration: { months: 1 },
      expected: '1 month',
    },
    {
      duration: { months: 1, days: 1 },
      expected: '1 month and 1 day',
    },
    {
      duration: { months: 5, days: 22 },
      expected: '5 months and 22 days',
    },
    {
      duration: { months: 11, days: 30 },
      expected: '11 months and 30 days',
    },
    {
      duration: { years: 1 },
      expected: '1 year',
    },
    {
      duration: { years: 1, days: 1 },
      expected: '1 year and 1 day',
    },
    {
      duration: { years: 0, months: 0, days: 0 },
      expected: '0 days',
    },
  ].forEach(({ duration, expected }) => {
    it(`formats ${expected}`, function() {
      eq(formatDuration(duration), expected);
    });
  });
});
