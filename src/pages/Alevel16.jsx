import QuizTemplate from "./QuizTemplate";

export default function Alevel16() {
  const questions = [
  { word1: "big", ipa1: "/bɪg/", word2: "pig", ipa2: "/pɪg/", audio1: "/audios/En-us-big.mp3", audio2: "/audios/En-us-pig.mp3", answer1: "big", answer2: "pig" },
  { word1: "base", ipa1: "/beɪs/", word2: "pace", ipa2: "/peɪs/", audio1: "/audios/En-us-base.mp3", audio2: "/audios/En-us-pace.mp3", answer1: "base", answer2: "pace" },
  { word1: "ban", ipa1: "/bæn/", word2: "pan", ipa2: "/pæn/", audio1: "/audios/En-us-ban.mp3", audio2: "/audios/En-us-pan.mp3", answer1: "ban", answer2: "pan" },
  { word1: "bat", ipa1: "/bæt/", word2: "pat", ipa2: "/pæt/", audio1: "/audios/En-us-bat.mp3", audio2: "/audios/En-us-pat.mp3", answer1: "bat", answer2: "pat" },
  { word1: "pack", ipa1: "/pæk/", word2: "back", ipa2: "/bæk/", audio1: "/audios/En-us-pack.mp3", audio2: "/audios/En-us-back.mp3", answer1: "pack", answer2: "back" },
  { word1: "bin", ipa1: "/bɪn/", word2: "pin", ipa2: "/pɪn/", audio1: "/audios/En-us-bin.mp3", audio2: "/audios/En-us-pin.mp3", answer1: "bin", answer2: "pin" },
  { word1: "buy", ipa1: "/baɪ/", word2: "pie", ipa2: "/paɪ/", audio1: "/audios/En-us-buy.mp3", audio2: "/audios/En-us-pie.mp3", answer1: "buy", answer2: "pie" },
  { word1: "bear", ipa1: "/bɛr/", word2: "pair", ipa2: "/pɛr/", audio1: "/audios/En-us-bear.mp3", audio2: "/audios/En-us-pair.mp3", answer1: "bear", answer2: "pair" },
  { word1: "bark", ipa1: "/bɑrk/", word2: "park", ipa2: "/pɑrk/", audio1: "/audios/En-us-bark.mp3", audio2: "/audios/En-us-park.mp3", answer1: "bark", answer2: "park" },
  { word1: "pill", ipa1: "/pɪl/", word2: "bill", ipa2: "/bɪl/", audio1: "/audios/En-us-pill.mp3", audio2: "/audios/En-us-bill.mp3", answer1: "pill", answer2: "bill" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
