import { useNavigate } from "react-router-dom";
import styles from "./game.module.css";
import Header from "./components/Header";

export default function Game() {
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.parentContainer}>
        <Header onClick={() => navigate("/")} />
            <div className={styles.titleContainer}>
                
                <h1>IPA道場へようこそ</h1>
                <p style={{margin: "20px 0 5px"}}>さらなる高みを目指す志高き挑戦者へ。</p>
                <p style={{margin: "0 0 30px"}}>今こそ己の最高到達点を叩き出せ。</p>
                <button 
                className={styles.startbtn}
                onClick={() => navigate("/Game/Gamepage")}
                >
                    START
                </button>
                <div className={styles.guideContainer}>
                    <strong><p className={styles.rule}>ルール</p></strong>
                    <p style={{margin: "0 0 5px 0"}}>制限時間：60秒</p>
                    <strong><p style={{margin: "0 0 2px"}}>音声記号から英単語を導き出せ。</p></strong> 
                    <p style={{margin: "0"}}>例）/'stʌd.i/　study</p>
                </div>
            </div>
        </div>
            
       
        
        </>
    );
}