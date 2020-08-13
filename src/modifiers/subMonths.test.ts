import { subMonths } from './subMonths';
import { DateObject } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('subMonths', function() {
  it('subtracts months', function() {
    const date: DateObject = { year: 2020, month: 1, day: 1 };
    const result = subMonths(date, 1);
    const expected = { year: 2019, month: 12, day: 1 };
    eq(result, expected);
  });
});
