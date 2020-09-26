import { deepStrictEqual as eq } from 'assert';
import { parseDate } from './parseDate';

describe('parseDate', function() {
  it('parses a native date', function() {
    eq(parseDate(new Date(2020, 4, 1)), { year: 2020, month: 5, day: 1 });
  });
});
