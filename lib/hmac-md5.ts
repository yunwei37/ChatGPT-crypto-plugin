// lib/hmac-md5.ts
import hmacMD5 from 'crypto-js/hmac-md5';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcHmacMd5(input: string, key: string, input_format: string, output_format: string): string {
  const wordArrayInput = fromInputFormat(input, input_format);
  const hmacDigest = hmacMD5(wordArrayInput, key);
  return toOutputFormat(hmacDigest, output_format);
}
