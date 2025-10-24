import QuizTemplate from "./QuizTemplate";

export default function Alevel17() {
  const questions = [
  { word1: "do", ipa1: "/du/", word2: "two", ipa2: "/tuː/", audio1: "/audios/En-us-do.mp3", audio2: "/audios/En-us-two.mp3", answer1: "do", answer2: "two" },
  { word1: "die", ipa1: "/daɪ/", word2: "tie", ipa2: "/taɪ/", audio1: "/audios/En-us-die.mp3", audio2: "/audios/En-us-tie.mp3", answer1: "die", answer2: "tie" },
  { word1: "down", ipa1: "/daʊn/", word2: "town", ipa2: "/taʊn/", audio1: "/audios/En-us-down.mp3", audio2: "/audios/En-us-town.mp3", answer1: "down", answer2: "town" },
  { word1: "deem", ipa1: "/diːm/", word2: "team", ipa2: "/tiːm/", audio1: "/audios/En-us-deem.mp3", audio2: "/audios/En-us-team.mp3", answer1: "deem", answer2: "team" },
  { word1: "tier", ipa1: "/tɪr/", word2: "deer", ipa2: "/dɪr/", audio1: "/audios/En-us-tier.mp3", audio2: "/audios/En-us-deer.mp3", answer1: "tier", answer2: "deer" },
  { word1: "dare", ipa1: "/dɛr/", word2: "tear", ipa2: "/tɛr/", audio1: "/audios/En-us-dare.mp3", audio2: "/audios/En-us-tear.mp3", answer1: "dare", answer2: "tear" },
  { word1: "touch", ipa1: "/tʌtʃ/", word2: "Dutch", ipa2: "/dʌtʃ/", audio1: "/audios/En-us-touch.mp3", audio2: "/audios/En-us-Dutch.mp3", answer1: "touch", answer2: "Dutch" },
  { word1: "dense", ipa1: "/dɛns/", word2: "tense", ipa2: "/tɛns/", audio1: "/audios/En-us-dense.mp3", audio2: "/audios/En-us-tense.mp3", answer1: "dense", answer2: "tense" },
  { word1: "try", ipa1: "/traɪ/", word2: "dry", ipa2: "/draɪ/", audio1: "/audios/En-us-try.mp3", audio2: "/audios/En-us-dry.mp3", answer1: "try", answer2: "dry" },
  { word1: "tuck", ipa1: "/tʌk/", word2: "duck", ipa2: "/dʌk/", audio1: "/audios/En-us-tuck.mp3", audio2: "/audios/En-us-duck.mp3", answer1: "tuck", answer2: "duck" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
