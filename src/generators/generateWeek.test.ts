import { deepStrictEqual as eq } from 'assert';
import { generateWeek } from './generateWeek';

describe('generateWeek', function() {
  it('generates a full week', function() {
    eq(generateWeek({ year: 2020, month: 4, day: 30 }), [
      {
        day: 30,
        month: 4,
        year: 2020,
      },
      {
        day: 1,
        month: 5,
        year: 2020,
      },
      {
        day: 2,
        month: 5,
        year: 2020,
      },
      {
        day: 3,
        month: 5,
        year: 2020,
      },
      {
        day: 4,
        month: 5,
        year: 2020,
      },
      {
        day: 5,
        month: 5,
        year: 2020,
      },
      {
        day: 6,
        month: 5,
        year: 2020,
      },
      {
        day: 7,
        month: 5,
        year: 2020,
      },
    ]);
  });
});
