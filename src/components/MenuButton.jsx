import styles from "./menubutton.module.css";
import dropdown from "../assets/icons/arrow_dropdown.svg";

export default function MenuButton({ label, onClick }) {
  return (
    <div className={styles.btnContainer}>
        <button 
          onClick={onClick}
          className={styles.menubtn}
        >
          {label}
        <img src={dropdown} className={styles.dropdown}/>
        </button>
    </div>
  )
}