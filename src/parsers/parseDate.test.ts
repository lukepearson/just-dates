import { deepStrictEqual as eq, throws } from 'assert';
import { parseDate, DateFormat } from './parseDate';

describe('ParseDate', function() {
  const testCases = [
    {
      input: '2015-01-02',
      format: 'Y-M-D',
      expected: { year: 2015, month: 1, day: 2 },
    },
    {
      input: '15-01-02',
      format: 'Y-M-D',
      expected: { year: 15, month: 1, day: 2 },
    },
    {
      input: '15-01-02',
      format: 'D-M-Y',
      expected: { year: 2, month: 1, day: 15 },
    },
    {
      input: '31-12-9999',
      format: 'D-M-Y',
      expected: { year: 9999, month: 12, day: 31 },
    },
    {
      input: '6-3-3456',
      format: 'M-D-Y',
      expected: { year: 3456, month: 6, day: 3 },
    },
    {
      input: '1-1-1',
      format: 'M-D-Y',
      expected: { year: 1, month: 1, day: 1 },
    },
  ];

  testCases.forEach((testCase) => {
    it(`creates a date object from a string for ${testCase.input}`, function() {
      const date = parseDate(testCase.input, testCase.format as DateFormat);
      eq(date, testCase.expected);
    });
  });

  it('handles big endian dates', function() {
    const input = '2017-01-01';
    const expected = { year: 2017, month: 1, day: 1 };
    const spaceDate = parseDate(input, 'Y M D');
    const slashDate = parseDate(input, 'Y/M/D');
    const dotDate = parseDate(input, 'Y.M.D');
    const dashDate = parseDate(input, 'Y-M-D');
    eq(spaceDate, expected);
    eq(slashDate, expected);
    eq(dotDate, expected);
    eq(dashDate, expected);
  });

  it('handles middle endian dates', function() {
    const input = '06-4-2000';
    const expected = { year: 2000, month: 6, day: 4 };
    const spaceDate = parseDate(input, 'M D Y');
    const slashDate = parseDate(input, 'M/D/Y');
    const dotDate = parseDate(input, 'M.D.Y');
    const dashDate = parseDate(input, 'M-D-Y');
    eq(spaceDate, expected);
    eq(slashDate, expected);
    eq(dotDate, expected);
    eq(dashDate, expected);
  });

  it('handles little endian dates', function() {
    const input = '28-2-2004';
    const expected = { year: 2004, month: 2, day: 28 };
    const spaceDate = parseDate(input, 'D M Y');
    const slashDate = parseDate(input, 'D/M/Y');
    const dotDate = parseDate(input, 'D.M.Y');
    const dashDate = parseDate(input, 'D-M-Y');
    eq(spaceDate, expected);
    eq(slashDate, expected);
    eq(dotDate, expected);
    eq(dashDate, expected);
  });

  it('defaults to big endian format if none is supplied', function() {
    const input = '2001-12-31';
    const expected = { year: 2001, month: 12, day: 31 };
    const date = parseDate(input);
    eq(date, expected);
  });

  it('throws an error if there are not enough digits in the date', function() {
    const input = '10-10';
    throws(() => parseDate(input), Error('Invalid date "10-10"'));
  });

  it('throws an error if the input is empty', function() {
    const input = '';
    throws(() => parseDate(input), Error('Invalid date ""'));
  });

  it('throws an error if invalid format is supplied', function() {
    const input = '1940-01-01';
    throws(() => parseDate(input, '' as DateFormat), Error('Invalid date format ""'));
  });
});
