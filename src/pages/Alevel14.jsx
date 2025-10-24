import QuizTemplate from "./QuizTemplate";

export default function Alevel14() {

  const questions = [
  { word1: "word", ipa1: "/wərd/", word2: "ward", ipa2: "/wɔrd/", audio1: "/audios/En-us-word.mp3", audio2: "/audios/En-us-ward.mp3", answer1: "word", answer2: "ward"},
  { word1: "born", ipa1: "/bɔrn/", word2: "burn", ipa2: "/bərn/", audio1: "/audios/En-us-born.mp3", audio2: "/audios/En-us-burn.mp3", answer1: "born", answer2: "burn"},
  { word1: "stir", ipa1: "/stər/", word2: "store", ipa2: "/stor/", audio1: "/audios/En-us-stir.mp3", audio2: "/audios/En-us-store.mp3", answer1: "stir", answer2: "store"},
  { word1: "turn", ipa1: "/tərn/", word2: "torn", ipa2: "/torn/", audio1: "/audios/En-us-turn.mp3", audio2: "/audios/En-us-torn.mp3", answer1: "turn", answer2: "torn"},
  { word1: "firm", ipa1: "/fərm/", word2: "form", ipa2: "/form/", audio1: "/audios/En-us-firm.mp3", audio2: "/audios/En-us-form.mp3", answer1: "firm", answer2: "form"},
  { word1: "short", ipa1: "/ʃort/", word2: "shirt", ipa2: "/ʃərt/", audio1: "/audios/En-us-short.mp3", audio2: "/audios/En-us-shirt.mp3", answer1: "short", answer2: "shirt"},
  { word1: "pert", ipa1: "/pərt/", word2: "port", ipa2: "/port/", audio1: "/audios/En-us-pert.mp3", audio2: "/audios/En-us-port.mp3", answer1: "pert", answer2: "port"},
  { word1: "perch", ipa1: "/pərtʃ/", word2: "porch", ipa2: "/portʃ/", audio1: "/audios/En-us-perch.mp3", audio2: "/audios/En-us-porch.mp3", answer1: "perch", answer2: "porch"},
  { word1: "bird", ipa1: "/bərd/", word2: "board", ipa2: "/bord/", audio1: "/audios/En-us-bird.mp3", audio2: "/audios/En-us-board.mp3", answer1: "bird", answer2: "board"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
