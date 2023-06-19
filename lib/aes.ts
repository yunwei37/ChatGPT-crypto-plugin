// lib/aes.ts
import AES from 'crypto-js/aes';
import { fromInputFormat, toOutputFormat } from './encode';
import { enc } from 'crypto-js';

export function calcAesEncrypt(input: string, key: string, input_format: string, output_format: string): string {
  // Convert input and key to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);

  const encrypted = AES.encrypt(wordArrayInput, key);
  
  // Convert encrypted result to desired output format
  return toOutputFormat(encrypted, output_format);
}

export function calcAesDecrypt(encrypted: string, key: string, input_format: string, output_format: string): string {
  // Convert encrypted and key to WordArray format for crypto-js
  const wordArrayEncrypted = fromInputFormat(encrypted, input_format);

  const decrypted = AES.decrypt(wordArrayEncrypted, key);
  
  // Convert decrypted result to desired output format
  return toOutputFormat(decrypted.toString(enc.Utf8), output_format);
}