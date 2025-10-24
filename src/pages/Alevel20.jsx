import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "sink", ipa1: "/sɪŋk/", word2: "think", ipa2: "/θɪŋk/", audio1: "/audios/En-us-sink.mp3", audio2: "/audios/En-us-think.mp3", answer1: "sink", answer2: "think" },
  { word1: "thank", ipa1: "/θæŋk/", word2: "sank", ipa2: "/sæŋk/", audio1: "/audios/En-us-thank.mp3", audio2: "/audios/En-us-sank.mp3", answer1: "thank", answer2: "sank" },
  { word1: "sought", ipa1: "/sɑːt/", word2: "thought", ipa2: "/θɑːt/", audio1: "/audios/En-us-sought.mp3", audio2: "/audios/En-us-thought.mp3", answer1: "sought", answer2: "thought" },
  { word1: "sick", ipa1: "/sɪk/", word2: "thick", ipa2: "/θɪk/", audio1: "/audios/En-us-sick.mp3", audio2: "/audios/En-us-thick.mp3", answer1: "sick", answer2: "thick" },
  { word1: "theme", ipa1: "/θiːm/", word2: "seem", ipa2: "/siːm/", audio1: "/audios/En-us-theme.mp3", audio2: "/audios/En-us-seem.mp3", answer1: "theme", answer2: "seem" },
  { word1: "some", ipa1: "/sʌm/", word2: "thumb", ipa2: "/θʌm/", audio1: "/audios/En-us-some.mp3", audio2: "/audios/En-us-thumb.mp3", answer1: "some", answer2: "thumb" },
  { word1: "sing", ipa1: "/sɪŋ/", word2: "thing", ipa2: "/θɪŋ/", audio1: "/audios/En-us-sing.mp3", audio2: "/audios/En-us-thing.mp3", answer1: "sing", answer2: "thing" },
  { word1: "though", ipa1: "/ðoʊ/", word2: "dough", ipa2: "/doʊ/", audio1: "/audios/En-us-though.mp3", audio2: "/audios/En-us-dough.mp3", answer1: "though", answer2: "dough" },
  { word1: "day", ipa1: "/deɪ/", word2: "they", ipa2: "/ðeɪ/", audio1: "/audios/En-us-day.mp3", audio2: "/audios/En-us-they.mp3", answer1: "day", answer2: "they" },
  { word1: "dose", ipa1: "/doʊs/", word2: "those", ipa2: "/ðoʊz/", audio1: "/audios/En-us-dose.mp3", audio2: "/audios/En-us-those.mp3", answer1: "dose", answer2: "those" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
