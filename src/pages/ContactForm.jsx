import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./contactform.module.css";
import Header from "../components/Header";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const [choice, setChoice] = useState("question");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("送信中...");

    try {
      const res = await fetch("/api/sendMail", {
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

  const getPlaceholder = () => {
    switch (choice) {
      case "question":
        return "少しでも気になったこと、疑問に思ったことがございましたらお気軽にご質問ください。";
      case "comment":
        return "アプリをご利用いただきありがとうございます。ご感想がございましたらお待ちしております。大変励みになります！";
      case "feedback":
        return "もっとこうして欲しいなど、改善点があればどしどしお待ちしております。";
      default:
        return "";
    }
  };

  return (
    <>
    <div className={styles.parentContainer}>
      <Header onClick={() => navigate("/")} />
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>お問い合わせ</h2>
        <div className={styles.labelContainer}>
          <div>必須</div>
          <p>お名前</p>
        </div>
        <input 
          className={styles.inputname}
          name="name"
          placeholder="山田　太郎"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <div className={styles.labelContainer}>
          <div>必須</div>
          <p>メールアドレス</p>
        </div>
        <input 
          className={styles.inputemail}
          name="email"
          placeholder="sample@english.com"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <div className={styles.labelContainer}>
          <div>必須</div>
          <p>内容</p>
        </div>
        <div className={styles.radiobtnContainer}>
        <label>
          <input 
            type="radio"
            name="category"
            value="question"
            checked={choice === "question"}
            onChange={(e) => setChoice(e.target.value)}
          />
          ご質問
        </label>
        <label>
          <input 
            type="radio"
            name="category"
            value="comment"
            checked={choice === "comment"}
            onChange={(e) => setChoice(e.target.value)}
          />
          ご感想
        </label>
        <label>
          <input 
            type="radio"
            name="category"
            value="feedback"
            checked={choice === "feedback"}
            onChange={(e) => setChoice(e.target.value)}
          />
          フィードバック
        </label>
        </div>
        <textarea
          name="message"
          placeholder={getPlaceholder()}
          onChange={handleChange}
          value={formData.message}
          required
        />
        <div className={styles.submitbtnContainer}>
          {status ? (<p>{status}</p>) : null}
        <button
          type="submit"
          className={styles.submitbtn}
        >
          送信
        </button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}
