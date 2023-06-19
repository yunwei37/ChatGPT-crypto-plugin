// lib/hex.ts
import { Utf8, Hex } from 'crypto-js';

export function calcHex(input: string): string {
  // Convert input to WordArray format for crypto-js
  const wordArrayInput = Utf8.parse(input);
  
  // Convert WordArray to hex
  return Hex.stringify(wordArrayInput);
}
