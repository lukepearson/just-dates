import { equal as eq } from 'assert';
import { getDaysInMonth } from './getDaysInMonth';

describe('getDaysInMonth', function() {
  it('returns 30 days for september, april, june, november', function() {
    eq(getDaysInMonth({ month: 4, year: 2000 }), 30);
    eq(getDaysInMonth({ month: 6, year: 2000 }), 30);
    eq(getDaysInMonth({ month: 9, year: 2000 }), 30);
    eq(getDaysInMonth({ month: 11, year: 2000 }), 30);
  });

  it('returns 31 days for jan, march, may, july, august, october, december', function() {
    eq(getDaysInMonth({ month: 1, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 3, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 5, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 7, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 8, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 10, year: 2000 }), 31);
    eq(getDaysInMonth({ month: 12, year: 2000 }), 31);
  });

  it('returns 28 days for non leap-year februaries', function() {
    eq(getDaysInMonth({ month: 2, year: 2001 }), 28, '2001');
    eq(getDaysInMonth({ month: 2, year: 2002 }), 28, '2002');
    eq(getDaysInMonth({ month: 2, year: 2003 }), 28, '2003');
  });

  it('returns 29 days for leap-year februaries', function() {
    eq(getDaysInMonth({ month: 2, year: 2000 }), 29);
    eq(getDaysInMonth({ month: 2, year: 2004 }), 29);
    eq(getDaysInMonth({ month: 2, year: 8 }), 29);
    eq(getDaysInMonth({ month: 2, year: 2024 }), 29);
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
      eq(getDaysInMonth({ month: testCase.input, year: 2000 }), testCase.expected);
    });
  });
});
