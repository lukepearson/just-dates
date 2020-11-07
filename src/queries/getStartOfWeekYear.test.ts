import { deepStrictEqual as eq } from 'assert';
import { format } from '../formatters/format';
import { getStartOfWeekYear } from './getStartOfWeekYear';

describe('getStartOfWeekYear', function() {
  [
    {
      input: { year: 2021, month: 1, day: 4 },
      expected: { year: 2021, month: 1, day: 4 },
    },
    {
      input: { year: 2004, month: 6, day: 13 },
      expected: { year: 2003, month: 12, day: 29 },
    },
    {
      input: { year: 2003, month: 6, day: 13 },
      expected: { year: 2002, month: 12, day: 30 },
    },
    {
      input: { year: 2002, month: 6, day: 13 },
      expected: { year: 2001, month: 12, day: 31 },
    },
  ].forEach(({ input, expected }) => {
    it(`the first day of the week-year containing ${format(input)} is ${format(
      expected
    )}`, function() {
      eq(getStartOfWeekYear(input), expected);
    });
  });

  [
    { year: 2017, month: 12, day: 24 },
    { year: 2017, month: 12, day: 25 },
    { year: 2017, month: 12, day: 26 },
    { year: 2017, month: 12, day: 27 },
    { year: 2017, month: 12, day: 28 },
    { year: 2017, month: 12, day: 29 },
    { year: 2017, month: 12, day: 30 },
    { year: 2017, month: 12, day: 31 },
  ].forEach((input) => {
    it(`the first day of the week-year containing ${format(input)} is 2017-01-02`, function() {
      eq(getStartOfWeekYear(input), { year: 2017, month: 1, day: 2 });
    });
  });

  [
    { year: 2019, month: 12, day: 30 },
    { year: 2019, month: 12, day: 31 },
    { year: 2020, month: 1, day: 1 },
    { year: 2020, month: 1, day: 2 },
    { year: 2020, month: 1, day: 3 },
    { year: 2020, month: 1, day: 4 },
    { year: 2020, month: 1, day: 5 },
    { year: 2020, month: 12, day: 27 },
    { year: 2020, month: 12, day: 28 },
    { year: 2020, month: 12, day: 29 },
    { year: 2020, month: 12, day: 30 },
    { year: 2020, month: 12, day: 31 },
    { year: 2021, month: 1, day: 1 },
    { year: 2021, month: 1, day: 2 },
    { year: 2021, month: 1, day: 3 },
  ].forEach((input) => {
    it(`the first day of the week-year containing ${format(input)} is 2019-12-30`, function() {
      eq(getStartOfWeekYear(input), { year: 2019, month: 12, day: 30 });
    });
  });

  [
    { year: 2021, month: 1, day: 4 },
    { year: 2021, month: 1, day: 5 },
    { year: 2021, month: 1, day: 6 },
    { year: 2021, month: 1, day: 7 },
    { year: 2021, month: 1, day: 8 },
    { year: 2021, month: 12, day: 27 },
    { year: 2021, month: 12, day: 28 },
    { year: 2021, month: 12, day: 29 },
    { year: 2021, month: 12, day: 30 },
    { year: 2021, month: 12, day: 31 },
    { year: 2022, month: 1, day: 1 },
    { year: 2022, month: 1, day: 2 },
  ].forEach((input) => {
    it(`the first day of the week-year containing ${format(input)} is 2021-01-04`, function() {
      eq(getStartOfWeekYear(input), { year: 2021, month: 1, day: 4 });
    });
  });
});
