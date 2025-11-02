import QuizTemplate from "./QuizTemplate";

export default function Alevel14() {

  const questions = [
  { word1: "word", ipa1: "/wɚːd/", word2: "ward", ipa2: "/wɔɚd/", audio1: "/audios/En-us-word.mp3", audio2: "/audios/En-us-ward.mp3", answer1: "word", answer2: "ward"},
  { word1: "born", ipa1: "/bɔɚn/", word2: "burn", ipa2: "/bɚːn/", audio1: "/audios/En-us-born.mp3", audio2: "/audios/En-us-burn.mp3", answer1: "born", answer2: "burn"},
  { word1: "stir", ipa1: "/stɚː/", word2: "store", ipa2: "/stɔɚ/", audio1: "/audios/En-us-stir.mp3", audio2: "/audios/En-us-store.mp3", answer1: "stir", answer2: "store"},
  { word1: "turn", ipa1: "/tɚːn/", word2: "torn", ipa2: "/tɔɚn/", audio1: "/audios/En-us-turn.mp3", audio2: "/audios/En-us-torn.mp3", answer1: "turn", answer2: "torn"},
  { word1: "firm", ipa1: "/fɚːm/", word2: "form", ipa2: "/fɔɚm/", audio1: "/audios/En-us-firm.mp3", audio2: "/audios/En-us-form.mp3", answer1: "firm", answer2: "form"},
  { word1: "short", ipa1: "/ʃɔɚt/", word2: "shirt", ipa2: "/ʃɚːt/", audio1: "/audios/En-us-short.mp3", audio2: "/audios/En-us-shirt.mp3", answer1: "short", answer2: "shirt"},
  { word1: "pert", ipa1: "/pɚːt/", word2: "port", ipa2: "/pɔɚt/", audio1: "/audios/En-us-pert.mp3", audio2: "/audios/En-us-port.mp3", answer1: "pert", answer2: "port"},
  { word1: "perch", ipa1: "/pɚːtʃ/", word2: "porch", ipa2: "/pɔɚtʃ/", audio1: "/audios/En-us-perch.mp3", audio2: "/audios/En-us-porch.mp3", answer1: "perch", answer2: "porch"},
  { word1: "bird", ipa1: "/bɚːd/", word2: "board", ipa2: "/bɔɚd/", audio1: "/audios/En-us-bird.mp3", audio2: "/audios/En-us-board.mp3", answer1: "bird", answer2: "board"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
