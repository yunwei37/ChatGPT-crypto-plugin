// lib/sha1.ts
import SHA1 from 'crypto-js/sha1';
import { fromInputFormat, toOutputFormat } from './encode';
import { EncryptedOutput } from '../interfaces/output';

export function calcSha1(input: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const sha1Digest = SHA1(wordArrayInput);
  return { output: sha1Digest.toString(), output_format: 'hex' };
}