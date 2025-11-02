import QuizTemplate from "./QuizTemplate";

export default function Alevel32() {
  const questions = [
    { word1: "regular", ipa1: "/ˈrɛɡ.ju.lɚ/", audio1: "/audios/En-us-regular.mp3", answer1: "regular" },
    { word1: "document", ipa1: "/ˈdɑː.kju.mənt/", audio1: "/audios/En-us-document.mp3", answer1: "document" },
    { word1: "muscular", ipa1: "/ˈmʌs.kju.lɚ/", audio1: "/audios/En-us-muscular.mp3", answer1: "muscular" },
    { word1: "argument", ipa1: "/ˈɑɚɡ.ju.mənt/", audio1: "/audios/En-us-argument.mp3", answer1: "argument" },
    { word1: "population", ipa1: "/ˌpɑː.pju.ˈleɪ.ʃ(ə)n/", audio1: "/audios/En-us-population.mp3", answer1: "population" },
    { word1: "calculate", ipa1: "/ˈkæl.kjuˌleɪt/", audio1: "/audios/En-us-calculate.mp3", answer1: "calculate" },
    { word1: "circular", ipa1: "/ˈsɚː.kju.lɚ/", audio1: "/audios/En-us-circular.mp3", answer1: "circular" },
  ];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
