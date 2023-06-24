// lib/sha256.test.ts
import { calcSha256 } from '../lib/sha256';

test('SHA256 with CryptoJS', () => {
  const input = 'Hello, world!';
  const actualOutput = calcSha256(input, 'utf-8');
  const expectedOutput = {
    output: '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3',
    output_format: 'hex',
  };
  expect(actualOutput).toEqual(expectedOutput);
});

import { calcHmacSha256 } from '../lib/hmac-sha256';

describe('calcHmacSha256', () => {
  it('should calculate HMAC-SHA256 hash of input string and return the result in hex format', () => {
    const input = 'Hello, world!';
    const key = 'secret key';
    const input_format = 'utf-8';
    const output_format = 'hex';
    const expectedOutput = {
      output: '87bccb2d56eb32c5fd1f6fdcde18e289b46152d04ce52649b681d6bcebe8253f',
      output_format: 'hex',
    };
    expect(calcHmacSha256(input, key, input_format)).toEqual(expectedOutput);
  });
});