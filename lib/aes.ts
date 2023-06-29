// lib/aes.ts
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { EncryptedOutput } from '../interfaces/output';
import { fromInputFormat } from './encode';

export function calcAesEncrypt(input: string, key: string): EncryptedOutput {
  // Convert input and key to WordArray format for crypto-js
  console.log(input, key);
  const encrypted = AES.encrypt(input, key).toString();
  // Return encrypted result in Base64 format
  return { output: encrypted, output_format: "Base64" };
}

export function calcAesDecrypt(encrypted: string, key: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(encrypted, input_format);
  const Base64Str = wordArrayInput.toString(enc.Base64);
  // Convert encrypted and key to WordArray format for crypto-js
  const decrypted = AES.decrypt(Base64Str, key);
  // Return decrypted result
  return { output: decrypted.toString(enc.Utf8), output_format: "Unknown" };
}
