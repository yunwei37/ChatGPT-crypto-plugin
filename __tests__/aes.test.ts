import { calcAesEncrypt, calcAesDecrypt } from '../lib/aes';
import CryptoJS from 'crypto-js';

describe('AES encryption and decryption', () => {
  it('should encrypt and then decrypt the input to get back the original string', () => {
    const input = 'hello world';

    // Generate a 256-bit AES key
    const keyWordArray = CryptoJS.lib.WordArray.random(256/8);
    const key = keyWordArray.toString(CryptoJS.enc.Hex);
    console.log('key ', key);
    const input_format = 'utf-8';
    const output_format = 'hex';

    const encrypted = calcAesEncrypt(input, key, input_format, output_format);
    const decrypted = calcAesDecrypt(encrypted, key, output_format, input_format);

    expect(decrypted).toEqual(input);
  });
});
