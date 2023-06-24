import { calcMd5, calcHmacMd5 } from '../lib/md5';

describe('calcMd5', () => {
  it('should calculate MD5 hash of input string and return the result in hex format', () => {
    const input = 'Hello, world!';
    const input_format = 'utf-8';
    const output_format = 'hex';
    const expectedOutput = {
      output: '6cd3556deb0da54bca060b4c39479839',
      output_format: 'hex',
    };
    expect(calcMd5(input, input_format)).toEqual(expectedOutput);
  });
});

describe('calcHmacMd5', () => {
  it('should calculate HMAC-MD5 hash of input string and return the result in hex format', () => {
    const input = 'Hello, world!';
    const key = 'secret key';
    const input_format = 'utf-8';
    const output_format = 'hex';
    const expectedOutput = {
      output: '422e5acff282741439a8928fd2cebeba',
      output_format: 'hex',
    };
    expect(calcHmacMd5(input, key, input_format)).toEqual(expectedOutput);
  });
});
