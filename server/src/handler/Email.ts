import { Attachment } from "nodemailer/lib/mailer";
import nodemailer, { Transporter } from "nodemailer";

import { env } from "../env";
import { EmailResponse } from "../types/email";

interface Send {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: Attachment[];
}

export default class Email {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.EMAIL_HOST,
      port: 465,
      secure: true,
      debug: env.NODE_ENV === "development",
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD,
      },
    });
  }

  public async send({
    from,
    to,
    subject,
    text,
    html,
    attachments,
  }: Send): Promise<EmailResponse> {
    const result = await this.transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments,
    });

    return result;
  }
}
