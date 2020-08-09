import { subYears } from './subYears';
import { DateObject } from 'dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('subYears', function() {
  it('subtracts years', function() {
    const date: DateObject = { year: 2020, month: 1, day: 1 };
    const result = subYears(date, 1);
    const expected = { year: 2019, month: 1, day: 1 };
    eq(result, expected);
  });
});
