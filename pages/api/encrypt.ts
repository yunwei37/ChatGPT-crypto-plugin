// pages/api/encrypt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sha256 } from '../../lib/sha256';
// import other methods...

interface EncryptRequestBody {
  method: string;
  input: string;
  input_format: string;
  output_format: string;
  parameters: any;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { method, input, input_format, output_format, parameters } = req.body as EncryptRequestBody;

    let output;
    switch (method) {
      case 'SHA256':
        output = sha256(input, input_format, output_format);
        break;
      // Add cases for other methods...
      default:
        res.status(400).json({ error: `Unsupported method: ${method}` });
        return;
    }

    res.status(200).json({ output, encoding: output_format });
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
