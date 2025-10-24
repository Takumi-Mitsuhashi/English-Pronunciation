import styles from "./results.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Resultlists from "../components/Resultlists";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, parentPage } = location.state || {};

  const correctCount = results.filter((r) => r.correct).length;

  return (
    <div className={styles.parentContainer}>
      <div className={styles.scoreContainer}>
        <h2>あなたのスコア</h2>
        <p>
          {correctCount} / {results.length}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => navigate("/")} className={styles.backhomebtn}>
          <strong>ホームに戻る</strong>
        </button>
        <button onClick={() => navigate(`/${parentPage}`)} className={styles.selectlevelbtn}>
          <strong>選択画面に戻る</strong>
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
  );
}
