import LevelButton from "../components/LevelButton";
import Header from "../components/Header";
// import MenuButton from "../components/MenuButton";
import InstructionButton from "../components/InstructionButton";
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
      ruby: "たんぼいん",
      word: ["sit", "set"],
      levels: [
        { label: "/ɪ/、/ɛ/", path: "/Apage/Alevel1", word: ["sit", "set"]  },
        { label: "/æ/", path: "/Apage/Alevel2", word: ["man"]  },
        { label: "/ʊ/、/ʌ/", path: "/Apage/Alevel3", word: ["luck", "look"]  },
      ],
    },
    {
    id: "Long Vowel",
    label: "長母音",
    ruby: "ちょうぼいん",
    word: ["sit", "set"],
    levels: [
      { label: "/iː/ ", path: "/Apage/Alevel4", word: ["seat", "sit"]  },
      { label: "/ɑː/", path: "/Apage/Alevel5", word: ["hot", "hat"]  },
      { label: "/uː/", path: "/Apage/Alevel6", word: ["full", "fool"]  },
      { label: "/ɚː/", path: "/Apage/Alevel7", word: ["bird"]  }
    ],
  },
    {
    id: "Diphthong",
    label: "二重母音",
    ruby: "にじゅうぼいん",
    levels: [
      { label: "/eɪ/", path: "/Apage/Alevel8", word: ["pain", "pen"]  },
      { label: "/aɪ/", path: "/Apage/Alevel9", word: ["line", "lane"]  },
      { label: "/ɔɪ/", path: "/Apage/Alevel10", word: ["employ", "imply"]  },
      { label: "/aʊ/、/oʊ/", path: "/Apage/Alevel11", word: ["down", "dawn"]  }
    ],
  },
    {
    id: "R-Diphthong",
    label: "Rの二重母音",
    ruby: "Rのにじゅうぼいん",
    word: ["sit", "set"],
    levels: [
      { label: "/ɪɚ/、/ɛɚ/", path: "/Apage/Alevel12", word: ["fear", "fare"]  },
      { label: "/ɑɚ/", path: "/Apage/Alevel13", word: ["hard", "heard"]  },
      { label: "/ɔɚ/", path: "/Apage/Alevel14", word: ["ward", "word"]  },
      { label: "/ʊɚ/", path: "/Apage/Alevel15", word: ["sure"]  },
    ],
  },
  {
    id: "Weak Vowels",
    label: "弱母音",
    ruby: "じゃくぼいん",
    word: ["sit", "set"],
    levels: [
      { label: "/i/", path: "/Apage/Alevel29", word: ["funny"]  },
      { label: "/ɪ/", path: "/Apage/Alevel30", word: ["visit"]  },
      { label: "/ə/", path: "/Apage/Alevel31", word: ["family"]  },
      { label: "/ju/", path: "/Apage/Alevel32", word: ["population"]  },
      { label: "/ɚ/", path: "/Apage/Alevel33", word: ["water"]  },
    ],
  },
  ];

  const consonantMenus = [
    {
      id: "Stops",
      label: "破裂音",
      ruby: "はれつおん",
      levels: [
        { label: "/p/、/b/", path: "/Apage/Alevel16", word: ["pig", "big"]  },
        { label: "/t/、/d/", path: "/Apage/Alevel17", word: ["town", "down"]  },
        { label: "/k/、/g/", path: "/Apage/Alevel18", word: ["came", "game"]  },
      ],
    },
    {
      id: "Fricatives",
      label: "摩擦音",
      ruby: "まさつおん",
      levels: [
        { label: "/f/、/v/", path: "/Apage/Alevel19", word: ["few", "view"]  },
        { label: "/θ/、/ð/", path: "/Apage/Alevel20", word: ["sink", "think"]  },
        { label: "/s/、/ʃ/", path: "/Apage/Alevel21", word: ["see", "she"]  },
        { label: "/z/、/ʒ/", path: "/Apage/Alevel22", word: ["visible", "vision"]  },
        { label: "/h/", path: "/Apage/Alevel23", word: ["hat", "fat"]  },
      ],
    },
    {
      id: "Affricates",
      label: "破擦音",
      ruby: "はさつおん",
      levels: [
        { label: "/tʃ/、/dʒ/", path: "/Apage/Alevel24", word: ["chunk", "junk"] },
      ],
    },
    {
      id: "Approximants",
      label: "接近音",
      ruby: "せっきんおん",
      levels: [
        { label: "/r/、/l/", path: "/Apage/Alevel25", word: ["right", "light"] },
      ],
    },
    {
      id: "Nasals",
      label: "鼻音",
      ruby: "びおん",
      levels: [
        { label: "/m/、 /n/、 /ŋ/", path: "/Apage/Alevel26", word: ["some", "sun", "sung"] },
      ],
    },
    {
      id: "Semivowels",
      label: "半母音",
      ruby: "はんぼいん",
      levels: [
        { label: "/j/", path: "/Apage/Alevel27", word: ["year"] },
        { label: "/w/", path: "/Apage/Alevel28", word: ["want"] },
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
          <InstructionButton 
            label={menu.label}
            ruby={menu.ruby}
          />
          <LevelButton 
            levels={menu.levels}
          />
        </div>
      ))}
      
    </div>
  );
}
