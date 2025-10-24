// Frontend/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name = "匿名", email = "未記入", message, subject = "不明" } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "内容を入力してください" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,  // Vercel 環境変数
      pass: process.env.GMAIL_PASS,  // Gmail アプリパスワード
    },
  });

  // メール本文フォーマット
    const mailBody = `
  【名前】 ${name}
【Email】 ${email}
【件名】 ${subject}
【内容】
  ${message}
    `.trim();

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `【お問い合わせ】${subject} - ${name}`,
      text: mailBody,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    res.status(500).json({ success: false, message: "メール送信に失敗しました" });
  }
}
