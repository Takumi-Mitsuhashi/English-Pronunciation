import styles from "./instruction.module.css";
import question8B from "../assets/icons/question_8B7DBE.svg";
import close_purple from "../assets/icons/close_A260BF.svg";
import { useState } from "react";

export default function Instruction({label}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleInstruction = () => {
        if (isVisible) { 
        setIsVisible(false);
    } else { 
        setIsVisible(true);
    } 
    }

    return(
        <>
        <div style={{
            width: "100%", 
            display: "flex", 
            justifyContent: "right",
            margin: "0"
            }}>
          <button 
            className={styles.infobtn}
            onClick={handleInstruction}
          >
            <img src={question8B} />
          </button>
        </div>
          {isVisible && (
            <div className={styles.containerWrapper}>
                <div className={styles.instructionContainer}>
                  <button 
                    onClick={handleInstruction} 
                    className={styles.btnContainer}
                  >
                    <img src={close_purple}/>
                  </button>
                  <h2>{label}</h2>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                  <p>A</p>
                  <br/>
                </div>
            </div>
          )}
        </>
    );
}