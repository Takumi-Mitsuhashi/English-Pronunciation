import functions from "firebase-functions";
import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());


const gmailUser = functions.config().gmail.user;
const gmailPass = functions.config().gmail.pass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass
  }
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,               // 送信元（フォーム入力者）
      to: gmailUser,                 // 自分の Gmail
      subject: `お問い合わせ: ${name}`,
      text: `送信者: ${name} <${email}>\n\n${message}`
    });
    res.status(200).send({ success: true, message: "送信完了しました" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "送信に失敗しました" });
  }
});

// Express を Firebase Function としてエクスポート
export const api = functions.https.onRequest(app);
