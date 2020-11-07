import { deepStrictEqual as eq } from 'assert';
import { format } from '../formatters/format';
import { getEndOfWeekYear } from './getEndOfWeekYear';

describe('getEndOfWeekYear', function() {
  [
    { input: { year: 2020, month: 1, day: 1 }, expected: { year: 2021, month: 1, day: 3 } },
    { input: { year: 2019, month: 12, day: 30 }, expected: { year: 2021, month: 1, day: 3 } },
    { input: { year: 2019, month: 1, day: 1 }, expected: { year: 2019, month: 12, day: 29 } },
    { input: { year: 2018, month: 12, day: 31 }, expected: { year: 2019, month: 12, day: 29 } },
    { input: { year: 2018, month: 1, day: 1 }, expected: { year: 2018, month: 12, day: 30 } },
    { input: { year: 2017, month: 1, day: 2 }, expected: { year: 2017, month: 12, day: 31 } },
    { input: { year: 2016, month: 1, day: 1 }, expected: { year: 2017, month: 1, day: 1 } },
    { input: { year: 2014, month: 12, day: 28 }, expected: { year: 2014, month: 12, day: 28 } },
    { input: { year: 2014, month: 12, day: 29 }, expected: { year: 2016, month: 1, day: 3 } },
  ].forEach(({ input, expected }) => {
    it(`the last day of ${format(input)} == ${format(expected)}`, function() {
      eq(getEndOfWeekYear(input), expected);
    });
  });
});
