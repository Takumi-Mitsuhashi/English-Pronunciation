import QuizTemplate from "./QuizTemplate";

export default function Alevel6() {

  const questions = [
  { word1: "full", word2: "fool", ipa1: "/fʊl/", ipa2: "/fuːl/", audio1: "/audios/En-us-full.mp3", audio2: "/audios/En-us-fool.mp3", answer1: "full", answer2: "fool" },
  { word1: "pull", word2: "pool", ipa1: "/pʊl/", ipa2: "/puːl/", audio1: "/audios/En-us-pull.mp3", audio2: "/audios/En-us-pool.mp3", answer1: "pull", answer2: "pool" },
  { word1: "soot", word2: "suit", ipa1: "/sʊt/", ipa2: "/suːt/", audio1: "/audios/En-us-soot.mp3", audio2: "/audios/En-us-suit.mp3", answer1: "soot", answer2: "suit" },
  { word1: "mood", ipa1: "/muːd/", audio1: "/audios/En-us-mood.mp3", answer1: "mood" },
  { word1: "cool", ipa1: "/kuːl/", audio1: "/audios/En-us-cool.mp3", answer1: "cool" },
  { word1: "chew", ipa1: "/tʃuː/", audio1: "/audios/En-us-chew.mp3", answer1: "chew" },
  { word1: "tooth", ipa1: "/tuːθ/", audio1: "/audios/En-us-tooth.mp3", answer1: "tooth" },
  { word1: "shoot", ipa1: "/ʃuːt/", audio1: "/audios/En-us-shoot.mp3", answer1: "shoot" },
  { word1: "bloom", ipa1: "/bluːm/", audio1: "/audios/En-us-bloom.mp3", answer1: "bloom" },
  { word1: "tool", ipa1: "/tuːl/", audio1: "/audios/En-us-tool.mp3", answer1: "tool" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
