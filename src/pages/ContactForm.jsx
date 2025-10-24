import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./contactform.module.css";
import Header from "../components/Header";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("送信中...");

    try {
      const res = await fetch("https://english-pronunciation-ca-70eae.cloudfunctions.net/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus(result.success ? "✅ 送信完了しました！" : "❌ 送信に失敗しました。");
      if(result.success) setFormData({ name: "", email: "", message: "" }); // フォームリセット
    } catch (err) {
      console.error(err);
      setStatus("❌ 通信エラーが発生しました。");
    }
  };

  return (
    <>
      <Header onClick={() => navigate("/")} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>お問い合わせ</h2>
        <input name="name" placeholder="お名前" onChange={handleChange} value={formData.name} required />
        <input name="email" placeholder="メールアドレス" onChange={handleChange} value={formData.email} required />
        <textarea name="message" placeholder="メッセージ" onChange={handleChange} value={formData.message} required />
        <button type="submit">送信</button>
        <p>{status}</p>
      </form>
    </>
  );
}
