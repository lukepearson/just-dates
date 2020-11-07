import { formatDistance } from './formatDistance';
import { deepStrictEqual as eq } from 'assert';

describe('formatDistance', function() {
  [
    {
      a: { year: 2020, month: 2, day: 2 },
      b: { year: 2020, month: 2, day: 1 },
      expected: '1 day',
    },
    {
      a: { year: 2020, month: 2, day: 3 },
      b: { year: 2020, month: 2, day: 1 },
      expected: '2 days',
    },
    {
      a: { year: 2020, month: 3, day: 31 },
      b: { year: 2020, month: 4, day: 1 },
      expected: '1 day',
    },
    {
      a: { year: 2020, month: 3, day: 30 },
      b: { year: 2020, month: 4, day: 30 },
      expected: '1 month',
    },
    {
      a: { year: 2020, month: 3, day: 30 },
      b: { year: 2020, month: 4, day: 31 },
      expected: '1 month and 1 day',
    },
    {
      a: { year: 2020, month: 4, day: 1 },
      b: { year: 2020, month: 5, day: 1 },
      expected: '1 month',
    },
    {
      a: { year: 2020, month: 3, day: 31 },
      b: { year: 2020, month: 5, day: 1 },
      expected: '1 month and 1 day',
    },
    {
      a: { year: 2020, month: 2, day: 31 },
      b: { year: 2020, month: 8, day: 22 },
      expected: '5 months and 22 days',
    },
    {
      a: { year: 2020, month: 1, day: 1 },
      b: { year: 2020, month: 12, day: 31 },
      expected: '11 months and 30 days',
    },
    {
      a: { year: 2021, month: 6, day: 6 },
      b: { year: 2020, month: 6, day: 6 },
      expected: '1 year',
    },
    {
      a: { year: 2020, month: 6, day: 6 },
      b: { year: 2021, month: 6, day: 7 },
      expected: '1 year and 1 day',
    },
    {
      a: { year: 2020, month: 6, day: 6 },
      b: { year: 2021, month: 6, day: 8 },
      expected: '1 year and 2 days',
    },
    {
      a: { year: 2020, month: 6, day: 6 },
      b: { year: 2021, month: 7, day: 6 },
      expected: '1 year and 1 month',
    },
    {
      a: { year: 2020, month: 2, day: 3 },
      b: { year: 2023, month: 11, day: 21 },
      expected: '3 years, 9 months and 18 days',
    },
    {
      a: { year: 2020, month: 2, day: 3 },
      b: { year: 2020, month: 2, day: 3 },
      expected: '0 days',
    },
  ].forEach(({ a, b, expected }) => {
    it(`formats ${expected}`, function() {
      eq(formatDistance(a, b), expected);
    });
  });
});
