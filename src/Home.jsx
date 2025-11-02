import CircleButton from "./components/CircleButton";
import styles from "./home.module.css";
import game from "./assets/icons/game.svg";
import agent from "./assets/icons/support_agent_A260BF.svg";
import arrowright from "./assets/icons/keyboard_arrow_right_A260BF.svg";
import close from "./assets/icons/close_A260BF.svg";
import Bubble from "./components/Bubble";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleAgent = () => {
    if (!isVisible) {
      // 開くとき
      setIsVisible(true);
      requestAnimationFrame(() => setIsActive(true)); // 少し遅らせてアニメーションをトリガー
    } else {
      // 閉じるとき
      setIsActive(false);
      setTimeout(() => setIsVisible(false), 0); // transition時間に合わせて
    }
  };

  return (
    <>
      <div className={styles.parentContainer}>
        {!isVisible && (<CircleButton/>)}
        {/* <Bubble /> */}
        <div className={styles.btnContainer}>
          <button 
            className={styles.agentbtn}
            onClick={handleAgent}
          >
            <img src={agent} />
          </button>
          <button 
            className={styles.gamebtn}
            onClick={() => navigate("/game")}
          >
            <img src={game} />
          </button>
        </div>
      </div>
        {isVisible && (
          <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
        
          <div className={`${styles.listContainer} ${isActive ? styles.active : ""}`}>
            <button 
              className={`${styles.agentbtnnext} ${styles.btn1}`}
              onClick={() => navigate("/BeforeUse")}
            >
              はじめに
              <img src={arrowright} className={styles.arrowright}/>
            </button>
            <button
              className={`${styles.agentbtnnext} ${styles.btn2}`}
              onClick={() => navigate("/Manual")}
            >
              アプリの使い方
              <img src={arrowright} className={styles.arrowright}/>
            </button>
            <button 
              className={`${styles.agentbtnnext} ${styles.btn3}`}
              onClick={() => navigate("/ContactForm")}
            >
              お問い合わせ
              <img src={arrowright} className={styles.arrowright}/>
            </button>
          </div>
          <div className={styles.btnContainer}>
            <button 
              className={styles.agentbtn}
              onClick={handleAgent}
            >
              <img src={agent} />
            </button>
          </div>
        </div>
        )}
    </>
  )
}
