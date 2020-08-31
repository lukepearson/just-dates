import { deepStrictEqual as eq } from 'assert';
import { min } from './min';
import { DateObject } from '../dateObject';

describe('min', function() {
  it('returns the oldest of 2 days', function() {
    const before: DateObject = { year: 2020, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(min(after, before), before);
  });

  it('returns the same regardeless of the order of arguments', function() {
    const before: DateObject = { year: -200, month: 1, day: 6 };
    const after: DateObject = { year: 2020, month: 1, day: 6 };
    eq(min(after, before), before);
    eq(min(before, after), before);
  });
});
