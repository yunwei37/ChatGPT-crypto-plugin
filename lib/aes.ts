// lib/aes.ts
import AES from 'crypto-js/aes';
import { fromInputFormat, toOutputFormat } from './encode';
import { enc } from 'crypto-js';

export function calcAesEncrypt(input: string, key: string, input_format: string, output_format: string): string {
  // Convert input and key to WordArray format for crypto-js
  const wordArrayInput = fromInputFormat(input, input_format);
  const encrypted = AES.encrypt(wordArrayInput, key);
  const data = fromInputFormat(encrypted.toString(), "Base64");
  // Convert encrypted result to desired output format
  return toOutputFormat(data, output_format);
}

export function calcAesDecrypt(encrypted: string, key: string, input_format: string, output_format: string): string {
  // Convert encrypted and key to WordArray format for crypto-js
  const wordArrayEncrypted = fromInputFormat(encrypted, input_format);
  const data = toOutputFormat(wordArrayEncrypted, "Base64");
  const decrypted = AES.decrypt(data, key);
  const res = fromInputFormat(decrypted.toString(enc.Utf8), "utf-8");
  // Convert decrypted result to desired output format
  return toOutputFormat(res, output_format);
}