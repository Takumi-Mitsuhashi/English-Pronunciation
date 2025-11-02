import QuizTemplate from "./QuizTemplate";

export default function Alevel7() {

  const questions = [
  { word1: "turn", ipa1: "/tɚːn/", audio1: "/audios/En-us-turn.mp3", answer1: "turn" },
  { word1: "her", ipa1: "/hɚː/", audio1: "/audios/En-us-her.mp3", answer1: "her" },
  { word1: "term", ipa1: "/tɚːm/", audio1: "/audios/En-us-term.mp3", answer1: "term" },
  { word1: "burn", ipa1: "/bɚːn/", audio1: "/audios/En-us-burn.mp3", answer1: "burn" },
  { word1: "learn", ipa1: "/lɚːn/", audio1: "/audios/En-us-learn.mp3", answer1: "learn" },
  { word1: "hurt", ipa1: "/hɚːt/", audio1: "/audios/En-us-hurt.mp3", answer1: "hurt" },
  { word1: "bird", ipa1: "/bɚːd/", audio1: "/audios/En-us-bird.mp3", answer1: "bird" },
  { word1: "first", ipa1: "/fɚːst/", audio1: "/audios/En-us-first.mp3", answer1: "first" },
  { word1: "nerve", ipa1: "/nɚːv/", audio1: "/audios/En-us-nerve.mp3", answer1: "nerve" },
  { word1: "worse", ipa1: "/wɚːs/", audio1: "/audios/En-us-worse.mp3", answer1: "worse" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
