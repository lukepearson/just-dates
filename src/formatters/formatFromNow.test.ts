import { formatFromNow } from './formatFromNow';
import { format } from './format';
import { deepStrictEqual as eq } from 'assert';
import { useFakeTimers } from 'sinon';

describe('formatFromNow', function() {
  beforeEach(function() {
    useFakeTimers(1598745533319);
  });

  [
    {
      date: { year: 2020, month: 2, day: 2 },
      now: { year: 2020, month: 2, day: 2 },
      expected: 'Today',
      past: 'Today',
    },
    {
      date: { year: 2020, month: 2, day: 3 },
      now: { year: 2020, month: 2, day: 2 },
      expected: 'Tomorrow',
      past: 'Yesterday',
    },
    {
      date: { year: 2021, month: 1, day: 1 },
      now: { year: 2020, month: 12, day: 31 },
      expected: 'Tomorrow',
      past: 'Yesterday',
    },
    {
      date: { year: 2020, month: 3, day: 1 },
      now: { year: 2020, month: 2, day: 29 },
      expected: 'Tomorrow',
      past: 'Yesterday',
    },
    {
      date: { year: 2020, month: 2, day: 7 },
      now: { year: 2020, month: 2, day: 3 },
      expected: 'On Friday',
      past: 'Four days ago',
    },
    {
      date: { year: 2020, month: 2, day: 8 },
      now: { year: 2020, month: 2, day: 3 },
      expected: 'On Saturday',
      past: 'Five days ago',
    },
    {
      date: { year: 2020, month: 2, day: 10 },
      now: { year: 2020, month: 2, day: 3 },
      expected: 'Next Monday',
      past: 'Last Monday',
    },
    {
      date: { year: 2020, month: 2, day: 16 },
      now: { year: 2020, month: 2, day: 5 },
      expected: 'Next Sunday',
      past: 'Last Wednesday',
    },
    {
      date: { year: 2020, month: 2, day: 17 },
      now: { year: 2020, month: 2, day: 5 },
      expected: 'In two weeks',
      past: 'Two weeks ago',
    },
    {
      date: { year: 2020, month: 2, day: 23 },
      now: { year: 2020, month: 2, day: 5 },
      expected: 'In two weeks',
      past: 'Two weeks ago',
    },
    {
      date: { year: 2020, month: 2, day: 24 },
      now: { year: 2020, month: 2, day: 5 },
      expected: 'In three weeks',
      past: 'Three weeks ago',
    },
    {
      date: { year: 2020, month: 3, day: 31 },
      now: { year: 2020, month: 3, day: 1 },
      expected: 'In five weeks',
      past: 'Five weeks ago',
    },
    {
      date: { year: 2020, month: 4, day: 1 },
      now: { year: 2020, month: 3, day: 1 },
      expected: 'Next month',
      past: 'Last month',
    },
    {
      date: { year: 2020, month: 4, day: 30 },
      now: { year: 2020, month: 3, day: 1 },
      expected: 'Next month',
      past: 'Last month',
    },
    {
      date: { year: 2020, month: 7, day: 20 },
      now: { year: 2020, month: 3, day: 1 },
      expected: 'In four months',
      past: 'Four months ago',
    },
    {
      date: { year: 2020, month: 11, day: 31 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'In ten months',
      past: 'Ten months ago',
    },
    {
      date: { year: 2021, month: 1, day: 1 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'Next year',
      past: 'Last year',
    },
    {
      date: { year: 2021, month: 12, day: 31 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'Next year',
      past: 'Last year',
    },
    {
      date: { year: 2022, month: 6, day: 25 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'In two years',
      past: 'Two years ago',
    },
    {
      date: { year: 2031, month: 9, day: 20 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'In eleven years',
      past: 'Eleven years ago',
    },
    {
      date: { year: 2220, month: 9, day: 20 },
      now: { year: 2020, month: 1, day: 1 },
      expected: 'In 200 years',
      past: '200 years ago',
    },
  ].forEach(({ date, now, expected, past }) => {
    it(`${format(now)} to ${format(date)} is ${expected}`, function() {
      eq(formatFromNow(date, now), expected);
      eq(formatFromNow(now, date), past);
    });
  });

  it('defaults to the local current day', function() {
    const date = { year: 2020, month: 8, day: 30 };
    eq(formatFromNow(date), 'Today');
  });
});
