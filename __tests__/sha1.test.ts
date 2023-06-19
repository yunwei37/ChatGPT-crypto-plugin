import { calcSha1 } from '../lib/sha1';

describe('calcSha1', () => {
  it('should calculate SHA-1 hash of input in hex format and return result in hex format', () => {
    const input = '48656C6C6F20576F726C64';
    const input_format = 'hex';
    const output_format = 'hex';

    const result = calcSha1(input, input_format, output_format);

    expect(result).toEqual('0a4d55a8d778e5022fab701977c5d840bbc486d0');
  });

  it('should calculate SHA-1 hash of input in Base64 format and return result in Base64 format', () => {
    const input = 'SGVsbG8gV29ybGQ=';
    const input_format = 'Base64';
    const output_format = 'Base64';

    const result = calcSha1(input, input_format, output_format);

    expect(result).toEqual('Ck1VqNd45QIvq3AZd8XYQLvEhtA=');
  });

  it('should calculate SHA-1 hash of input in utf-8 format by default and return result in hex format by default', () => {
    const input = 'Hello World';

    const result = calcSha1(input, 'utf-8', 'hex');

    expect(result).toEqual('0a4d55a8d778e5022fab701977c5d840bbc486d0');
  });
});