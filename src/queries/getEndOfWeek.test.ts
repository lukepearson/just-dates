import { deepStrictEqual as eq } from 'assert';
import { getEndOfWeek } from './getEndOfWeek';

describe('getEndOfWeek', function() {
  it('returns the end of the week', function() {
    eq(getEndOfWeek({ year: 2020, month: 8, day: 24 }), { year: 2020, month: 8, day: 30 });
    eq(getEndOfWeek({ year: 2020, month: 2, day: 3 }), { year: 2020, month: 2, day: 9 });
    eq(getEndOfWeek({ year: 10, month: 12, day: 6 }), { year: 10, month: 12, day: 12 });
  });
});
