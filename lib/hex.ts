// lib/hex.ts
import { fromInputFormat, toOutputFormat } from './encode';
import { EncryptedOutput } from '../interfaces/output';

export function calcHex(input: string, input_format: string): EncryptedOutput {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  // Convert hex result to desired output format
  return { output: wordArrayInput.toString(), output_format: 'hex' };
}
