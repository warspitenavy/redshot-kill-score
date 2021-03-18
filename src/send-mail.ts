import * as nodemailer from 'nodemailer';
import mailAccount from './mailAccount';

const transport = nodemailer.createTransport({
  host: 'smtp.yandex.com',
  port: 465,
  secure: true,
  auth: {
    user: mailAccount.address,
    pass: mailAccount.password,
  },
});

export const sendMail = (_to: string, mes: string) => {
  const data = {
    to: _to,
    from: mailAccount.address,
    subject: 'verify redshot-webpage',
    text: mes,
  };

  transport.sendMail(data);
};
