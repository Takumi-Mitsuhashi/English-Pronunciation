import QuizTemplate from "./QuizTemplate";

export default function Alevel26() {
  const questions = [
  { word1: "team", word2: "teen", ipa1: "/tiːm/", ipa2: "/tiːn/", audio1: "/audios/En-us-team.mp3", audio2: "/audios/En-us-teen.mp3", answer1: "team", answer2: "teen" },
  { word1: "sum", word2: "sung", word3: "sun", ipa1: "/sʌm/", ipa2: "/sʌŋ/", ipa3: "/sʌn/", audio1: "/audios/En-us-sum.mp3", audio2: "/audios/En-us-sung.mp3", audio3: "/audios/En-us-sun.mp3", answer1: "sum", answer2: "sung", answer3: "sun" },
  { word1: "beam", word2: "bean", ipa1: "/biːm/", ipa2: "/biːn/", audio1: "/audios/En-us-beam.mp3", audio2: "/audios/En-us-bean.mp3", answer1: "beam", answer2: "bean" },
  { word1: "same", word2: "sane", ipa1: "/seɪm/", ipa2: "/seɪn/", audio1: "/audios/En-us-same.mp3", audio2: "/audios/En-us-sane.mp3", answer1: "same", answer2: "sane" },
  { word1: "thin", word2: "thing", ipa1: "/θɪn/", ipa2: "/θɪŋ/", audio1: "/audios/En-us-thin.mp3", audio2: "/audios/En-us-thing.mp3", answer1: "thin", answer2: "thing" },
  { word1: "sin", word2: "sing", ipa1: "/sɪn/", ipa2: "/sɪŋ/", audio1: "/audios/En-us-sin.mp3", audio2: "/audios/En-us-sing.mp3", answer1: "sin", answer2: "sing" },
  { word1: "win", word2: "wing", ipa1: "/wɪn/", ipa2: "/wɪŋ/", audio1: "/audios/En-us-win.mp3", audio2: "/audios/En-us-wing.mp3", answer1: "win", answer2: "wing" },
  { word1: "fan", word2: "fang", ipa1: "/fæn/", ipa2: "/fæŋ/", audio1: "/audios/En-us-fan.mp3", audio2: "/audios/En-us-fang.mp3", answer1: "fan", answer2: "fang" },
  { word1: "ton", word2: "tongue", ipa1: "/tʌn/", ipa2: "/tʌŋ/", audio1: "/audios/En-us-ton.mp3", audio2: "/audios/En-us-tongue.mp3", answer1: "ton", answer2: "tongue" },
  { word1: "seem", word2: "seen", ipa1: "/siːm/", ipa2: "/siːn/", audio1: "/audios/En-us-seem.mp3", audio2: "/audios/En-us-seen.mp3", answer1: "seem", answer2: "seen" }
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
