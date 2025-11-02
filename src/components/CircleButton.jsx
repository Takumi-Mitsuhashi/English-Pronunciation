import styles from "./CircleButton.module.css";
import { useNavigate } from "react-router-dom";
import leaf from "../assets/icons/leaf_purple.svg";
import leaves from "../assets/icons/leaves_purple.svg";
import tree from "../assets/icons/tree_purple.svg";
import arrowright from "../assets/icons/arrow_right_purple.svg"


export default function CircleButton() {
  const navigate = useNavigate();

  return (
    <div className={styles.parentContainer}>
      {/* <div className={styles.containerA}>
        <button
          className={styles.circleButton}
          onClick={() => navigate("/Apage")}
        >
          <strong style={{color: "black"}}>単語</strong>
        </button>
      </div>
      <div className={styles.containerBandC}>
        <button
          className={styles.circleButton}
          onClick={() => navigate("/Bpage")}
        >
          <strong style={{color: "black"}}>フレーズ</strong>
        </button>
        <button
          className={styles.circleButton}
          onClick={() => navigate("/Cpage")}
        >
          <strong style={{color: "black"}}>文章</strong>
        </button>
      </div> */}
      <button
          className={styles.circleButton1}
          onClick={() => navigate("/Apage")}
        >
          <div className={styles.imgContainer}><img src={leaf}/></div>
          <strong style={{color: "black"}}>単語</strong>
          <img src={arrowright} className={styles.arrow}/>
      </button>
      <button
          className={styles.circleButton2}
          onClick={() => navigate("/Bpage")}
          disabled
        >
          <div className={styles.imgContainer}><img src={leaves}/></div>
          <strong style={{color: "black"}}>フレーズ</strong>
          <img src={arrowright} className={styles.arrow} />
      </button>
      <button
          className={styles.circleButton3}
          onClick={() => navigate("/Cpage")}
          disabled
        >
          <div className={styles.imgContainer}><img src={tree}/></div>
          <strong style={{color: "black"}}>文章</strong>
          <img src={arrowright} className={styles.arrow}/>
      </button>
    </div>
  );
}
