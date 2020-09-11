import { deepStrictEqual as eq } from 'assert';
import { generateWeekYear } from './generateWeekYear';

describe('generateWeekYear', function() {
  it('generates a full week year 2019', function() {
    const year = generateWeekYear(2019);
    eq(year.length, 364);
    eq(year[0], { day: 31, month: 12, year: 2018 });
    eq(year[363], { day: 29, month: 12, year: 2019 });
  });

  it('generates a full week year for 2020', function() {
    const year = generateWeekYear(2020);
    eq(year.length, 371);
    eq(year[0], { day: 30, month: 12, year: 2019 });
    eq(year[370], { day: 3, month: 1, year: 2021 });
  });
});
