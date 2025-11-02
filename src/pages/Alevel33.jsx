import QuizTemplate from "./QuizTemplate";

export default function Alevel33() {
  const questions = [
    { word1: "matter", ipa1: "/ˈmæt.ɚ/", audio1: "/audios/En-us-matter.mp3", answer1: "matter" },
    { word1: "calendar", ipa1: "/ˈkæl.ən.dɚ/", audio1: "/audios/En-us-calendar.mp3", answer1: "calendar" },
    { word1: "teacher", ipa1: "/ˈtiː.tʃɚ/", audio1: "/audios/En-us-teacher.mp3", answer1: "teacher" },
    { word1: "doctor", ipa1: "/ˈdɑːk.tɚ/", audio1: "/audios/En-us-doctor.mp3", answer1: "doctor" },
    { word1: "confirmation", ipa1: "/ˌkɑːn.fɚˈmeɪ.ʃ(ə)n/", audio1: "/audios/En-us-confirmation.mp3", answer1: "confirmation" },
    { word1: "survive", ipa1: "/sɚˈvaɪv/", audio1: "/audios/En-us-survive.mp3", answer1: "survive" },
    { word1: "nature", ipa1: "/ˈneɪ.tʃɚ/", audio1: "/audios/En-us-nature.mp3", answer1: "nature" },
    { word1: "standard", ipa1: "/ˈstæn.dɚd/", audio1: "/audios/En-us-standard.mp3", answer1: "standard" },
    { word1: "brother", ipa1: "/ˈbrʌð.ɚ/", audio1: "/audios/En-us-brother.mp3", answer1: "brother" },
    { word1: "energy", ipa1: "/ˈɛn.ɚ.dʒi/", audio1: "/audios/En-us-energy.mp3", answer1: "energy" },
  ];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}

