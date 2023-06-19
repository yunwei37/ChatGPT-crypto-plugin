// lib/sha256.ts
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';

export function sha256CryptoJS(input: string, input_format: string, output_format: string): string {
  // Convert input to WordArray format for crypto-js
  let wordArrayInput;
  switch (input_format) {
    case 'hex':
      wordArrayInput = Hex.parse(input);
      break;
    case 'Base64':
      wordArrayInput = Base64.parse(input);
      break;
    case 'utf-8':
    default:
      wordArrayInput = Utf8.parse(input);
      break;
  }

  const hash = sha256(wordArrayInput);
  
  // Convert hash to desired output format
  let output;
  switch (output_format) {
    case 'hex':
      output = hash.toString(Hex);
      break;
    case 'Base64':
      output = hash.toString(Base64);
      break;
    case 'utf-8':
    default:
      output = hash.toString(Utf8);
      break;
  }

  return output;
}
