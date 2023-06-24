import { fromInputFormat, toOutputFormat } from '../lib/encode';

describe('fromInputFormat', () => {
  it('should parse input in hex format', () => {
    const input = '48656C6C6F20576F726C64';
    const input_format = 'hex';

    const result = fromInputFormat(input, input_format);
    const str = toOutputFormat(result, 'utf-8');
    expect(str.toString()).toEqual('Hello World');
  });

  it('should parse input in Base64 format', () => {
    const input = 'SGVsbG8gV29ybGQ=';
    const input_format = 'Base64';

    const result = fromInputFormat(input, input_format);
    const str = toOutputFormat(result, 'utf-8');
    expect(str.toString()).toEqual('Hello World');
  });

  it('should parse input in utf-8 format by default', () => {
    const input = 'Hello World';

    const result = fromInputFormat(input, 'utf-8');
    const str = toOutputFormat(result, 'utf-8');
    expect(str.toString()).toEqual('Hello World');
  });
});

describe('toOutputFormat', () => {
  it('should convert hash to hex format', () => {
    const input = 'Hello World';
    const input_str = fromInputFormat(input, 'utf-8');
    const output_format = 'hex';

    const result = toOutputFormat(input_str, output_format);

    expect(result).toEqual('48656c6c6f20576f726c64');
  });

  it('should convert hash to Base64 format', () => {
    const input = 'Hello World';
    const input_str = fromInputFormat(input, 'utf-8');
    const output_format = 'Base64';

    const result = toOutputFormat(input_str, output_format);

    expect(result).toEqual('SGVsbG8gV29ybGQ=');
  });

  it('should convert hash to utf-8 format by default', () => {
    const input = 'Hello World';
    const input_str = fromInputFormat(input, 'utf-8')

    const result = toOutputFormat(input_str, 'utf-8');
    console.log(JSON.stringify(result));
    expect(result).toEqual('Hello World');
  });
});

import { calcBase64 } from '../lib/base64';

describe('calcBase64', () => {
  it('should convert input string to Base64 format', () => {
    const input = 'Hello, world!';
    const input_format = 'utf-8';
    const expectedOutput = {
      output: 'SGVsbG8sIHdvcmxkIQ==',
      output_format: 'Base64',
    };
    expect(calcBase64(input, input_format)).toEqual(expectedOutput);
  });
});

import { calcHex } from '../lib/hex';

describe('calcHex', () => {
  it('should convert input string to hex format', () => {
    const input = 'Hello, world!';
    const input_format = 'utf-8';
    const expectedOutput = {
      output: '48656c6c6f2c20776f726c6421',
      output_format: 'hex',
    };
    expect(calcHex(input, input_format)).toEqual(expectedOutput);
  });
});