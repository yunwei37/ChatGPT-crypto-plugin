// pages/api/decrypt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { calcAesDecrypt } from '../../../lib/aes';

interface DecryptRequestBody {
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

    const { method } = req.query;

    try {
        let output;

        switch (method) {
            case 'aes':
                {
                    const { input, input_format, key } = req.body as DecryptRequestBody;
                    output = calcAesDecrypt(input, key, input_format);
                }
                break;
            default:
                res.status(400).json({ error: 'Invalid decryption method' });
                return;
        }

        res.status(200).json(output);
    } catch (error: any) {
        res.status(500).json({ error: `Error during decryption: ${error.message}` });
    }
}
