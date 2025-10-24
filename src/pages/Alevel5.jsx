import QuizTemplate from "./QuizTemplate";

export default function Alevel5() {

  const questions = [
  { word1: "bot", word2: "bat", ipa1: "/bɑːt/", ipa2: "/bæt/", audio1: "/audios/En-us-bot.mp3", audio2: "/audios/En-us-bat.mp3", answer1: "bot", answer2: "bat" },
  { word1: "cop", word2: "cap", ipa1: "/kɑːp/", ipa2: "/kæp/", audio1: "/audios/En-us-cop.mp3", audio2: "/audios/En-us-cap.mp3", answer1: "cop", answer2: "cap" },
  { word1: "pock", word2: "pack", ipa1: "/pɑːk/", ipa2: "/pæk/", audio1: "/audios/En-us-pock.mp3", audio2: "/audios/En-us-pack.mp3", answer1: "pock", answer2: "pack" },
  { word1: "pot", word2: "pat", ipa1: "/pɑːt/", ipa2: "/pæt/", audio1: "/audios/En-us-pot.mp3", audio2: "/audios/En-us-pat.mp3", answer1: "pot", answer2: "pat" },
  { word1: "hot", word2: "hat", ipa1: "/hɑːt/", ipa2: "/hæt/", audio1: "/audios/En-us-hot.mp3", audio2: "/audios/En-us-hat.mp3", answer1: "hot", answer2: "hat" },
  { word1: "lop", word2: "lap", ipa1: "/lɑːp/", ipa2: "/læp/", audio1: "/audios/En-us-lop.mp3", audio2: "/audios/En-us-lap.mp3", answer1: "lop", answer2: "lap" },
  { word1: "top", word2: "tap", ipa1: "/tɑːp/", ipa2: "/tæp/", audio1: "/audios/En-us-top.mp3", audio2: "/audios/En-us-tap.mp3", answer1: "top", answer2: "tap" },
  { word1: "sock", word2: "sack", ipa1: "/sɑːk/", ipa2: "/sæk/", audio1: "/audios/En-us-sock.mp3", audio2: "/audios/En-us-sack.mp3", answer1: "sock", answer2: "sack" },
  { word1: "bod", word2: "bad", ipa1: "/bɑːd/", ipa2: "/bæd/", audio1: "/audios/En-us-bod.mp3", audio2: "/audios/En-us-bad.mp3", answer1: "bod", answer2: "bad" },
  { word1: "mod", word2: "mad", ipa1: "/mɑːd/", ipa2: "/mæd/", audio1: "/audios/En-us-mod.mp3", audio2: "/audios/En-us-mad.mp3", answer1: "mod", answer2: "mad" },
];



  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
