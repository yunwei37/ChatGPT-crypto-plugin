import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';

// get the input format
export function fromInputFormat(input: string, input_format: string): any {
  switch (input_format) {
    case 'hex':
      return Hex.parse(input);
    case 'Base64':
      return Base64.parse(input);
    case 'utf-8':
      return Utf8.parse(input);
    default:
      throw new Error(`Unsupported input format ${input_format}`);
  }
}

// get the output format
export function toOutputFormat(hash: any, output_format: string): string {
    switch (output_format) {
        case 'hex':
        return hash.toString(Hex);
        case 'Base64':
        return hash.toString(Base64);
        case 'utf-8':
          return hash.toString(Utf8);
        default:
          throw new Error(`Unsupported output format ${output_format}`);
    }
}
