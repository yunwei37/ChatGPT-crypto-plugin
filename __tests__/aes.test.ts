import { calcAes } from '../lib/aes';

describe('calcAes', () => {
  it('should encrypt input using AES and return the result in the specified output format', () => {
    const input = 'hello world';
    const key = 'secret key';
    const input_format = 'utf-8';
    const output_format = 'hex';

    const result = calcAes(input, key, input_format, output_format);

    expect(result).toMatch(/^[0-9a-f]+$/i);
  });
});
