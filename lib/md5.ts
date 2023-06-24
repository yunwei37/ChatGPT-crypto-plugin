// lib/md5.ts
import MD5 from 'crypto-js/md5';
import { fromInputFormat, toOutputFormat } from './encode';
import { EncryptedOutput } from '../interfaces/output';
import { enc } from 'crypto-js';
import hmacMD5 from 'crypto-js/hmac-md5';


export function calcMd5(input: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const md5Digest = MD5(wordArrayInput);
  return { output: md5Digest.toString(enc.Hex), output_format: "hex" };
}
export function calcHmacMd5(input: string, key: string, input_format: string): EncryptedOutput {
  const wordArrayInput = fromInputFormat(input, input_format);
  const hmacDigest = hmacMD5(wordArrayInput, key);
  return { output: hmacDigest.toString(enc.Hex), output_format: "hex" };
}