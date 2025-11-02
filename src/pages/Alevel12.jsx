import QuizTemplate from "./QuizTemplate";

export default function Alevel12() {

  const questions = [
  { word1: "fare", ipa1: "/fɛɚ/", word2: "fear", ipa2: "/fɪɚ/", audio1: "/audios/En-us-fare.mp3", audio2: "/audios/En-us-fear.mp3", answer1: "fare", answer2: "fear"},
  { word1: "hear", ipa1: "/hɪɚ/", word2: "hair", ipa2: "/hɛɚ/", audio1: "/audios/En-us-hear.mp3", audio2: "/audios/En-us-hair.mp3", answer1: "hear", answer2: "hair"},
  { word1: "pair", ipa1: "/pɛɚ/", word2: "peer", ipa2: "/pɪɚ/", audio1: "/audios/En-us-pair.mp3", audio2: "/audios/En-us-peer.mp3", answer1: "pair", answer2: "peer"},
  { word1: "cheer", ipa1: "/chɪɚ/", word2: "chair", ipa2: "/chɛɚ/", audio1: "/audios/En-us-cheer.mp3", audio2: "/audios/En-us-chair.mp3", answer1: "cheer", answer2: "chair"},
  { word1: "dare", ipa1: "/dɛɚ/", word2: "deer", ipa2: "/dɪɚ/", audio1: "/audios/En-us-dare.mp3", audio2: "/audios/En-us-deer.mp3", answer1: "dare", answer2: "deer"},
  { word1: "bear", ipa1: "/bɛɚ/", word2: "beer", ipa2: "/bɪɚ/", audio1: "/audios/En-us-bear.mp3", audio2: "/audios/En-us-beer.mp3", answer1: "bear", answer2: "beer"},
  { word1: "sheer", ipa1: "/shɪɚ/", word2: "share", ipa2: "/shɛɚ/", audio1: "/audios/En-us-sheer.mp3", audio2: "/audios/En-us-share.mp3", answer1: "sheer", answer2: "share"},
  { word1: "air", ipa1: "/ɛɚ/", word2: "ear", ipa2: "/ɪɚ/", audio1: "/audios/En-us-air.mp3", audio2: "/audios/En-us-ear.mp3", answer1: "air", answer2: "ear"},
  { word1: "rear", ipa1: "/rɪɚ/", word2: "rare", ipa2: "/rɛɚ/", audio1: "/audios/En-us-rear.mp3", audio2: "/audios/En-us-rare.mp3", answer1: "rear", answer2: "rare"},
  { word1: "steer", ipa1: "/stɪɚ/", word2: "stair", ipa2: "/stɛɚ/", audio1: "/audios/En-us-steer.mp3", audio2: "/audios/En-us-stair.mp3", answer1: "steer", answer2: "stair"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
