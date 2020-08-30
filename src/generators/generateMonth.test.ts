import { deepStrictEqual as eq } from 'assert';
import { generateMonth } from './generateMonth';

describe('generateMonth', function() {
  it('returns today for the current timezone', function() {
    eq(generateMonth({ year: 2020, month: 2 }), [
      {
        day: 1,
        month: 2,
        year: 2020,
      },
      {
        day: 2,
        month: 2,
        year: 2020,
      },
      {
        day: 3,
        month: 2,
        year: 2020,
      },
      {
        day: 4,
        month: 2,
        year: 2020,
      },
      {
        day: 5,
        month: 2,
        year: 2020,
      },
      {
        day: 6,
        month: 2,
        year: 2020,
      },
      {
        day: 7,
        month: 2,
        year: 2020,
      },
      {
        day: 8,
        month: 2,
        year: 2020,
      },
      {
        day: 9,
        month: 2,
        year: 2020,
      },
      {
        day: 10,
        month: 2,
        year: 2020,
      },
      {
        day: 11,
        month: 2,
        year: 2020,
      },
      {
        day: 12,
        month: 2,
        year: 2020,
      },
      {
        day: 13,
        month: 2,
        year: 2020,
      },
      {
        day: 14,
        month: 2,
        year: 2020,
      },
      {
        day: 15,
        month: 2,
        year: 2020,
      },
      {
        day: 16,
        month: 2,
        year: 2020,
      },
      {
        day: 17,
        month: 2,
        year: 2020,
      },
      {
        day: 18,
        month: 2,
        year: 2020,
      },
      {
        day: 19,
        month: 2,
        year: 2020,
      },
      {
        day: 20,
        month: 2,
        year: 2020,
      },
      {
        day: 21,
        month: 2,
        year: 2020,
      },
      {
        day: 22,
        month: 2,
        year: 2020,
      },
      {
        day: 23,
        month: 2,
        year: 2020,
      },
      {
        day: 24,
        month: 2,
        year: 2020,
      },
      {
        day: 25,
        month: 2,
        year: 2020,
      },
      {
        day: 26,
        month: 2,
        year: 2020,
      },
      {
        day: 27,
        month: 2,
        year: 2020,
      },
      {
        day: 28,
        month: 2,
        year: 2020,
      },
      {
        day: 29,
        month: 2,
        year: 2020,
      },
    ]);
  });
});
