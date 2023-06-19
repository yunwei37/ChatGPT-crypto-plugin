// lib/hmac-sha256.ts
import hmacSHA256 from 'crypto-js/hmac-sha256';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcHmacSha256(input: string, key: string, input_format: string, output_format: string): string {
  const wordArrayInput = fromInputFormat(input, input_format);
  const hmacDigest = hmacSHA256(wordArrayInput, key);
  return toOutputFormat(hmacDigest, output_format);
}
