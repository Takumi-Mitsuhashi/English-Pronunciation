import { useNavigate } from "react-router-dom";
import arrowleft from "../assets/icons/arrow_left_purple.svg";
import styles from "./header.module.css";


export default function Header({onClick}) {

    return (
        <header>
            <button 
            onClick={onClick}
            className={styles.backbtn}
            >
            <img src={arrowleft} />
            </button>
        </header>
    )
}