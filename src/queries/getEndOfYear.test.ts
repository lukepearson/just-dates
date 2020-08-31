import { deepStrictEqual as eq } from 'assert';
import { getEndOfYear } from './getEndOfYear';

describe('getEndOfYear', function() {
  it('returns the end of the year', function() {
    eq(getEndOfYear({ year: 2020, month: 8, day: 24 }), { year: 2020, month: 12, day: 31 });
    eq(getEndOfYear({ year: 2020, month: 2, day: 3 }), { year: 2020, month: 12, day: 31 });
    eq(getEndOfYear({ year: 10, month: 12, day: 6 }), { year: 10, month: 12, day: 31 });
  });
});
