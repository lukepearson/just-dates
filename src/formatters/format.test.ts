import { format } from './format';
import { DateObject } from 'dateObject';
import { deepStrictEqual as eq, throws } from 'assert';
import { DateFormat } from 'parsers/parseDate';

describe('format', function() {
  it('formats dates using the default format', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = format(date);
    const expected = '2020-02-22';
    eq(result, expected);
  });

  it('formats dates using the specified format', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = format(date, 'Y M D');
    const expected = '2020 02 22';
    eq(result, expected);
  });

  it('throws an error if no date is passed in', function() {
    throws(() => format(null as any), Error('Missing argument "dateObject"'));
  });

  it('throws an error if no separator is recognised', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    throws(() => format(date, 'YMD' as DateFormat), Error('Invalid date format "YMD"'));
  });

  it('returns unknown tokens as they were', function() {
    const date: DateObject = { year: 2020, month: 2, day: 22 };
    const result = format(date, 'Y cats M D' as DateFormat);
    const expected = '2020 cats 02 22';
    eq(result, expected);
  });
});
