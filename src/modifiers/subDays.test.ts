import { subDays } from './subDays';
import { DateObject } from 'dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('subDays', function() {
  it('subtracts days', function() {
    const date: DateObject = { year: 2020, month: 1, day: 1 };
    const result = subDays(date, 1);
    const expected = { year: 2019, month: 12, day: 31 };
    eq(result, expected);
  });
});
