import QuizTemplate from "./QuizTemplate";

export default function Alevel27() {
  const questions = [
    { word1: "year", word2: "ear", ipa1: "/jɪɚ/", ipa2: "/ɪɚ/", audio1: "/audios/En-us-year.mp3", audio2: "/audios/En-us-ear.mp3", answer1: "year", answer2: "ear" },
    { word1: "yet", ipa1: "/jɛt/", audio1: "/audios/En-us-yet.mp3", answer1: "yet" },
    { word1: "yard", ipa1: "/jɑɚd/", audio1: "/audios/En-us-yard.mp3", answer1: "yard" },
    { word1: "yell", ipa1: "/jɛl/", audio1: "/audios/En-us-yell.mp3", answer1: "yell" },
    { word1: "use", ipa1: "/juːs/", audio1: "/audios/En-us-use.mp3", answer1: "use" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
