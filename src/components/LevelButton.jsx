import styles from "./LevelButton.module.css";
import { useNavigate } from "react-router-dom";
import arrowright from "../assets/icons/arrow_right_purple.svg";

export default function LevelButton({ levels = []}) {
  const navigate = useNavigate();

  return (
    <div className={styles.parentContainer}>
      {levels.map((level, index) => (
        <button
          key={index}
          className={styles.circleButton}
          onClick={() => navigate(level.path)}
        >
          {/* <div className={styles.checkmark}></div>
          <p style={{fontSize: "10px", color: "grey", position: "absolute", top: "60%", left: "7%"}}>進捗率 {}%</p> */}
          <span style={{ fontSize: "15px", color: "gray" }}>
            {level.label}
          </span>
          <div className={styles.chaptertitle}>
            { level.word.length >= 2 ? (
              <>
                <p style={{fontSize: "20px"}}>{level.word[0]}</p>
                <p style={{}}>vs</p>
                <p style={{fontSize: "20px"}}>{level.word[1]}</p>
                { level.word.length === 3 && (
                  <>
                  <p style={{}}>vs</p>
                  <p style={{fontSize: "20px"}}>{level.word[2]}</p>
                  </>
                )}
              </>
            ) : (
              <p style={{fontSize: "20px"}}>{level.word[0]}</p>
            )}
          </div>
          <img src={arrowright} className={styles.arrowright}/>
        </button>
      ))}
    </div>
  );
}
