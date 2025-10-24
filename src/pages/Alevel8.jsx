import QuizTemplate from "./QuizTemplate";

export default function Alevel8() {

  const questions = [
  { word1: "bet", word2: "bait", ipa1: "/bet/", ipa2: "/beɪt/", audio1: "/audios/En-us-bet.mp3", audio2: "/audios/En-us-bait.mp3", answer1: "bet", answer2: "bait" },
  { word1: "pen", word2: "pain", ipa1: "/pen/", ipa2: "/peɪn/", audio1: "/audios/En-us-pen.mp3", audio2: "/audios/En-us-pain.mp3", answer1: "pen", answer2: "pain" },
  { word1: "let", word2: "late", ipa1: "/let/", ipa2: "/leɪt/", audio1: "/audios/En-us-let.mp3", audio2: "/audios/En-us-late.mp3", answer1: "let", answer2: "late" },
  { word1: "fell", word2: "fail", ipa1: "/fel/", ipa2: "/feɪl/", audio1: "/audios/En-us-fell.mp3", audio2: "/audios/En-us-fail.mp3", answer1: "fell", answer2: "fail" },
  { word1: "sell", word2: "sale", ipa1: "/sel/", ipa2: "/seɪl/", audio1: "/audios/En-us-sell.mp3", audio2: "/audios/En-us-sale.mp3", answer1: "sell", answer2: "sale" },
  { word1: "men", word2: "main", ipa1: "/men/", ipa2: "/meɪn/", audio1: "/audios/En-us-men.mp3", audio2: "/audios/En-us-main.mp3", answer1: "men", answer2: "main" },
  { word1: "wet", word2: "weight", ipa1: "/wet/", ipa2: "/weɪt/", audio1: "/audios/En-us-wet.mp3", audio2: "/audios/En-us-weight.mp3", answer1: "wet", answer2: "weight" },
  { word1: "tell", word2: "tail", ipa1: "/tel/", ipa2: "/teɪl/", audio1: "/audios/En-us-tell.mp3", audio2: "/audios/En-us-tail.mp3", answer1: "tell", answer2: "tail" },
  { word1: "get", word2: "gate", ipa1: "/get/", ipa2: "/geɪt/", audio1: "/audios/En-us-get.mp3", audio2: "/audios/En-us-gate.mp3", answer1: "get", answer2: "gate" },
  { word1: "when", word2: "wane", ipa1: "/wen/", ipa2: "/weɪn/", audio1: "/audios/En-us-when.mp3", audio2: "/audios/En-us-wane.mp3", answer1: "when", answer2: "wane" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
