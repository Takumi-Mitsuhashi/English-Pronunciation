import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "fat", word2: "hat", ipa1: "/fæt/", ipa2: "/hæt/", audio1: "/audios/En-us-fat.mp3", audio2: "/audios/En-us-hat.mp3", answer1: "fat", answer2: "hat" },
  { word1: "fill", word2: "hill", ipa1: "/fɪl/", ipa2: "/hɪl/", audio1: "/audios/En-us-fill.mp3", audio2: "/audios/En-us-hill.mp3", answer1: "fill", answer2: "hill" },
  { word1: "feet", word2: "heat", ipa1: "/fiːt/", ipa2: "/hiːt/", audio1: "/audios/En-us-feet.mp3", audio2: "/audios/En-us-heat.mp3", answer1: "feet", answer2: "heat" },
  { word1: "hit", word2: "fit", ipa1: "/hɪt/", ipa2: "/fɪt/", audio1: "/audios/En-us-hit.mp3", audio2: "/audios/En-us-fit.mp3", answer1: "hit", answer2: "fit" },
  { word1: "fair", word2: "hair", ipa1: "/fɛɚ/", ipa2: "/hɛɚ/", audio1: "/audios/En-us-fair.mp3", audio2: "/audios/En-us-hair.mp3", answer1: "fair", answer2: "hair" },
  { word1: "fart", word2: "heart", ipa1: "/fɑɚt/", ipa2: "/hɑɚt/", audio1: "/audios/En-us-fart.mp3", audio2: "/audios/En-us-heart.mp3", answer1: "fart", answer2: "heart" },
  { word1: "feel", word2: "heel", ipa1: "/fiːl/", ipa2: "/hiːl/", audio1: "/audios/En-us-feel.mp3", audio2: "/audios/En-us-heel.mp3", answer1: "feel", answer2: "heel" },
  { word1: "fed", word2: "head", ipa1: "/fɛd/", ipa2: "/hɛd/", audio1: "/audios/En-us-fed.mp3", audio2: "/audios/En-us-head.mp3", answer1: "fed", answer2: "head" },
  { word1: "fold", word2: "hold", ipa1: "/foʊld/", ipa2: "/hoʊld/", audio1: "/audios/En-us-fold.mp3", audio2: "/audios/En-us-hold.mp3", answer1: "fold", answer2: "hold" },
  { word1: "fire", word2: "hire", ipa1: "/faɪɚ/", ipa2: "/haɪɚ/", audio1: "/audios/En-us-fire.mp3", audio2: "/audios/En-us-hire.mp3", answer1: "fire", answer2: "hire" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
