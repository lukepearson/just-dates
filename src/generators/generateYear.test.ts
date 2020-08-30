import { deepStrictEqual as eq } from 'assert';
import { generateYear } from './generateYear';

describe('generateYear', function() {
  it('generates a full year', function() {
    eq(generateYear(2020).length, 366);
  });
});
