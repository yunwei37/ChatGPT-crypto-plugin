// lib/hex.ts
import { fromInputFormat, toOutputFormat } from './encode';

export function calcHex(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  // Convert hex result to desired output format
  return toOutputFormat(wordArrayInput, 'hex');
}
