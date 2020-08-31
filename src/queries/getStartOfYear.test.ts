import { deepStrictEqual as eq } from 'assert';
import { getStartOfYear } from './getStartOfYear';

describe('getStartOfYear', function() {
  it('returns the first day of the year', function() {
    eq(getStartOfYear({ year: 2019, month: 12, day: 22 }), { year: 2019, month: 1, day: 1 });
  });
});
