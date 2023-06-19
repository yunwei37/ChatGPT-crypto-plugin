// lib/aes.ts
import AES from 'crypto-js/aes';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcAes(input: string, key: string, input_format: string, output_format: string): string {
  // Convert input and key to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);
  const wordArrayKey = fromInputFormat(key, 'utf-8');

  const encrypted = AES.encrypt(wordArrayInput, wordArrayKey);
  
  // Convert encrypted result to desired output format
  return toOutputFormat(encrypted, output_format);
}
