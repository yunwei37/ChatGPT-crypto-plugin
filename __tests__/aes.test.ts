import { calcAesEncrypt, calcAesDecrypt } from '../lib/aes';
import CryptoJS from 'crypto-js';

describe('AES encryption and decryption', () => {
  it('should encrypt and then decrypt the input to get back the original string', () => {
    const input = 'hello world';

    // Generate a 256-bit AES key
    const keyWordArray = CryptoJS.lib.WordArray.random(256 / 8);
    const key = keyWordArray.toString(CryptoJS.enc.Hex);
    console.log('key ', key);
    const input_format = 'utf-8';
    const output_format = 'hex';

    const encrypted = calcAesEncrypt(input, key, input_format, output_format);
    console.log('encrypted ', encrypted);
    const decrypted = calcAesDecrypt(encrypted, key, output_format, input_format);

    expect(decrypted).toEqual(input);
  });

  it("test basic aes encrypt", () => {
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    expect(originalText).toEqual("my message");
  });
});

describe('calcAesEncrypt', () => {
  it('should encrypt input using AES and return result in Base64 format', () => {
    const input = 'my message';
    const key = 'secret key 123';
    const input_format = 'utf-8';
    const output_format = 'Base64';

    const result = calcAesEncrypt(input, key, input_format, output_format);

    expect(result)
  });
});

describe('calcAesDecrypt', () => {
  it('should decrypt input using AES and return result in utf-8 format', () => {
    const encrypted = 'U2FsdGVkX1+KscgEsaQMmSRRTqyIHVXnMs4J6zsWvBc=';
    const key = 'secret key 123';
    const input_format = 'Base64';
    const output_format = 'utf-8';

    const result = calcAesDecrypt(encrypted, key, input_format, output_format);

    expect(result).toEqual('my message');
  });
});