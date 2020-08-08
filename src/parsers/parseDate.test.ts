import { deepEqual as eq } from 'assert';
import { parseDate } from './parseDate';

describe('ParseDate', function() {
  const testCases = [
    {
      input: new Date('1212-12-12T00:00:00.000Z'),
      expected: { year: 1212, month: 12, day: 12 },
    },
    {
      input: new Date('2020-01-01T00:00:00.000Z'),
      expected: { year: 2020, month: 1, day: 1 },
    },
  ];

  testCases.forEach((testCase) => {
    it(`creates a date object from a native date for ${Object.values(testCase.expected).join(
      '-'
    )}`, function() {
      const date = parseDate(testCase.input);
      eq(date, testCase.expected);
    });
  });
});
