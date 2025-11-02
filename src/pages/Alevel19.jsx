import QuizTemplate from "./QuizTemplate";

export default function Alevel19() {
  const questions = [
  { word1: "van", ipa1: "/væn/", word2: "fan", ipa2: "/fæn/", audio1: "/audios/En-us-van.mp3", audio2: "/audios/En-us-fan.mp3", answer1: "van", answer2: "fan" },
  { word1: "fail", ipa1: "/feɪl/", word2: "veil", ipa2: "/veɪl/", audio1: "/audios/En-us-fail.mp3", audio2: "/audios/En-us-veil.mp3", answer1: "fail", answer2: "veil" },
  { word1: "view", ipa1: "/vjuː/", word2: "few", ipa2: "/fjuː/", audio1: "/audios/En-us-view.mp3", audio2: "/audios/En-us-few.mp3", answer1: "view", answer2: "few" },
  { word1: "ferry", ipa1: "/ˈfɛɚ.i/", word2: "very", ipa2: "/ˈvɛɚ.i/", audio1: "/audios/En-us-ferry.mp3", audio2: "/audios/En-us-very.mp3", answer1: "ferry", answer2: "very" },
  { word1: "vast", ipa1: "/væst/", word2: "fast", ipa2: "/fæst/", audio1: "/audios/En-us-vast.mp3", audio2: "/audios/En-us-fast.mp3", answer1: "vast", answer2: "fast" },
  { word1: "fairy", ipa1: "/ˈfɛɚ.i/", word2: "vary", ipa2: "/ˈvɛɚ.i/", audio1: "/audios/En-us-fairy.mp3", audio2: "/audios/En-us-vary.mp3", answer1: "fairy", answer2: "vary" },
  { word1: "vase", ipa1: "/veɪs/", word2: "face", ipa2: "/feɪs/", audio1: "/audios/En-us-vase.mp3", audio2: "/audios/En-us-face.mp3", answer1: "vase", answer2: "face" },
  { word1: "vest", ipa1: "/vɛst/", word2: "best", ipa2: "/bɛst/", audio1: "/audios/En-us-vest.mp3", audio2: "/audios/En-us-best.mp3", answer1: "vest", answer2: "best" },
  { word1: "bail", ipa1: "/beɪl/", word2: "veil", ipa2: "/veɪl/", audio1: "/audios/En-us-bail.mp3", audio2: "/audios/En-us-veil.mp3", answer1: "bail", answer2: "veil" },
  { word1: "vase", ipa1: "/veɪs/", word2: "base", ipa2: "/beɪs/", audio1: "/audios/En-us-vase.mp3", audio2: "/audios/En-us-base.mp3", answer1: "vase", answer2: "base" },
  { word1: "vet", ipa1: "/vɛt/", word2: "bet", ipa2: "/bɛt/", audio1: "/audios/En-us-vet.mp3", audio2: "/audios/En-us-bet.mp3", answer1: "vet", answer2: "bet" },
  { word1: "boat", ipa1: "/boʊt/", word2: "vote", ipa2: "/voʊt/", audio1: "/audios/En-us-boat.mp3", audio2: "/audios/En-us-vote.mp3", answer1: "boat", answer2: "vote" },
  { word1: "revel", ipa1: "/ˈrɛv.əl/", word2: "rebel", ipa2: "/ˈrɛb.əl/", audio1: "/audios/En-us-revel.mp3", audio2: "/audios/En-us-rebel.mp3", answer1: "revel", answer2: "rebel" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
