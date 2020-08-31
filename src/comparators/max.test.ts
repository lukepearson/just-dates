import { deepStrictEqual as eq } from 'assert';
import { max } from './max';
import { DateObject } from '../dateObject';

describe('max', function() {
  it('returns the latest of 2 days', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(max(after, before), after);
  });

  it('returns the same regardeless of the order of arguments', function() {
    const before: DateObject = { year: -200, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(max(after, before), after);
    eq(max(before, after), after);
  });
});
