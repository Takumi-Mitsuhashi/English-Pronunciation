import styles from "./gamepage.module.css";
import Header from "../components/Header";
import Countdown from "../components/Countdown";
import { words } from "../Wordlist";
import { useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Gamepage() {
     const navigate = useNavigate();

    const audioRef = useRef(null);
    const randomNumbers = useMemo(
        () => Array.from({ length: 200 }, () => Math.floor(Math.random() * 495)),
        []
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [timeUp, setTimeUp] = useState(false);

    const current = words[randomNumbers[currentIndex]];

    const handleSubmit = () => {
        if (!current) return;

        const correct = 
            input.trim().toLowerCase() === current.word?.toLowerCase();

        // setIsAnswered(true);

        setResults(prev => [
            ...prev,
          {
            id: "game",
            word1: current.word,
            ipa: current.ipa,
            audio1: current.audio,
            yourAnswer1: input,
            correct,
          }
        ]);

        setInput("");
        setCurrentIndex((prev) => prev + 1);
    };

    const handleTimeUp = useCallback(() => {
        setTimeUp(true); // ✅ タイマー終了時に実行
    }, []);

    const handleFinish = () => {
        navigate("/Gameresult", { state: { results } });
    };

    return (
        <>
          {/* <Header /> */}
          <Countdown onTimeUp={handleTimeUp} />
          <div className={styles.parentContainer}>
          <h1 className={styles.word}>
            {timeUp ? "終了" : current?.ipa || ""}
          </h1>

          <div className={styles.inputContainer}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={timeUp} // ✅ 入力欄を無効化
            />
          </div>

          <div className={styles.submitContainer}>
            {!timeUp ? (
            <button onClick={handleSubmit} className={styles.submitbtn}>
                <strong>回答</strong>
            </button>
            ) : (
            <button
              onClick={handleFinish}
              className={styles.finishbtn}>
                <strong>結果へ</strong>
            </button>
            )}
          </div>
          </div>
        </>
    );
}