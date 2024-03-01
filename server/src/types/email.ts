export interface Envelope {
  from: string;
  to: Array<string>;
}

export interface EmailResponse {
  accepted: Array<string>;
  rejected: Array<string>;
  ehlo: Array<string>;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
