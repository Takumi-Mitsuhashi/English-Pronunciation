import LevelButton from "../components/LevelButton";
import Header from "../components/Header";
// import MenuButton from "../components/MenuButton";
import Instruction from "../components/Instruction";
import styles from "./pages.module.css";
import question8B from "../assets/icons/question_8B7DBE.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Apage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("vowel"); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setOpenMenu(null);
  };

  const vowelMenus = [
    {
      id: "Short Vowel",
      label: "短母音",
      levels: [
        { label: "/ɪ/、/e/", path: "/Apage/Alevel1" },
        { label: "/æ/", path: "/Apage/Alevel2" },
        { label: "/ʊ/、/ʌ/", path: "/Apage/Alevel3" },
      ],
    },
    {
    id: "Long Vowel",
    label: "長母音",
    levels: [
      { label: "/iː/ - /ɪ/", path: "/Apage/Alevel4" },
      { label: "/ɑː/ - /æ/", path: "/Apage/Alevel5" },
      { label: "/uː/ - /ʊ/", path: "/Apage/Alevel6" },
      { label: "/ər/", path: "/Apage/Alevel7" }
    ],
  },
    {
    id: "Diphthong",
    label: "二重母音",
    levels: [
      { label: "/eɪ/", path: "/Apage/Alevel8" },
      { label: "/aɪ/", path: "/Apage/Alevel9" },
      { label: "/ɔɪ/", path: "/Apage/Alevel10" },
      { label: "/aʊ/、/oʊ/", path: "/Apage/Alevel11" }
    ],
  },
    {
    id: "R-Diphthong",
    label: "Rの二重母音",
    levels: [
      { label: "/ɪr/ - /er/", path: "/Apage/Alevel12" },
      { label: "/ɑr/", path: "/Apage/Alevel13" },
      { label: "/ɔr/", path: "/Apage/Alevel14" },
      { label: "/ʊr/", path: "/Apage/Alevel15" },
    ],
  },
  ];

  const consonantMenus = [
    {
      id: "Stops",
      label: "破裂音",
      levels: [
        { label: "/p/ - /b/", path: "/Apage/Alevel16" },
        { label: "/t/ - /d/", path: "/Apage/Alevel17" },
        { label: "/k/ - /g/", path: "/Apage/Alevel18" },
      ],
    },
    {
      id: "Fricatives",
      label: "摩擦音",
      levels: [
        { label: "/f/ - /v/", path: "/Apage/Alevel19" },
        { label: "/θ/、/ð/", path: "/Apage/Alevel20" },
        { label: "/s/ - /ʃ/", path: "/Apage/Alevel21" },
        { label: "/z/ - /ʒ/", path: "/Apage/Alevel22" },
        { label: "/h/", path: "/Apage/Alevel23" },
      ],
    },
    {
      id: "Affricates",
      label: "破擦音",
      levels: [
        { label: "/tʃ/ - /dʒ/", path: "/Apage/Alevel24" },
      ],
    },
    {
      id: "Approximants",
      label: "接近音",
      levels: [
        { label: "/r/ - /l/", path: "/Apage/Alevel25" },
      ],
    },
    {
      id: "Nasals",
      label: "鼻音",
      levels: [
        { label: "/m/、 /n/、 /ŋ/", path: "/Apage/Alevel26" },
      ],
    },
    {
      id: "Semivowels",
      label: "半母音",
      levels: [
        { label: "/j/", path: "/Apage/Alevel27" },
        { label: "/w/", path: "/Apage/Alevel28" },
      ]
    }
  ];

  const menus = selectedCategory === "vowel" ? vowelMenus : consonantMenus;

  return (
    <div className={styles.parentContainer}>
      <Header onClick={() => navigate("/")}/>

      <div className={styles.categorySwitch}>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "vowel" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("vowel")}
        >
          母音
        </button>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "consonant" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("consonant")}
        >
          子音
        </button>
      </div>

      {menus.map((menu) => (
        <div key={menu.id} style={{marginBottom: "70px", }}>
          <div className={styles.dividerWithText}>
            <span><strong>{menu.label}</strong></span>
          </div>
          <Instruction label={menu.label} />
          <LevelButton levels={menu.levels} />          
        </div>
      ))}
      
    </div>
  );
}
