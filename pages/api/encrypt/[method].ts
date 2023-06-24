// pages/api/encrypt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { calcSha256 } from '../../../lib/sha256';
import { calcAesDecrypt, calcAesEncrypt } from '../../../lib/aes';
import { calcMd5, calcHmacMd5 } from '../../../lib/md5';
import { calcHex } from '../../../lib/hex';
import { calcBase64 } from '../../../lib/base64';
import { calcUtf8 } from '../../../lib/utf8';
import { calcHmacSha256 } from '../../../lib/hmac-sha256';
import { calcSha1 } from '../../../lib/sha1';
// import other methods...

interface EncryptRequestBody {
    input: string;
    input_format: string;
}

interface EncryptRequestWithKey {
    input: string;
    input_format: string;
    key: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    let output;
    const { method } = req.query;

    try {
        switch (method) {
            case 'aes':
                {
                    const { input, input_format, key } = req.body as EncryptRequestWithKey;
                    output = calcAesEncrypt(input, key);
                }
                break;
            case 'hmac-sha256':
                {
                    const { input, input_format, key } = req.body as EncryptRequestWithKey;
                    output = calcHmacSha256(input, key, input_format);
                }
                break;
            case 'hmac-md5':
                {
                    const { input, input_format, key } = req.body as EncryptRequestWithKey;
                    output = calcHmacMd5(input, key, input_format);
                }
                break;
            case 'sha256':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcSha256(input, input_format);
                }
                break;
            case 'md5':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcMd5(input, input_format);
                }
                break;
            case 'hex':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcHex(input, input_format);
                }
                break;
            case 'base64':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcBase64(input, input_format);
                }
                break;
            case 'utf8':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcUtf8(input, input_format);
                }
                break;
            case 'sha1':
                {
                    const { input, input_format } = req.body as EncryptRequestBody;
                    output = calcSha1(input, input_format);
                }
                break;
            default:
                res.status(400).json({ error: 'Invalid encryption method' });
                return;
        }
        res.status(200).json(output);
    } catch (error: any) {
        res.status(500).json({ error: `Error during encryption: ${error.message}` });
    }
}
