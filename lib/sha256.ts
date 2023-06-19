// lib/sha256.ts
import sha256 from 'crypto-js/sha256';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcSha256(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  const hash = sha256(wordArrayInput);
  
  // Convert hash to desired output format0
  return toOutputFormat(hash, output_format);
}
