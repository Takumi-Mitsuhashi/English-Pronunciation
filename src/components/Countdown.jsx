import React, { useEffect, useState, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";

const Countdown60 = memo(function Countdown60({onTimeUp}) {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    setIsRunning(true);
  }, []); 

  useEffect(() => {
    if (!isRunning) return;

      const startTime = performance.now();
      const duration = 60000;

      const update = (now) => {
        const elapsed = now - startTime;
        const remaining = Math.max(0, duration - elapsed);
        const newSeconds = remaining / 1000;

        setSecondsLeft(newSeconds);

        if (remaining > 0) {
          animationRef.current = requestAnimationFrame(update);
        } else {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
          setIsRunning(false);
          onTimeUp?.(); // ✅ 時間切れを親に通知
        }
      };

      animationRef.current = requestAnimationFrame(update);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      };

  }, [isRunning, onTimeUp]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(Math.floor(secondsLeft) % 60).padStart(2, "0");
  const percent = (60 - secondsLeft) / 60 * 100;

  
  return (
    <div style={styles.container}>
      <div style={styles.progressContainer}>
        <div style={{ ...styles.progressBar, width: `${percent}%` }} />
      </div>
      
      <div style={styles.timer}>
        {minutes}:{seconds}
      </div>

      {/* {seconds === "00" && (
        <button onClick={() => navigate("/Gameresult")}>結果を見る</button>
      )} */}
    </div>
  );
});

const styles = {
  container: {
    maxWidth: "100vw",
    height: "100px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    textAlign: "center",
    fontFamily: "sans-serif",
    // border: "1px solid black"
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  timer: {
    fontSize: "18px",
    fontFamily: "monospace",
    marginBottom: "20px",
    background: "transparent",
    // border: "1px solid black",
  },
  progressContainer: {
    width: "100%",
    height: "8px",
    backgroundColor: "#eee",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressBar: {
    height: "100%",
    background: "linear-gradient(90deg, #b79df0, #d3c2f5)",
    transition: "width 0.3s ease",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  startBtn: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  pauseBtn: {
    backgroundColor: "#FFC107",
    color: "#000",
    border: "none", 
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  resetBtn: {
    backgroundColor: "#F44336",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  info: {
    fontSize: "14px",
    color: "#666",
  },
};

export default Countdown60;