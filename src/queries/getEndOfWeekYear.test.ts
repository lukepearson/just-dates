import { deepStrictEqual as eq } from 'assert';
import { getEndOfWeekYear } from './getEndOfWeekYear';

describe('getEndOfWeekYear', function() {
  it('returns the last day of the week year', function() {
    eq(getEndOfWeekYear({ year: 2020, month: 1, day: 1 }), { year: 2021, month: 1, day: 3 });
    eq(getEndOfWeekYear({ year: 2019, month: 1, day: 1 }), { year: 2019, month: 12, day: 29 });
    eq(getEndOfWeekYear({ year: 2016, month: 1, day: 1 }), { year: 2017, month: 1, day: 1 });
  });
});
