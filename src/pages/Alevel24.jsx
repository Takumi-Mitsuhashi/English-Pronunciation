import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "junk", word2: "chunk", ipa1: "/dʒʌŋk/", ipa2: "/tʃʌŋk/", audio1: "/audios/En-us-junk.mp3", audio2: "/audios/En-us-chunk.mp3", answer1: "junk", answer2: "chunk" },
  { word1: "cheap", word2: "jeep", ipa1: "/tʃiːp/", ipa2: "/dʒiːp/", audio1: "/audios/En-us-cheap.mp3", audio2: "/audios/En-us-jeep.mp3", answer1: "cheap", answer2: "jeep" },
  { word1: "joke", word2: "choke", ipa1: "/dʒoʊk/", ipa2: "/tʃoʊk/", audio1: "/audios/En-us-joke.mp3", audio2: "/audios/En-us-choke.mp3", answer1: "joke", answer2: "choke" },
  { word1: "choose", word2: "juice", ipa1: "/tʃuːz/", ipa2: "/dʒuːs/", audio1: "/audios/En-us-choose.mp3", audio2: "/audios/En-us-juice.mp3", answer1: "choose", answer2: "juice" },
  { word1: "chop", word2: "job", ipa1: "/tʃɑːp/", ipa2: "/dʒɑːb/", audio1: "/audios/En-us-chop.mp3", audio2: "/audios/En-us-job.mp3", answer1: "chop", answer2: "job" },
  { word1: "giant", word2: "genre", ipa1: "/ˈdʒaɪ.ənt/", ipa2: "/ˈʒɑːn.rə/", audio1: "/audios/En-us-giant.mp3", audio2: "/audios/En-us-genre.mp3", answer1: "giant", answer2: "genre" },
  { word1: "region", word2: "vision", ipa1: "/ˈriː.dʒ(ə)n/", ipa2: "/ˈvɪʒ.(ə)n/", audio1: "/audios/En-us-region.mp3", audio2: "/audios/En-us-vision.mp3", answer1: "region", answer2: "vision" },
  { word1: "engine", word2: "horizon", ipa1: "/ˈɛn.dʒən/", ipa2: "/həˈraɪ.z(ə)n/", audio1: "/audios/En-us-engine.mp3", audio2: "/audios/En-us-horizon.mp3", answer1: "engine", answer2: "horizon" },
  { word1: "danger", word2: "treasure", ipa1: "/ˈdeɪn.dʒɚ/", ipa2: "/ˈtrɛʒ.ɚ/", audio1: "/audios/En-us-danger.mp3", audio2: "/audios/En-us-treasure.mp3", answer1: "danger", answer2: "treasure" },
  { word1: "digital", word2: "visible", ipa1: "/ˈdɪdʒ.ə.t(ə)l/", ipa2: "/ˈvɪz.ə.b(ə)l/", audio1: "/audios/En-us-digital.mp3", audio2: "/audios/En-us-visible.mp3", answer1: "digital", answer2: "visible" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
