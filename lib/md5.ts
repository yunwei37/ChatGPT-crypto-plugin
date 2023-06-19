// lib/md5.ts
import MD5 from 'crypto-js/md5';
import { fromInputFormat, toOutputFormat } from './encode';

export function calcMd5(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  const hash = MD5(wordArrayInput);
  
  // Convert hash to desired output format
  return toOutputFormat(hash, output_format);
}

