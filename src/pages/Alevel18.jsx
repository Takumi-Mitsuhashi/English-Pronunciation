import QuizTemplate from "./QuizTemplate";

export default function Alevel18() {
  const questions = [
  { word1: "game", ipa1: "/ɡeɪm/", word2: "came", ipa2: "/keɪm/", audio1: "/audios/En-us-game.mp3", audio2: "/audios/En-us-came.mp3", answer1: "game", answer2: "came" },
  { word1: "gap", ipa1: "/ɡæp/", word2: "cap", ipa2: "/kæp/", audio1: "/audios/En-us-gap.mp3", audio2: "/audios/En-us-cap.mp3", answer1: "gap", answer2: "cap" },
  { word1: "goat", ipa1: "/ɡoʊt/", word2: "coat", ipa2: "/koʊt/", audio1: "/audios/En-us-goat.mp3", audio2: "/audios/En-us-coat.mp3", answer1: "goat", answer2: "coat" },
  { word1: "gum", ipa1: "/ɡʌm/", word2: "come", ipa2: "/kʌm/", audio1: "/audios/En-us-gum.mp3", audio2: "/audios/En-us-come.mp3", answer1: "gum", answer2: "come" },
  { word1: "girl", ipa1: "/ɡərl/", word2: "curl", ipa2: "/kərl/", audio1: "/audios/En-us-girl.mp3", audio2: "/audios/En-us-curl.mp3", answer1: "girl", answer2: "curl" },
  { word1: "glass", ipa1: "/ɡlæs/", word2: "class", ipa2: "/klæs/", audio1: "/audios/En-us-glass.mp3", audio2: "/audios/En-us-class.mp3", answer1: "glass", answer2: "class" },
  { word1: "gold", ipa1: "/ɡoʊld/", word2: "cold", ipa2: "/koʊld/", audio1: "/audios/En-us-gold.mp3", audio2: "/audios/En-us-cold.mp3", answer1: "gold", answer2: "cold" },
  { word1: "clue", ipa1: "/kluː/", word2: "glue", ipa2: "/ɡluː/", audio1: "/audios/En-us-clue.mp3", audio2: "/audios/En-us-glue.mp3", answer1: "clue", answer2: "glue" },
  { word1: "card", ipa1: "/kɑrd/", word2: "guard", ipa2: "/ɡɑrd/", audio1: "/audios/En-us-card.mp3", audio2: "/audios/En-us-guard.mp3", answer1: "card", answer2: "guard" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
