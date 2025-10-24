import { useNavigate, useLocation } from "react-router-dom";
import styles from "./gameresult.module.css";
import Resultlists from "../components/Resultlists";

export default function Gameresult() {
    const location = useLocation();
    const navigate = useNavigate();
    const { results } = location.state || {};

    const correctCount = results.filter((r) => r.correct).length;
    
    return (
        <div className={styles.parentContainer}>
        <div className={styles.scoreContainer}>
            <h2>あなたのスコア</h2>
            <p>
              {correctCount}問！
            </p>
        </div>
        <div className={styles.btnContainer}>
            <button 
              onClick={() => navigate("/")}
              className={styles.backhomebtn}
            >
                ホームへ戻る
            </button>
            <button
              onClick={() => navigate("/Game")}
              className={styles.retrybtn}
            >
                リトライする
            </button>
        </div>
        <ul className={styles.resultlists}>
            {results.map((r, index) => (
            <li key={index} className={styles.listeachitem}>
                <Resultlists index={index} r={r} />
            </li>
            ))}
        </ul>
        </div>
    )
}