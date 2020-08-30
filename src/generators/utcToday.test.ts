import { deepStrictEqual as eq } from 'assert';
import { utcToday } from './utcToday';
import { useFakeTimers } from 'sinon';

describe('utcToday', function() {
  beforeEach(function() {
    useFakeTimers(1598745533319);
  });

  it('is set to an offset of 540 minutes', function() {
    eq(new Date().getTimezoneOffset(), -540);
  });

  it('returns today for UTC', function() {
    eq(utcToday(), {
      year: 2020,
      month: 8,
      day: 29,
    });
  });
});
