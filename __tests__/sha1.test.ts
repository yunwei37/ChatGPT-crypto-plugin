import { calcSha1 } from '../lib/sha1';

describe('calcSha1', () => {
  it('should calculate SHA1 hash of input string and return the result in hex format', () => {
    const input = 'Hello, world!';
    const input_format = 'utf-8';
    const output_format = 'hex';
    const expectedOutput = {
      output: '943a702d06f34599aee1f8da8ef9f7296031d699',
      output_format: 'hex',
    };
    expect(calcSha1(input, input_format)).toEqual(expectedOutput);
  });
});