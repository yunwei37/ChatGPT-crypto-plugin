// lib/sha256.ts
import SHA256 from 'crypto-js/sha256';
import { fromInputFormat, toOutputFormat } from './encode';
import { EncryptedOutput } from '../interfaces/output';
import hmacSHA256 from 'crypto-js/hmac-sha256';

export function calcSha256(input: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const sha256Digest = SHA256(wordArrayInput);
  return { output: sha256Digest.toString(), output_format: 'hex' };
}

export function calcHmacSha256(input: string, key: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const hmacDigest = hmacSHA256(wordArrayInput, key);
  return { output: hmacDigest.toString(), output_format: 'hex' };
}