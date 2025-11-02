import styles from "./manual.module.css";
import Header from "../components/Header";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import homepage from "../assets/images/IMG_3403.JPG"

import vowelpage from "../assets/images/IMG_3405.JPEG"
import consonantpage from "../assets/images/IMG_3406.JPEG"
import instructionpage from "../assets/images/IMG_3413.JPG"
import quizpage from "../assets/images/IMG_3407.JPG"
import resultpage from "../assets/images/IMG_3412.JPG"

import doujo from "../assets/images/IMG_3404.JPEG";
import doujopage from "../assets/images/IMG_3408.JPEG"
import doujoresult from "../assets/images/IMG_3411.JPG";

import support from "../assets/images/IMG_3410.JPG";


export default function Manual() {
    const navigate = useNavigate();

     const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const quizimages = [
      vowelpage,
      consonantpage,
      instructionpage,
      quizpage,
      resultpage
    ];

    const doujoimages = [
      doujo,
      doujopage,
      doujoresult,
    ]

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const handleNext1 = () => {
      setCurrentIndex1((prev) => (prev + 1) % quizimages.length);
    };

    const handleNext2 = () => {
      setCurrentIndex2((prev) => (prev + 1) % doujoimages.length);
    };

    const handlePrev1 = () => {
      setCurrentIndex1((prev) =>
        prev === 0 ? quizimages.length - 1 : prev - 1
      );
    };

    const handlePrev2 = () => {
      setCurrentIndex2((prev) =>
        prev === 0 ? doujoimages.length - 1 : prev - 1
      );
    };

    const handleSwipe1 = useSwipeable({
      onSwipedLeft: () => setCurrentIndex1((prev) => (prev + 1) % quizimages.length),
      onSwipedRight: () => setCurrentIndex1((prev) => (prev - 1 + quizimages.length) % quizimages.length),
      trackMouse: true,
    })

    const handleSwipe2 = useSwipeable({
      onSwipedLeft: () => setCurrentIndex2((prev) => (prev + 1) % doujoimages.length),
      onSwipedRight: () => setCurrentIndex2((prev) => (prev - 1 + doujoimages.length) % doujoimages.length),
      trackMouse: true,
    })
    
    const content1 = {
      vowelpage: (
        <>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p>A　⇒　母音・子音きりかえボタン</p>
          <p>B　⇒　各チャプターの説明</p>
          <p>C　⇒　問題のページへ</p>
        </div>
        
        </>
      ),
      consonantpage: (
        <>
        <div style={{diplay:"flex", justifyContent: "center"}}>
          <p>＜子音ページ＞</p>
        </div>
        </>
      ),
      instructionpage: (
        <>
        <p>各チャプターの説明をしています。</p>
        <p>なるべく分かりやすく書いたつもりです！</p>
        </>
      ),
      quizpage: (
        <>
        <div style={{width: "90vw", diplay:"flex", justifyContent: "center"}}>
          <p>♪ボタンを押して音声を再生し、記入欄に答えをタイプ。</p>
        </div>
        </>
      ),
      resultpage: (
        <>
        <p>正答数が表示されます。</p>
        <p>間違えた問題は音声を聞いて復習しましょう。</p>
        </>
      )
    }

    const content2 = {
      doujo: (
        <>
        <p>ゲーム要素を用意してみました！</p>
        <p>音声記号から単語を答えるタイムアタック。</p>
        </>
      ),
      doujopage: (
        <>
        <p>＜問題ページ＞</p>
        </>
      ),
      doujoresult: (
        <>
        <p>＜結果一覧＞</p>
        </>
      )
    }

    return (
        <div className={styles.parentContainer}>
            <Header onClick={() => navigate("/")}/>
            <h1>アプリの使い方</h1>
            <ul className={styles.funclist}>
                <li onClick={() => scrollToSection("Section1")}>1. ホーム画面</li>
                <li onClick={() => scrollToSection("Section2")}>2. 聞き取りクイズ</li>
                <li onClick={() => scrollToSection("Section3")}>3. IPA道場</li>
                <li onClick={() => scrollToSection("Section4")}>4. サポート</li>
            </ul>
            <div 
              className={styles.container1}
              id="Section1"
            >
                <div className={styles.title}>
                    <h2>1. ホーム画面</h2>
                </div>
                {/* <button className={styles.glass}>A</button> */}
                <img 
                  className={styles.manualimg}
                  src={homepage} />
                <span className={styles.square}>A</span>
                <span className={styles.circle1}>C</span>
                <span className={styles.circle2}>B</span>
                <div className={styles.commentContainer}>
                  <p>A　⇒　<span onClick={() => scrollToSection("Section2")}>2. 聞き取りクイズ</span></p>
                  <p>B　⇒　<span onClick={() => scrollToSection("Section3")}>3. IPA道場</span></p>
                  <p>C　⇒　<span onClick={() => scrollToSection("Section4")}>4. サポート</span></p>
                </div>
            </div>


            <div 
              className={styles.container2}
              id="Section2"
            >
                <div className={styles.title}>
                    <h2>2. 聞き取りクイズ</h2>
                </div>
                <div className={styles.sliderWrapper} {...handleSwipe1}> 
                  <div
                    className={styles.slider1}
                    style={{
                      transform: `translateX(-${currentIndex1 * 100}vw)`
                    }}
                  >
                    <span className={styles.square2}>C</span>
                    <span className={styles.circle3}>A</span>
                    <span className={styles.circle4}>B</span>
                    {quizimages.map((src, index) => {
                      const key =
                          src === vowelpage
                            ? "vowelpage"
                            : src === consonantpage
                            ? "consonantpage"
                            : src === instructionpage
                            ? "instructionpage"
                            : src === quizpage
                            ? "quizpage"
                            : "resultpage";
                      
                      return (
                      <div key={index} className={styles.imgContainer}>
                        <img 
                          src={src} 
                          className={styles.manualimg}
                          alt={`slide-${index}`} />
                        {content1[key]}
                      </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  {currentIndex1 !== 0 && (<button className={styles.arrowLeft} onClick={handlePrev1}>
                    ＜ー
                  </button>)}

                  {currentIndex1 !== 4 && (<button className={styles.arrowRight} onClick={handleNext1}>
                    ー＞
                  </button>)}
                </div>
            </div>


            <div 
              className={styles.container2}
              id="Section3"
            >
                <div className={styles.title}>
                    <h2>3. IPA道場</h2>
                </div>
                <div className={styles.sliderWrapper} {...handleSwipe2}> 
                  <div
                    className={styles.slider2}
                    style={{
                      transform: `translateX(-${currentIndex2 * 100}vw)`
                    }}
                  >
                    {doujoimages.map((src, index) => {
                      const key =
                          src === doujo
                            ? "doujo"
                            : src === doujopage
                            ? "doujopage"
                            : "doujoresult";
                            
                      
                      return (
                      <div key={index} className={styles.imgContainer}>
                        <img 
                          src={src} 
                          className={styles.manualimg}
                          alt={`slide-${index}`} />
                        {content2[key]}
                      </div>
                      );
                    })}
                  </div>
                  <div className={styles.btnContainer}>
                  {currentIndex2 !== 0 && (<button className={styles.arrowLeft} onClick={handlePrev2}>
                    ＜ー
                  </button>)}

                  {currentIndex2 !== 2 && (<button className={styles.arrowRight} onClick={handleNext2}>
                    ー＞
                  </button>)}
                </div>
                </div>
            </div>


            <div 
              className={styles.container1}
              id="Section4"
            >
                <div className={styles.title}>
                    <h2>4. サポート</h2>
                </div>
                <img 
                  className={styles.manualimg}
                  src={support} />
                <div style={{display: "flex", flexDirection: "column"}}>
                  <p>「はじめに」では、このアプリを使う上で知っておいてほしいことを話しています。</p>
                  <p>「アプリの使い方」、このページです。</p>
                  <p>「お問い合わせ」では、質問や感想、改善点のフィードバックを募集しています。匿名で大丈夫ですので、どしどしお待ちしています。</p>
                </div>
            </div>
        </div>
    )
}