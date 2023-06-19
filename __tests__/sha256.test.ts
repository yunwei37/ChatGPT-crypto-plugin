// lib/sha256.test.ts
import { sha256CryptoJS } from '../lib/sha256';

test('SHA256 with CryptoJS', () => {
  const input = 'Hello, world!';
  const expectedOutput = '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'; // pre-calculated hash of 'Hello, world!' in hex
  const actualOutput = sha256CryptoJS(input, 'utf-8', 'hex');
  expect(actualOutput).toBe(expectedOutput);
});