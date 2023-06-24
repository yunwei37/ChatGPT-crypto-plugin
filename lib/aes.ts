// lib/aes.ts
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { EncryptedOutput } from '../interfaces/output';

export function calcAesEncrypt(input: string, key: string): EncryptedOutput {
  // Convert input and key to WordArray format for crypto-js
  console.log(input, key);
  const encrypted = AES.encrypt(input, key).toString();
  // Return encrypted result in Base64 format
  return { output: encrypted, output_format: "Base64" };
}

export function calcAesDecrypt(encrypted: string, key: string): EncryptedOutput {
  // Convert encrypted and key to WordArray format for crypto-js
  const decrypted = AES.decrypt(encrypted, key);
  // Return decrypted result
  return { output: decrypted.toString(enc.Utf8), output_format: "Unknown" };
}
