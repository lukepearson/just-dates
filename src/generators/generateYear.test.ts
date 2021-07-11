import { deepStrictEqual as eq } from 'assert';
import { generateYear } from './generateYear';

describe('generateYear', function() {
  it('generates a full year', function() {
    eq(generateYear(2020).length, 366);
  });

  it('generates a full non-leap year', function() {
    eq(generateYear(2021).length, 365);
  });
});
