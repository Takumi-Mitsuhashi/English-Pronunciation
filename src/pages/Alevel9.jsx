import QuizTemplate from "./QuizTemplate";

export default function Alevel9() {

  const questions = [
  { word1: "raid", word2: "ride", ipa1: "/reɪd/", ipa2: "/raɪd/", audio1: "/audios/En-us-raid.mp3", audio2: "/audios/En-us-ride.mp3", answer1: "raid", answer2: "ride" },
  { word1: "lane", word2: "line", ipa1: "/leɪn/", ipa2: "/laɪn/", audio1: "/audios/En-us-lane.mp3", audio2: "/audios/En-us-line.mp3", answer1: "lane", answer2: "line" },
  { word1: "fright", word2: "freight", ipa1: "/fraɪt/", ipa2: "/freɪt/", audio1: "/audios/En-us-fright.mp3", audio2: "/audios/En-us-freight.mp3", answer1: "fright", answer2: "freight" },
  { word1: "slay", word2: "sly", ipa1: "/sleɪ/", ipa2: "/slaɪ/", audio1: "/audios/En-us-slay.mp3", audio2: "/audios/En-us-sly.mp3", answer1: "slay", answer2: "sly" },
  { word1: "fate", word2: "fight", ipa1: "/feɪt/", ipa2: "/faɪt/", audio1: "/audios/En-us-fate.mp3", audio2: "/audios/En-us-fight.mp3", answer1: "fate", answer2: "fight" },
  { word1: "might", word2: "mate", ipa1: "/maɪt/", ipa2: "/meɪt/", audio1: "/audios/En-us-might.mp3", audio2: "/audios/En-us-mate.mp3", answer1: "might", answer2: "mate" },
  { word1: "wane", word2: "wine", ipa1: "/weɪn/", ipa2: "/waɪn/", audio1: "/audios/En-us-wane.mp3", audio2: "/audios/En-us-wine.mp3", answer1: "wane", answer2: "wine" },
  { word1: "main", word2: "mine", ipa1: "/meɪn/", ipa2: "/maɪn/", audio1: "/audios/En-us-main.mp3", audio2: "/audios/En-us-mine.mp3", answer1: "main", answer2: "mine" },
  { word1: "pain", word2: "pine", ipa1: "/peɪn/", ipa2: "/paɪn/", audio1: "/audios/En-us-pain.mp3", audio2: "/audios/En-us-pine.mp3", answer1: "pain", answer2: "pine" },
  { word1: "rate", word2: "right", ipa1: "/reɪt/", ipa2: "/raɪt/", audio1: "/audios/En-us-rate.mp3", audio2: "/audios/En-us-right.mp3", answer1: "rate", answer2: "right" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
