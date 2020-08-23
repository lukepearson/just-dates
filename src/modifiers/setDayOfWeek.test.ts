import { setDayOfWeek } from './setDayOfWeek';
import { DateObject, WEDNESDAY, SUNDAY, MONDAY } from '../dateObject';
import { deepStrictEqual as eq } from 'assert';

describe('setDayOfWeek', function() {
  it('sets the date from saturday to monday', function() {
    const date: DateObject = { year: 2020, month: 8, day: 22 };
    const result = setDayOfWeek(date, MONDAY);
    const expected = { year: 2020, month: 8, day: 17 };
    eq(result, expected);
  });

  it('sets the date from monday to sunday', function() {
    const date: DateObject = { year: 2020, month: 8, day: 10 };
    const result = setDayOfWeek(date, SUNDAY);
    const expected = { year: 2020, month: 8, day: 16 };
    eq(result, expected);
  });

  it('sets the date from wednesday to wednesday', function() {
    const date: DateObject = { year: 2020, month: 8, day: 12 };
    const result = setDayOfWeek(date, WEDNESDAY);
    const expected = { year: 2020, month: 8, day: 12 };
    eq(result, expected);
  });
});
