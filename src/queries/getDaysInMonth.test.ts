import { equal as eq } from 'assert';
import { getDaysInMonth } from './getDaysInMonth';

describe('GetDaysInMonth', function() {
  it('returns 30 days for september, april, june, november', function() {
    eq(getDaysInMonth(4, 2000), 30);
    eq(getDaysInMonth(6, 2000), 30);
    eq(getDaysInMonth(9, 2000), 30);
    eq(getDaysInMonth(11, 2000), 30);
  });

  it('returns 31 days for jan, march, may, july, august, october, december', function() {
    eq(getDaysInMonth(1, 2000), 31);
    eq(getDaysInMonth(3, 2000), 31);
    eq(getDaysInMonth(5, 2000), 31);
    eq(getDaysInMonth(7, 2000), 31);
    eq(getDaysInMonth(8, 2000), 31);
    eq(getDaysInMonth(10, 2000), 31);
    eq(getDaysInMonth(12, 2000), 31);
  });

  it('returns 28 days for non leap-year februaries', function() {
    eq(getDaysInMonth(2, 2001), 28, '2001');
    eq(getDaysInMonth(2, 2002), 28, '2002');
    eq(getDaysInMonth(2, 2003), 28, '2003');
  });

  it('returns 29 days for leap-year februaries', function() {
    eq(getDaysInMonth(2, 2000), 29);
    eq(getDaysInMonth(2, 2004), 29);
    eq(getDaysInMonth(2, 8), 29);
    eq(getDaysInMonth(2, 2024), 29);
  });

  it('handles negative values', function() {
    [
      { input: 0, expected: 31 },
      { input: -1, expected: 30 },
      { input: -2, expected: 31 },
      { input: -10, expected: 28 },
      { input: -11, expected: 31 },
      { input: -12, expected: 31 },
      { input: -24, expected: 31 },
    ].forEach((testCase) => {
      eq(getDaysInMonth(testCase.input, 2000), testCase.expected);
    });
  });
});
