import QuizTemplate from "./QuizTemplate";

export default function Alevel11() {

  const questions = [
  { word1: "now", ipa1: "/naʊ/", word2: "gnaw", ipa2: "/nɑː/", audio1: "/audios/En-us-now.mp3", audio2: "/audios/En-us-gnaw.mp3", answer1: "now", answer2: "gnaw"},
  { word1: "dawn", ipa1: "/dɑːn/", word2: "down", ipa2: "/daʊn/", audio1: "/audios/En-us-dawn.mp3", audio2: "/audios/En-us-down.mp3", answer1: "dawn", answer2: "down"},
  { word1: "found", ipa1: "/faʊnd/", word2: "fond", ipa2: "/fɑːnd/", audio1: "/audios/En-us-found.mp3", audio2: "/audios/En-us-fond.mp3", answer1: "found", answer2: "fond"},
  { word1: "bound", ipa1: "/baʊnd/", word2: "bond", ipa2: "/bɑːnd/", audio1: "/audios/En-us-bound.mp3", audio2: "/audios/En-us-bond.mp3", answer1: "bound", answer2: "bond"},
  { word1: "clone", ipa1: "/kloʊn/", word2: "clown", ipa2: "/klaʊn/", audio1: "/audios/En-us-clone.mp3", audio2: "/audios/En-us-clown.mp3", answer1: "clone", answer2: "clown"},
  { word1: "tone", ipa1: "/toʊn/", word2: "town", ipa2: "/taʊn/", audio1: "/audios/En-us-tone.mp3", audio2: "/audios/En-us-town.mp3", answer1: "tone", answer2: "town"},
  { word1: "sand", ipa1: "/sænd/", word2: "sound", ipa2: "/saʊnd/", audio1: "/audios/En-us-sand.mp3", audio2: "/audios/En-us-sound.mp3", answer1: "sand", answer2: "sound"},
  { word1: "load", ipa1: "/loʊd/", word2: "loud", ipa2: "/laʊd/", audio1: "/audios/En-us-load.mp3", audio2: "/audios/En-us-loud.mp3", answer1: "load", answer2: "loud"},
  { word1: "oat", ipa1: "/oʊt/", word2: "out", ipa2: "/aʊt/", audio1: "/audios/En-us-oat.mp3", audio2: "/audios/En-us-out.mp3", answer1: "oat", answer2: "out"},
  { word1: "dote", ipa1: "/doʊt/", word2: "doubt", ipa2: "/daʊt/", audio1: "/audios/En-us-dote.mp3", audio2: "/audios/En-us-doubt.mp3", answer1: "dote", answer2: "doubt"},
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
