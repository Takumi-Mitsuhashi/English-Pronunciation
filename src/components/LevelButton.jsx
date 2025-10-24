import styles from "./LevelButton.module.css";
import { useNavigate } from "react-router-dom";
import arrowright from "../assets/icons/arrow_right_purple.svg";

export default function LevelButton({ levels = [] }) {
  const navigate = useNavigate();

  return (
    <div className={styles.parentContainer}>
      {levels.map((level, index) => (
        <button
          key={index}
          className={styles.circleButton}
          onClick={() => navigate(level.path)}
        >
          <div className={styles.checkmark}></div>
          <p style={{fontSize: "10px", color: "grey", position: "absolute", top: "60%", left: "7%"}}>進捗率 {}%</p>
          <span style={{ fontSize: "18px", color: "black" }}>
            {level.label}
          </span>
          <img src={arrowright} className={styles.arrowright}/>
        </button>
      ))}
    </div>
  );
}
