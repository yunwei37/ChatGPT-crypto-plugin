// pages/api/encrypt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { calcSha256 } from '../../lib/sha256';
import { calcAes } from '../../lib/aes';
import { calcMd5 } from '../../lib/md5';
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
        output = calcAes(input, parameters.aes_key, input_format, output_format);
        break;
      case 'MD5':
        output = calcMd5(input, input_format, output_format);
        break;
      // Add cases for other methods...
      default:
        res.status(400).json({ error: `Unsupported method: ${method}` });
        return;
    }

    res.status(200).json({ output, encoding: output_format });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while processing your request: ${error.message}` });
  }
}
