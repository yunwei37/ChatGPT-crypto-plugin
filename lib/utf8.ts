// lib/utf8.ts
import { fromInputFormat, toOutputFormat } from './encode';

export function calcUtf8(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);
  
  // Convert UTF8 result to desired output format
  return toOutputFormat(wordArrayInput, 'utf-8');
}
