// import LevelButton from "../components/LevelButton";
import styles from "./pages.module.css";
import { useNavigate } from "react-router-dom";

export default function Cpage() {
  const navigate = useNavigate();

  return (
    <div className={styles.parentContainer}>
      <h1>Page C</h1>

      {/* <LevelButton /> */}

      <button onClick={() => navigate("/")}>戻る</button>
    </div>
  );
}
