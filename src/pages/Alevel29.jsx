import QuizTemplate from "./QuizTemplate";

export default function Alevel29() {
  const questions = [
    { word1: "funny", ipa1: "/ˈfʌn.i/", audio1: "/audios/En-us-funny.mp3", answer1: "funny" },
    { word1: "busy", ipa1: "/ˈbɪz.i/", audio1: "/audios/En-us-busy.mp3", answer1: "busy" },
    { word1: "money", ipa1: "/ˈmʌn.i/", audio1: "/audios/En-us-money.mp3", answer1: "money" },
    { word1: "city", ipa1: "/ˈsɪt.i/", audio1: "/audios/En-us-city.mp3", answer1: "city" },
    { word1: "honey", ipa1: "/ˈhʌn.i/", audio1: "/audios/En-us-honey.mp3", answer1: "honey" },
    { word1: "movie", ipa1: "/ˈmuː.vi/", audio1: "/audios/En-us-movie.mp3", answer1: "movie" },
    { word1: "cookie", ipa1: "/ˈkʊk.i/", audio1: "/audios/En-us-cookie.mp3", answer1: "cookie" },
    { word1: "library", ipa1: "/ˈlaɪ.brɛr.i/", audio1: "/audios/En-us-library.mp3", answer1: "library" },
    { word1: "gallery", ipa1: "/ˈɡæl.ɚ.i/", audio1: "/audios/En-us-gallery.mp3", answer1: "gallery" },
    { word1: "memory", ipa1: "/ˈmɛm.(ə)r.i/", audio1: "/audios/En-us-memory.mp3", answer1: "memory" },
  ];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
