import QuizTemplate from "./QuizTemplate";

export default function Alevel3() {
  
 const questions = [
  { word1: "luck", word2: "look", ipa1: "/lʌk/", ipa2: "/lʊk/", audio1: "/audios/En-us-luck.mp3", audio2: "/audios/En-us-look.mp3", answer1: "luck", answer2: "look" },
  { word1: "putt", word2: "put", ipa1: "/pʌt/", ipa2: "/pʊt/", audio1: "/audios/En-us-putt.mp3", audio2: "/audios/En-us-put.mp3", answer1: "putt", answer2: "put" },
  { word1: "buck", word2: "book", ipa1: "/bʌk/", ipa2: "/bʊk/", audio1: "/audios/En-us-buck.mp3", audio2: "/audios/En-us-book.mp3", answer1: "buck", answer2: "book" },
  { word1: "cud", word2: "could", ipa1: "/kʌd/", ipa2: "/kʊd/", audio1: "/audios/En-us-cud.mp3", audio2: "/audios/En-us-could.mp3", answer1: "cud", answer2: "could" },
  { word1: "stud", word2: "stood", ipa1: "/stʌd/", ipa2: "/stʊd/", audio1: "/audios/En-us-stud.mp3", audio2: "/audios/En-us-stood.mp3", answer1: "stud", answer2: "stood" },
  { word1: "lock", word2: "luck", ipa1: "/lɑːk/", ipa2: "/lʌk/", audio1: "/audios/En-us-lock.mp3", audio2: "/audios/En-us-luck.mp3", answer1: "lock", answer2: "luck" },
  { word1: "stuck", word2: "stock", ipa1: "/stʌk/", ipa2: "/stɑːk/", audio1: "/audios/En-us-stuck.mp3", audio2: "/audios/En-us-stock.mp3", answer1: "stuck", answer2: "stock" },
  { word1: "cup", word2: "cop", ipa1: "/kʌp/", ipa2: "/kɑːp/", audio1: "/audios/En-us-cup.mp3", audio2: "/audios/En-us-cop.mp3", answer1: "cup", answer2: "cop" },
  { word1: "duck", word2: "dock", ipa1: "/dʌk/", ipa2: "/dɑːk/", audio1: "/audios/En-us-duck.mp3", audio2: "/audios/En-us-dock.mp3", answer1: "duck", answer2: "dock" },
  { word1: "putt", word2: "pot", ipa1: "/pʌt/", ipa2: "/pɑːt/", audio1: "/audios/En-us-putt.mp3", audio2: "/audios/En-us-pot.mp3", answer1: "putt", answer2: "pot" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
