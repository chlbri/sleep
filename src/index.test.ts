/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import extendVitest from './augment';
import sleep from './index';

const vi = extendVitest({
  async advanceAsync(this, ms: number) {
    await Promise.resolve();
    return this.advanceTimersByTime(ms);
  },
});

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

describe('Acceptance', () => {
  test('Function exists', () => {
    expect(sleep).toBeInstanceOf(Function);
  });

  test('Return type is promise', () => {
    expect(sleep(2)).toBeInstanceOf(Promise);
  });
});

describe('Workflow', () => {
  // #region Prepare tests
  const TIME = 200;
  let actual = 0;

  beforeAll(() => {
    sleep(TIME).then(() => (actual += 100));
    sleep(TIME * 2).then(() => (actual += 100));
  });
  // #endregion

  test('Test function should not return value before TIME', () => {
    expect(actual).toBe(0);
  });

  test('Advance time by "TIME"', () => vi.advanceAsync(TIME));

  test('Test function should return "100" after TIME', () => {
    expect(actual).toBe(100);
  });

  test('Advance time by "TIME"', () => vi.advanceAsync(TIME));

  test('Test function should return "200" after TIME', () => {
    expect(actual).toBe(200);
  });
});
