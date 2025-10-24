import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
    { word1: "work", ipa1: "/wərk/", audio1: "/audios/En-us-work.mp3", answer1: "work" },
    { word1: "want", ipa1: "/wɑːnt/", audio1: "/audios/En-us-want.mp3", answer1: "want" },
    { word1: "will", ipa1: "/wɪl/", audio1: "/audios/En-us-will.mp3", answer1: "will" },
    { word1: "water", ipa1: "/ˈwɑːt.ər/", audio1: "/audios/En-us-water.mp3", answer1: "water" },
    { word1: "wait", ipa1: "/weɪt/", audio1: "/audios/En-us-wait.mp3", answer1: "wait" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
