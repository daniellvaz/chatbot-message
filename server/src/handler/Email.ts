import { Attachment } from "nodemailer/lib/mailer";
import nodemailer, { Transporter } from "nodemailer";

import { env } from "../env";

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
      host: env.EMAIL_USER,
      port: Number(env.EMAIL_PORT),
      secure: true,
      debug: true,
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD,
      },
    });
  }

  public async send({ from, to, subject, text, html, attachments }: Send) {
    const result = await this.transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments,
    });

    console.log(result);
  }
}
