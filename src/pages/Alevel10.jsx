import QuizTemplate from "./QuizTemplate";

export default function Alevel10() {

  const questions = [
  { word1: "vice", ipa1: "/vaɪs/", word2: "voice", ipa2: "/vɔɪs/", audio1: "/audios/En-us-vice.mp3", audio2: "/audios/En-us-voice.mp3", answer1: "vice", answer2: "voice"},
  { word1: "aisle", ipa1: "/aɪl/", word2: "oil", ipa2: "/ɔɪl/", audio1: "/audios/En-us-aisle.mp3", audio2: "/audios/En-us-oil.mp3", answer1: "aisle", answer2: "oil"},
  { word1: "file", ipa1: "/faɪl/", word2: "foil", ipa2: "/fɔɪl/", audio1: "/audios/En-us-file.mp3", audio2: "/audios/En-us-foil.mp3", answer1: "file", answer2: "foil"},
  { word1: "pint", ipa1: "/paɪnt/", word2: "point", ipa2: "/pɔɪnt/", audio1: "/audios/En-us-pint.mp3", audio2: "/audios/En-us-point.mp3", answer1: "pint", answer2: "point"},
  { word1: "imply", ipa1: "/ɪmˈplaɪ/", word2: "employ", ipa2: "/ɪmˈplɔɪ/", audio1: "/audios/En-us-imply.mp3", audio2: "/audios/En-us-employ.mp3", answer1: "imply", answer2: "employ"},
  { word1: "liar", ipa1: "/ˈlaɪər/", word2: "lawyer", ipa2: "/ˈlɔɪər/", audio1: "/audios/En-us-liar.mp3", audio2: "/audios/En-us-lawyer.mp3", answer1: "liar", answer2: "lawyer"},
  { word1: "tile", ipa1: "/taɪl/", word2: "toil", ipa2: "/tɔɪl/", audio1: "/audios/En-us-tile.mp3", audio2: "/audios/En-us-toil.mp3", answer1: "tile", answer2: "toil"},
  { word1: "sigh", ipa1: "/saɪ/", word2: "soy", ipa2: "/sɔɪ/", audio1: "/audios/En-us-sigh.mp3", audio2: "/audios/En-us-soy.mp3", answer1: "sigh", answer2: "soy"},
  { word1: "buy", ipa1: "/baɪ/", word2: "boy", ipa2: "/bɔɪ/", audio1: "/audios/En-us-buy.mp3", audio2: "/audios/En-us-boy.mp3", answer1: "buy", answer2: "boy"},
  { word1: "tie", ipa1: "/taɪ/", word2: "toy", ipa2: "/tɔɪ/", audio1: "/audios/En-us-tie.mp3", audio2: "/audios/En-us-toy.mp3", answer1: "tie", answer2: "toy"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
