import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "busy", ipa1: "/ˈbɪzi/", audio1: "/audios/En-us-busy.mp3", answer1: "busy" },
  { word1: "music", ipa1: "/ˈmjuː.zɪk/", audio1: "/audios/En-us-music.mp3", answer1: "music" },
  { word1: "lazy", ipa1: "/ˈleɪ.zi/", audio1: "/audios/En-us-lazy.mp3", answer1: "lazy" },
  { word1: "cozy", ipa1: "/ˈkoʊ.zi/", audio1: "/audios/En-us-cozy.mp3", answer1: "cozy" },
  { word1: "amazing", ipa1: "/əˈmeɪ.zɪŋ/", audio1: "/audios/En-us-amazing.mp3", answer1: "amazing" },
  { word1: "horizon", ipa1: "/həˈraɪ.z(ə)n/", audio1: "/audios/En-us-horizon.mp3", answer1: "horizon" },
  { word1: "crazy", ipa1: "/ˈkreɪ.zi/", audio1: "/audios/En-us-crazy.mp3", answer1: "crazy" },
  { word1: "visible", ipa1: "/ˈvɪz.ə.b(ə)l/", audio1: "/audios/En-us-visible.mp3", answer1: "visible" },
  { word1: "measure", ipa1: "/ˈmeʒ.ər/", audio1: "/audios/En-us-measure.mp3", answer1: "measure" },
  { word1: "leisure", ipa1: "/ˈliːʒ.ər/", audio1: "/audios/En-us-leisure.mp3", answer1: "leisure" },
  { word1: "pleasure", ipa1: "/ˈpleʒ.ər/", audio1: "/audios/En-us-pleasure.mp3", answer1: "pleasure" },
  { word1: "usual", ipa1: "/ˈjuː.ʒə.əl/", audio1: "/audios/En-us-usual.mp3", answer1: "usual" },
  { word1: "vision", ipa1: "/ˈvɪʒ.(ə)n/", audio1: "/audios/En-us-vision.mp3", answer1: "vision" },
  { word1: "occasion", ipa1: "/əˈkeɪ.ʒ(ə)n/", audio1: "/audios/En-us-occasion.mp3", answer1: "occasion" },
  { word1: "collision", ipa1: "/kəˈlɪʒ.(ə)n/", audio1: "/audios/En-us-collision.mp3", answer1: "collision" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
