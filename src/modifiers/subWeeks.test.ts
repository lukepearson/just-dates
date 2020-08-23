import { subWeeks } from './subWeeks';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('subWeeks', function() {
  it('subtracts weeks from the date', function() {
    const date: DateObject = { year: 2020, month: 8, day: 27 };
    const result = subWeeks(date, 20);
    const expected = { year: 2020, month: 4, day: 9 };
    eq(result, expected);
  });

  it('subtracts weeks from the date over the year boundary', function() {
    const date: DateObject = { year: 2020, month: 8, day: 27 };
    const result = subWeeks(date, 2);
    const expected = { year: 2020, month: 8, day: 13 };
    eq(result, expected);
  });
});
