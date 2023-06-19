// lib/base64.ts
import { fromInputFormat, toOutputFormat } from './encode';

export function calcBase64(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  // Convert hex result to desired output format
  return toOutputFormat(wordArrayInput, 'Base64');
}
