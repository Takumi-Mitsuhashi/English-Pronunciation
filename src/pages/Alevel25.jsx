import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "race", word2: "lace", ipa1: "/reɪs/", ipa2: "/leɪs/", audio1: "/audios/En-us-race.mp3", audio2: "/audios/En-us-lace.mp3", answer1: "race", answer2: "lace" },
  { word1: "long", word2: "wrong", ipa1: "/lɑːŋ/", ipa2: "/rɑːŋ/", audio1: "/audios/En-us-long.mp3", audio2: "/audios/En-us-wrong.mp3", answer1: "long", answer2: "wrong" },
  { word1: "rock", word2: "lock", ipa1: "/rɑːk/", ipa2: "/lɑːk/", audio1: "/audios/En-us-rock.mp3", audio2: "/audios/En-us-lock.mp3", answer1: "rock", answer2: "lock" },
  { word1: "red", word2: "led", ipa1: "/red/", ipa2: "/led/", audio1: "/audios/En-us-red.mp3", audio2: "/audios/En-us-led.mp3", answer1: "red", answer2: "led" },
  { word1: "right", word2: "light", ipa1: "/raɪt/", ipa2: "/laɪt/", audio1: "/audios/En-us-right.mp3", audio2: "/audios/En-us-light.mp3", answer1: "right", answer2: "light" },
  { word1: "load", word2: "road", ipa1: "/loʊd/", ipa2: "/roʊd/", audio1: "/audios/En-us-load.mp3", audio2: "/audios/En-us-road.mp3", answer1: "load", answer2: "road" },
  { word1: "rice", word2: "lice", ipa1: "/raɪs/", ipa2: "/laɪs/", audio1: "/audios/En-us-rice.mp3", audio2: "/audios/En-us-lice.mp3", answer1: "rice", answer2: "lice" },
  { word1: "berry", word2: "belly", ipa1: "/ˈber.i/", ipa2: "/ˈbel.i/", audio1: "/audios/En-us-berry.mp3", audio2: "/audios/En-us-belly.mp3", answer1: "berry", answer2: "belly" },
  { word1: "correct", word2: "collect", ipa1: "/kəˈrekt/", ipa2: "/kəˈlekt/", audio1: "/audios/En-us-correct.mp3", audio2: "/audios/En-us-collect.mp3", answer1: "correct", answer2: "collect" },
  { word1: "rate", word2: "late", ipa1: "/reɪt/", ipa2: "/leɪt/", audio1: "/audios/En-us-rate.mp3", audio2: "/audios/En-us-late.mp3", answer1: "rate", answer2: "late" }
];



  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
