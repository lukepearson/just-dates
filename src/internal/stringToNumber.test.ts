import { stringToNumber } from './stringToNumber';
import { deepStrictEqual as eq } from 'assert';
import { StringDateObject } from '../dateObject';

describe('stringToNumber', function() {
  it('converts string dates to numeric dates', function() {
    const stringDate: StringDateObject = { year: '2020', month: '01', day: '08' };
    const [numericDate] = stringToNumber([stringDate]);
    eq(numericDate, { year: 2020, month: 1, day: 8 });
  });

  it('returns invalid numbers as NaN', function() {
    const stringDate: StringDateObject = { year: '2020q', month: 'm1', day: 'q08' };
    const [numericDate] = stringToNumber([stringDate]);
    eq(numericDate, { year: NaN, month: NaN, day: NaN });
  });
});
