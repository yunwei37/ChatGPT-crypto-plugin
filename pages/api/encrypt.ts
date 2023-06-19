// pages/api/encrypt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { calcSha256 } from '../../lib/sha256';
import { calcAesEncrypt } from '../../lib/aes';
import { calcMd5 } from '../../lib/md5';
import { calcHex } from '../../lib/hex';
import { calcBase64 } from '../../lib/base64';
import { calcUtf8 } from '../../lib/utf8';
import { calcHmacSha256 } from '../../lib/hmac-sha256';
import { calcPbkdf2 } from '../../lib/pbkdf2';
import { calcSha1 } from '../../lib/sha1';
import { calcHmacMd5 } from '../../lib/hmac-md5';
// import other methods...

interface EncryptRequestBody {
  method: string;
  input: string;
  input_format: string;
  output_format: string;
  parameters: any;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  const { method, input, input_format, output_format, parameters } = req.body as EncryptRequestBody;
  let output;
  
  try {
    switch (method) {
      case 'SHA256':
        output = calcSha256(input, input_format, output_format);
        break;
      case 'AES':
        output = calcAesEncrypt(input, parameters.aes_key, input_format, output_format);
        break;
      case 'MD5':
        output = calcMd5(input, input_format, output_format);
        break;
      case 'hex':
        output = calcHex(input, input_format, output_format);
        break;
      case 'Base64':
        output = calcBase64(input, input_format, output_format);
        break;
      case 'UTF8':
        output = calcUtf8(input, input_format, output_format);
        break;
      case 'HMAC-SHA256':
        output = calcHmacSha256(input, parameters.key, input_format, output_format);
        break;
      case 'PBKDF2':
        output = calcPbkdf2(input, parameters.salt, parameters.iterations, parameters.keySize, input_format, output_format);
        break;
      case 'SHA1':
        output = calcSha1(input, input_format, output_format);
        break;
      case 'HMAC-MD5':
        output = calcHmacMd5(input, parameters.key, input_format, output_format);
        break;
      default:
        res.status(400).json({ error: `Unsupported method: ${method}` });
        return;
    }
    res.status(200).json({ output, encoding: output_format });
  } catch (error: any) {
    res.status(500).json({ error: `Error during encryption: ${error.message}` });
  }
}
