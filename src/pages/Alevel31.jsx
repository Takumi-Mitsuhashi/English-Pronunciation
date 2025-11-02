import QuizTemplate from "./QuizTemplate";

export default function Alevel31() {
  const questions = [
    { word1: "animal", ipa1: "/ˈæn.ɪ.m(ə)l/", audio1: "/audios/En-us-animal.mp3", answer1: "animal" },
    { word1: "constitution", ipa1: "/ˌkɑːn.stəˈtuː.ʃ(ə)n/", audio1: "/audios/En-us-constitution.mp3", answer1: "constitution" },
    { word1: "family", ipa1: "/ˈfæm.(ə)l.i/", audio1: "/audios/En-us-family.mp3", answer1: "family" },
    { word1: "problem", ipa1: "/ˈprɑː.bləm/", audio1: "/audios/En-us-problem.mp3", answer1: "problem" },
    { word1: "support", ipa1: "/səˈpɔɚt/", audio1: "/audios/En-us-support.mp3", answer1: "support" },
    { word1: "occur", ipa1: "/əˈkɚː/", audio1: "/audios/En-us-occur.mp3", answer1: "occur" },
    { word1: "comfortable", ipa1: "/ˈkʌm.fɚ.tə.b(ə)l/", audio1: "/audios/En-us-comfortable.mp3", answer1: "comfortable" },
    { word1: "beautiful", ipa1: "/ˈbjuː.tə.f(ə)l/", audio1: "/audios/En-us-beautiful.mp3", answer1: "beautiful" },
    { word1: "popular", ipa1: "/ˈpɑː.pjə.lɚ/", audio1: "/audios/En-us-popular.mp3", answer1: "popular" },
    { word1: "traditional", ipa1: "/trəˈdɪʃ.(ə)n.(ə)l/", audio1: "/audios/En-us-traditional.mp3", answer1: "traditional" },
  ];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
