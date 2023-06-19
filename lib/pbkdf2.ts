// lib/pbkdf2.ts
import pbkdf2 from 'crypto-js/pbkdf2';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcPbkdf2(input: string, salt: string, iterations: number, keySize: number, input_format: string, output_format: string): string {
  const wordArrayInput = fromInputFormat(input, input_format);
  const pbkdf2Digest = pbkdf2(wordArrayInput, salt, { keySize, iterations });
  return toOutputFormat(pbkdf2Digest, output_format);
}
