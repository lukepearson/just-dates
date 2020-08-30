import { deepStrictEqual as eq } from 'assert';
import { localToday } from './localToday';
import { useFakeTimers } from 'sinon';

describe('localToday', function() {
  beforeEach(function() {
    useFakeTimers(1598745533319);
  });

  it('is set to an offset of 540 minutes', function() {
    eq(new Date().getTimezoneOffset(), -540);
  });

  it('returns today for the current timezone', function() {
    eq(localToday(), {
      year: 2020,
      month: 8,
      day: 30,
    });
  });
});
