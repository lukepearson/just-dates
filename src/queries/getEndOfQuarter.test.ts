import { deepStrictEqual as eq } from 'assert';
import { getEndOfQuarter } from './getEndOfQuarter';

describe('getEndOfQuarter', function() {
  it('returns the end of the month', function() {
    eq(getEndOfQuarter({ year: 1969, month: 8, day: 1 }), { year: 1969, month: 9, day: 31 });
    eq(getEndOfQuarter({ year: 1970, month: 2, day: 3 }), { year: 1970, month: 3, day: 28 });
    eq(getEndOfQuarter({ year: 2020, month: 2, day: 6 }), { year: 2020, month: 3, day: 29 });
    eq(getEndOfQuarter({ year: 2020, month: 10, day: 7 }), { year: 2020, month: 12, day: 31 });
  });
});
