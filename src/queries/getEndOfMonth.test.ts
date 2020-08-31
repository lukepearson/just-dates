import { deepStrictEqual as eq } from 'assert';
import { getEndOfMonth } from './getEndOfMonth';

describe('getEndOfMonth', function() {
  it('returns the end of the month', function() {
    eq(getEndOfMonth({ year: 1969, month: 8, day: 1 }), { year: 1969, month: 8, day: 31 });
    eq(getEndOfMonth({ year: 1970, month: 2, day: 3 }), { year: 1970, month: 2, day: 28 });
    eq(getEndOfMonth({ year: 2020, month: 2, day: 6 }), { year: 2020, month: 2, day: 29 });
  });
});
