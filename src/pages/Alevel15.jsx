import QuizTemplate from "./QuizTemplate";

export default function Alevel15() {

  const questions = [
  { word1: "sure", ipa1: "/ʃʊr/", audio1: "/audios/En-us-sure.mp3", answer1: "sure"},
  { word1: "pure", ipa1: "/pjʊr/", audio1: "/audios/En-us-pure.mp3", answer1: "pure"},
  { word1: "cure", ipa1: "/kjʊr/", audio1: "/audios/En-us-cure.mp3", answer1: "cure"},
  { word1: "secure", ipa1: "/sɪˈkjʊr/", audio1: "/audios/En-us-secure.mp3", answer1: "secure"},
  { word1: "obscure", ipa1: "/əbˈskjʊr/", audio1: "/audios/En-us-obscure.mp3", answer1: "obscure"},
  { word1: "mature", ipa1: "/məˈtjʊr/", audio1: "/audios/En-us-mature.mp3", answer1: "mature"},
  { word1: "ensure", ipa1: "/ɪnˈʃʊr/", audio1: "/audios/En-us-ensure.mp3", answer1: "ensure"},
  { word1: "procure", ipa1: "/prəˈkjʊr/", audio1: "/audios/En-us-procure.mp3", answer1: "procure"},
  { word1: "endure", ipa1: "/ɪnˈdʊr/", audio1: "/audios/En-us-endure.mp3", answer1: "endure"},
  { word1: "tour", ipa1: "/tʊr/", audio1: "/audios/En-us-tour.mp3", answer1: "tour"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
