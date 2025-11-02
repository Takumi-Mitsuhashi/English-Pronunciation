import QuizTemplate from "./QuizTemplate";

export default function Alevel8() {

  const questions = [
  { word1: "bet", word2: "bait", ipa1: "/bɛt/", ipa2: "/beɪt/", audio1: "/audios/En-us-bet.mp3", audio2: "/audios/En-us-bait.mp3", answer1: "bet", answer2: "bait" },
  { word1: "pain", word2: "pen", ipa1: "/peɪn/", ipa2: "/pɛn/", audio1: "/audios/En-us-pain.mp3", audio2: "/audios/En-us-pen.mp3", answer1: "pain", answer2: "pen" },
  { word1: "late", word2: "let", ipa1: "/leɪt/", ipa2: "/lɛt/", audio1: "/audios/En-us-late.mp3", audio2: "/audios/En-us-let.mp3", answer1: "let", answer2: "late" },
  { word1: "fell", word2: "fail", ipa1: "/fɛl/", ipa2: "/feɪl/", audio1: "/audios/En-us-fell.mp3", audio2: "/audios/En-us-fail.mp3", answer1: "fell", answer2: "fail" },
  { word1: "sale", word2: "sell", ipa1: "/seɪl/", ipa2: "/sɛl/", audio1: "/audios/En-us-sale.mp3", audio2: "/audios/En-us-sell.mp3", answer1: "sell", answer2: "sail" },
  { word1: "men", word2: "main", ipa1: "/mɛn/", ipa2: "/meɪn/", audio1: "/audios/En-us-men.mp3", audio2: "/audios/En-us-main.mp3", answer1: "men", answer2: "main" },
  { word1: "weight", word2: "wet", ipa1: "/weɪt/", ipa2: "/wɛt/", audio1: "/audios/En-us-weight.mp3", audio2: "/audios/En-us-wet.mp3", answer1: "weight", answer2: "wet" },
  { word1: "tell", word2: "tail", ipa1: "/tɛl/", ipa2: "/teɪl/", audio1: "/audios/En-us-tell.mp3", audio2: "/audios/En-us-tail.mp3", answer1: "tell", answer2: "tail" },
  { word1: "gate", word2: "get", ipa1: "/geɪt/", ipa2: "/gɛt/", audio1: "/audios/En-us-gate.mp3", audio2: "/audios/En-us-get.mp3", answer1: "gate", answer2: "get" },
  { word1: "when", word2: "wane", ipa1: "/wɛn/", ipa2: "/weɪn/", audio1: "/audios/En-us-when.mp3", audio2: "/audios/En-us-wane.mp3", answer1: "when", answer2: "wane" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
