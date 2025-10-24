import QuizTemplate from "./QuizTemplate";

export default function Alevel12() {

  const questions = [
  { word1: "fare", ipa1: "/fer/", word2: "fear", ipa2: "/fir/", audio1: "/audios/En-us-fare.mp3", audio2: "/audios/En-us-fear.mp3", answer1: "fare", answer2: "fear"},
  { word1: "hear", ipa1: "/hir/", word2: "hair", ipa2: "/her/", audio1: "/audios/En-us-hear.mp3", audio2: "/audios/En-us-hair.mp3", answer1: "hear", answer2: "hair"},
  { word1: "pair", ipa1: "/per/", word2: "peer", ipa2: "/pir/", audio1: "/audios/En-us-pair.mp3", audio2: "/audios/En-us-peer.mp3", answer1: "pair", answer2: "peer"},
  { word1: "cheer", ipa1: "/chir/", word2: "chair", ipa2: "/cher/", audio1: "/audios/En-us-cheer.mp3", audio2: "/audios/En-us-chair.mp3", answer1: "cheer", answer2: "chair"},
  { word1: "dare", ipa1: "/der/", word2: "deer", ipa2: "/dir/", audio1: "/audios/En-us-dare.mp3", audio2: "/audios/En-us-deer.mp3", answer1: "dare", answer2: "deer"},
  { word1: "bear", ipa1: "/ber/", word2: "beer", ipa2: "/bir/", audio1: "/audios/En-us-bear.mp3", audio2: "/audios/En-us-beer.mp3", answer1: "bear", answer2: "beer"},
  { word1: "sheer", ipa1: "/shir/", word2: "share", ipa2: "/sher/", audio1: "/audios/En-us-sheer.mp3", audio2: "/audios/En-us-share.mp3", answer1: "sheer", answer2: "share"},
  { word1: "air", ipa1: "/er/", word2: "ear", ipa2: "/ir/", audio1: "/audios/En-us-air.mp3", audio2: "/audios/En-us-ear.mp3", answer1: "air", answer2: "ear"},
  { word1: "rear", ipa1: "/rir/", word2: "rare", ipa2: "/rer/", audio1: "/audios/En-us-rear.mp3", audio2: "/audios/En-us-rare.mp3", answer1: "rear", answer2: "rare"},
  { word1: "steer", ipa1: "/stir/", word2: "stair", ipa2: "/ster/", audio1: "/audios/En-us-steer.mp3", audio2: "/audios/En-us-stair.mp3", answer1: "steer", answer2: "stair"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
