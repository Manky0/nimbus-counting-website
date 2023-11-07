// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: + 'NimbusVision <' + process.env.NODEMAILER_EMAIL + '>',
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(err);
        resolve(response);
      }
    });
  });
}

export async function POST(req, res){
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
        const data = await sendMail(
          subject,
          [email, process.env.NODEMAILER_EMAIL],
          message + ", obrigado pelo seu interesse! Este é um projeto feito por alunos de Engenharia da Computação da UFPA."
        );
        console.log(data)
        return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: 'Nimbus <nimbuscounting@gmail.com>',
//       to: [fromEmail],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Obrigado pelo seu interesse!</p>
//           <p>Entraremos em contato em breve</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
