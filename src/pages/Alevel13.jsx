import QuizTemplate from "./QuizTemplate";

export default function Alevel13() {

  const questions = [
  { word1: "hurt", ipa1: "/hərt/", word2: "heart", ipa2: "/hɑrt/", audio1: "/audios/En-us-hurt.mp3", audio2: "/audios/En-us-heart.mp3", answer1: "hurt", answer2: "heart"},
  { word1: "burr", ipa1: "/bər/", word2: "bar", ipa2: "/bɑr/", audio1: "/audios/En-us-burr.mp3", audio2: "/audios/En-us-bar.mp3", answer1: "burr", answer2: "bar"},
  { word1: "far", ipa1: "/fɑr/", word2: "fur", ipa2: "/fər/", audio1: "/audios/En-us-far.mp3", audio2: "/audios/En-us-fur.mp3", answer1: "far", answer2: "fur"},
  { word1: "stir", ipa1: "/stər/", word2: "star", ipa2: "/stɑr/", audio1: "/audios/En-us-stir.mp3", audio2: "/audios/En-us-star.mp3", answer1: "stir", answer2: "star"},
  { word1: "firm", ipa1: "/fərm/", word2: "farm", ipa2: "/fɑrm/", audio1: "/audios/En-us-firm.mp3", audio2: "/audios/En-us-farm.mp3", answer1: "firm", answer2: "farm"},
  { word1: "pert", ipa1: "/pərt/", word2: "part", ipa2: "/pɑrt/", audio1: "/audios/En-us-pert.mp3", audio2: "/audios/En-us-part.mp3", answer1: "pert", answer2: "part"},
  { word1: "burn", ipa1: "/bərn/", word2: "barn", ipa2: "/bɑrn/", audio1: "/audios/En-us-burn.mp3", audio2: "/audios/En-us-barn.mp3", answer1: "burn", answer2: "barn"},
  { word1: "shirt", ipa1: "/ʃərt/", word2: "shark", ipa2: "/ʃɑrk/", audio1: "/audios/En-us-shirt.mp3", audio2: "/audios/En-us-shark.mp3", answer1: "shirt", answer2: "shark"},
  { word1: "purse", ipa1: "/pərs/", word2: "parse", ipa2: "/pɑrs/", audio1: "/audios/En-us-purse.mp3", audio2: "/audios/En-us-parse.mp3", answer1: "purse", answer2: "parse"},
  { word1: "spur", ipa1: "/spər/", word2: "spark", ipa2: "/spɑrk/", audio1: "/audios/En-us-spur.mp3", audio2: "/audios/En-us-spark.mp3", answer1: "spur", answer2: "spark"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
