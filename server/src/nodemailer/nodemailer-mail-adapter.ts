import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../adapters/mail-adapters";

const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "af96410f374029",
      pass: "c4c76baccbc5dc"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
       await transport.sendMail({
            from:'Equip Feedget <testesback.endvinicius@gmail.com>',
            to: 'Vinicius Souza <testesback.endvinicius@gmail.com>',
            subject,
            html:body,
        });
    };
}