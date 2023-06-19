// lib/sha1.ts
import sha1 from 'crypto-js/sha1';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcSha1(input: string, input_format: string, output_format: string): string {
  const wordArrayInput = fromInputFormat(input, input_format);
  const sha1Digest = sha1(wordArrayInput);
  return toOutputFormat(sha1Digest, output_format);
}
