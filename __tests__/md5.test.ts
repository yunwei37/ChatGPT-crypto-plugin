import { calcMd5 } from '../lib/md5';

describe('calcMd5', () => {
  it('should calculate the MD5 hash of the input and return the result in the specified output format', () => {
    const input = 'hello world';
    const input_format = 'utf-8';
    const output_format = 'hex';

    const result = calcMd5(input, input_format, output_format);

    expect(result).toEqual("5eb63bbbe01eeed093cb22bb8f5acdc3")
  });
});