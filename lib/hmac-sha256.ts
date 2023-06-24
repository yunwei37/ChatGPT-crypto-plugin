// lib/hmac-sha256.ts
import hmacSHA256 from 'crypto-js/hmac-sha256';
import { fromInputFormat, toOutputFormat } from './encode';
import { EncryptedOutput } from '../interfaces/output';

export function calcHmacSha256(input: string, key: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const hmacDigest = hmacSHA256(wordArrayInput, key);
  return { output: hmacDigest.toString(), output_format: 'hex' };
}