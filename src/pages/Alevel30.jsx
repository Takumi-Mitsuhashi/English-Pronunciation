import QuizTemplate from "./QuizTemplate";

export default function Alevel30() {
  const questions = [
    { word1: "limit", ipa1: "/ˈlɪm.ɪt/", audio1: "/audios/En-us-limit.mp3", answer1: "limit" },
    { word1: "visit", ipa1: "/ˈvɪz.ɪt/", audio1: "/audios/En-us-visit.mp3", answer1: "visit" },
    { word1: "finish", ipa1: "/ˈfɪn.ɪʃ/", audio1: "/audios/En-us-finish.mp3", answer1: "finish" },
    { word1: "village", ipa1: "/ˈvɪl.ɪdʒ/", audio1: "/audios/En-us-village.mp3", answer1: "village" },
    { word1: "foreign", ipa1: "/ˈfɔɚ.ɪn/", audio1: "/audios/En-us-foreign.mp3", answer1: "foreign" },
    { word1: "bargain", ipa1: "/ˈbɑɚ.ɡɪn/", audio1: "/audios/En-us-bargain.mp3", answer1: "bargain" },
    { word1: "diminish", ipa1: "/dɪˈmɪn.ɪʃ/", audio1: "/audios/En-us-diminish.mp3", answer1: "diminish" },
    { word1: "liquid", ipa1: "/ˈlɪk.wɪd/", audio1: "/audios/En-us-liquid.mp3", answer1: "liquid" },
    { word1: "chicken", ipa1: "/ˈtʃɪk.ɪn/", audio1: "/audios/En-us-chicken.mp3", answer1: "chicken" },
    { word1: "medicine", ipa1: "/ˈmɛd.ɪ.sən/", audio1: "/audios/En-us-medicine.mp3", answer1: "medicine" },
  ];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
