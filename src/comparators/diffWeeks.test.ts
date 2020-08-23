import { equal as eq } from 'assert';
import { diffWeeks } from './diffWeeks';

describe('diffWeeks', function() {
  it('returns full weeks between 2 dates', function() {
    const result = diffWeeks({ day: 1, month: 1, year: 2020 }, { day: 10, month: 1, year: 2020 });
    eq(result, 1);
  });

  it('returns the same value regardless of the order of the arguments', function() {
    const result = diffWeeks({ day: 10, month: 1, year: 2020 }, { day: 1, month: 1, year: 2020 });
    eq(result, 1);
  });
});
