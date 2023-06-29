// __tests__/aes.test.ts
import { calcAesEncrypt, calcAesDecrypt } from '../lib/aes';

describe('calcAesEncrypt', () => {
  function testCalcAesEncrypt(input: string, key: string) {
    const encrypted = calcAesEncrypt(input, key);
    const output = calcAesDecrypt(encrypted.output, key, encrypted.output_format);
    expect(output).toEqual({ output: input, output_format: 'Unknown' });
  }

  it('should encrypt and decrypt empty input string with AES', () => {
    testCalcAesEncrypt('', 'secret key');
  });

  it('should encrypt and decrypt input string with special characters with AES', () => {
    testCalcAesEncrypt('Hello, world!@#$%^&*()', 'secret key');
  });

  it('should encrypt and decrypt input string with non-ASCII characters with AES', () => {
    testCalcAesEncrypt('こんにちは、世界！', '秘密の鍵');
  });
});

describe('calcAesDecrypt', () => {
  it('should decrypt empty input string with AES and return the result in utf-8 format', () => {
    const encrypted = 'U2FsdGVkX19VfrvB50C/OemNyFrnzqBLTzGnto1duqc=';
    const key = 'secret key';
    const expectedOutput = {
      output: '',
      output_format: 'Unknown',
    };
    expect(calcAesDecrypt(encrypted, key, "Base64")).toEqual(expectedOutput);
  });

  it('should decrypt input string with special characters with AES and return the result in utf-8 format', () => {
    const encrypted = 'U2FsdGVkX1+vyMhFm8fv0kf6hBxSKfUCZqoDMUPak37nJyiPKAgvC9yq6S/meNYq';
    const key = 'secret key';
    const expectedOutput = {
      output: 'Hello, world!@#$%^`',
      output_format: 'Unknown',
    };
    expect(calcAesDecrypt(encrypted, key, "Base64")).toEqual(expectedOutput);
  });
});