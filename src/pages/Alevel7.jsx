import QuizTemplate from "./QuizTemplate";

export default function Alevel7() {

  const questions = [
  { word1: "turn", ipa1: "/tərn/", audio1: "/audios/En-us-turn.mp3", answer1: "turn" },
  { word1: "her", ipa1: "/hər/", audio1: "/audios/En-us-her.mp3", answer1: "her" },
  { word1: "term", ipa1: "/tərm/", audio1: "/audios/En-us-term.mp3", answer1: "term" },
  { word1: "burn", ipa1: "/bərn/", audio1: "/audios/En-us-burn.mp3", answer1: "burn" },
  { word1: "learn", ipa1: "/lərn/", audio1: "/audios/En-us-learn.mp3", answer1: "learn" },
  { word1: "hurt", ipa1: "/hərt/", audio1: "/audios/En-us-hurt.mp3", answer1: "hurt" },
  { word1: "bird", ipa1: "/bərd/", audio1: "/audios/En-us-bird.mp3", answer1: "bird" },
  { word1: "first", ipa1: "/fərst/", audio1: "/audios/En-us-first.mp3", answer1: "first" },
  { word1: "nerve", ipa1: "/nərrv/", audio1: "/audios/En-us-nerve.mp3", answer1: "nerve" },
  { word1: "worse", ipa1: "/wərs/", audio1: "/audios/En-us-worse.mp3", answer1: "worse" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
