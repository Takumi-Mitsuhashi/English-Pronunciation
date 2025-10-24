import { useRef, useState } from "react";
import play from "../assets/icons/play_music_icon.svg";
import pause from "../assets/pause_music_icon.png";
import styles from "../pages/results.module.css";

export default function QuestionItem({ index, r }) {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  const handlePlay1 = () => {
    const audio = audioRef1.current;
    if (!audio) return;

    if (isPlaying1) {
      audio.pause();
      setIsPlaying1(false);
    } else {
      audio.play();
      setIsPlaying1(true);
      audio.onended = () => setIsPlaying1(false);
    }
  };

  const handlePlay2 = () => {
    const audio = audioRef2.current;
    if (!audio) return;

    if (isPlaying2) {
      audio.pause();
      setIsPlaying2(false);
    } else {
      audio.play();
      setIsPlaying2(true);
      audio.onended = () => setIsPlaying2(false);
    }
  };

  const handlePlay3 = () => {
    const audio = audioRef3.current;
    if (!audio) return;

    if (isPlaying3) {
      audio.pause();
      setIsPlaying3(false);
    } else {
      audio.play();
      setIsPlaying3(true);
      audio.onended = () => setIsPlaying3(false);
    }
  };

  return (
    <div className={styles.listContainer}>
      <div>
        <span style={{ marginBottom: "20px", display: "inline-block", fontSize: "20px" }}>
          {r.id === "quiz" ? (
            <strong>Q.{index + 1}</strong>
          ) : (
            <strong>{index + 1}.</strong>
          )}
        </span>
        {r.word2 ? (
        <>
          <div className={styles.correctContainer1}>
            <div>
              <button onClick={handlePlay1} className={styles.playButton}>
                <img src={isPlaying1 ? pause : play} alt="play" />
              </button>
              <audio ref={audioRef1} src={r.audio1} />
            </div>
            <span style={{ fontSize: "22px" }}>
              <strong>{r.word1}　{r.ipa1 ? r.ipa1 : null}</strong>
            </span>
          </div>

          <div className={styles.correctContainer2}>
            <div>
              <button onClick={handlePlay2} className={styles.playButton}>
                <img src={isPlaying2 ? pause : play} alt="play" />
              </button>
              <audio ref={audioRef2} src={r.audio2} />
            </div>
            <span style={{ fontSize: "22px" }}>
              <strong>{r.word2}　{r.ipa2 ? r.ipa2 : null}</strong>
            </span>
          </div>

          {r.word3 && (
            <div className={styles.correctContainer3}>
              <div>
                <button onClick={handlePlay3} className={styles.playButton}>
                  <img src={isPlaying3 ? pause : play} alt="play" />
                </button>
                <audio ref={audioRef3} src={r.audio3} />
              </div>
              <span style={{ fontSize: "22px" }}>
                <strong>{r.word3}　{r.ipa3 ? r.ipa3 : null}</strong>
              </span>
            </div>
          )}

          <span
            style={{
              fontSize: "18px",
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            あなたの答え： {r.yourAnswer1} / {r.yourAnswer2}{r.word3 ? ` / ${r.yourAnswer3}` : ""}
          </span>
        </>
        ) : (
        <>
          <div className={styles.correctContainer1}>
            <div>
              <button onClick={handlePlay1} className={styles.playButton}>
                <img src={isPlaying1 ? pause : play} alt="play" />
              </button>
              <audio ref={audioRef1} src={r.audio1} />
            </div>
            <span style={{ fontSize: "22px" }}>
              <strong>{r.word1}　{r.ipa ? r.ipa : null}{r.ipa1 ? r.ipa1 : null}</strong>
            </span>
          </div>
          <span
            style={{
              fontSize: "18px",
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            あなたの答え： {r.yourAnswer1}
          </span>
        </>  
        )
        }
      </div>
      <div className={styles.results}>{r.correct ? "〇" : "✖"}</div>
    </div>
  );
}
