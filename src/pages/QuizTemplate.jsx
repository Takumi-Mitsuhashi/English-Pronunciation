import styles from "./quizpages.module.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom"; 
import { useState, useRef } from "react";
import play from "../assets/icons/play_music_icon.svg";
import pause from "../assets/pause_music_icon.png";

export default function QuizTemplate({ questions, parentPage = "Apage" }) {
  const navigate = useNavigate();
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [results, setResults] = useState([]);

  const current = questions[currentIndex];

  const handleWarning = () => {
    if (isVisible) { 
        setIsVisible(false);
    } else { setIsVisible(true);

    } 
  }

  const handlePlay = (audioRef, setIsPlaying, isPlaying) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSubmit = () => {
    const correct1 = input1.trim().toLowerCase() === current.answer1?.toLowerCase();
    const correct2 = input2.trim().toLowerCase() === current.answer2?.toLowerCase();
    const correct3 = input3.trim().toLowerCase() === current.answer3?.toLowerCase();
    const correct = correct1 && (current.answer2 ? correct2 : true) && (current.answer3 ? correct3 : true);
    setIsCorrect(correct);
    setIsAnswered(true);

    setResults(prev => [
      ...prev,
      {
        id: "quiz",
        word1: current.answer1,
        word2: current.answer2,
        word3: current.answer3,
        ipa1: current.ipa1,
        ipa2: current.ipa2,
        ipa3: current.ipa3,
        audio1: current.audio1,
        audio2: current.audio2,
        audio3: current.audio3,
        yourAnswer1: input1,
        yourAnswer2: input2,
        yourAnswer3: input3,
        correct
      }
    ]);
  };

  const handleNext = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setIsAnswered(false);
    setCurrentIndex(i => i + 1);
  };

  const handleFinish = () => {
    navigate("/Results", { state: { results, parentPage } });
  };

  return (
    <div className={styles.parentContainer}>
      <Header onClick={handleWarning} />

      {isVisible && (
        <div className={styles.warningContainerWrapper}>
          <div className={styles.warningContainer}>
            <p style={{fontWeight: "bold", fontSize: "18px", padding: "25px", margin: "0", textAlign: "center"}}>
                途中で終了しますか？
            </p>
            <div style={{display: "flex", justifyContent: "center", gap: "50px"}}>
              <button onClick={handleWarning} className={styles.cancelbtn}>キャンセル</button>
              <button onClick={() => navigate(`/${parentPage}`)} className={styles.finbtn}>終了</button>
            </div>
          </div>
        </div>
      )}

      {/* プログレスバー */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className={styles.h3}>音声を聞いて聞こえた単語を入力しよう！</h3>

      <div className={styles.container}>
        <p className={styles.question}>Q. {currentIndex + 1}</p>

        {/* word1 */}
        <div className={styles.inputContainer1}>
          <div className={styles.btnContainer1}>
            <button onClick={() => handlePlay(audioRef1, setIsPlaying1, isPlaying1)} className={styles.playButton}>
              <img src={isPlaying1 ? pause : play} alt="play"/>
            </button>
            <audio ref={audioRef1} src={current.audio1} onEnded={() => setIsPlaying1(false)} />
          </div>
          <input value={input1} onChange={(e) => setInput1(e.target.value)} />
        </div>

        {/* word2（存在する場合のみ）*/}
        {current.word2 && (
          <div className={styles.inputContainer2}>
            <div className={styles.btnContainer2}>
              <button onClick={() => handlePlay(audioRef2, setIsPlaying2, isPlaying2)} className={styles.playButton}>
                <img src={isPlaying2 ? pause : play} alt="play"/>
              </button>
              <audio ref={audioRef2} src={current.audio2} onEnded={() => setIsPlaying2(false)} />
            </div>
            <input value={input2} onChange={(e) => setInput2(e.target.value)} />
          </div>
        )}

        {/* word3（存在する場合のみ）*/}
        {current.word3 && (
          <div className={styles.inputContainer3}>
            <div className={styles.btnContainer3}>
              <button onClick={() => handlePlay(audioRef3, setIsPlaying3, isPlaying3)} className={styles.playButton}>
                <img src={isPlaying3 ? pause : play} alt="play"/>
              </button>
              <audio ref={audioRef3} src={current.audio3} onEnded={() => setIsPlaying3(false)} />
            </div>
            <input value={input3} onChange={(e) => setInput3(e.target.value)} />
          </div>
        )}
      </div>

      {/* 回答 or 判定 */}
      {!isAnswered ? (
        <div className={styles.submitContainer}>
          <button onClick={handleSubmit} className={styles.submitbtn}><strong>回答</strong></button>
        </div>
      ) : (
        <>
          <p className={styles.p} style={{ color: isCorrect ? "green" : "red" }}>
            {isCorrect ? "✅ 正解！" : `❌ ざんねん（正解は「${current.answer1}${current.answer2 ? "/" + current.answer2 : ""}${current.answer3 ? "/" + current.answer3 : ""}」）`}
          </p>
          {currentIndex < questions.length - 1 ? (
            <div className={styles.nextContainer}>
              <button onClick={handleNext} className={styles.nextbtn}><strong>次へ</strong></button>
            </div>
          ) : (
            <div className={styles.finishContainer}>
              <button onClick={handleFinish} className={styles.finishbtn}><strong>終了</strong></button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
