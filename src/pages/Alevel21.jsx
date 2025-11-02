import QuizTemplate from "./QuizTemplate";

export default function Alevel20() {
  const questions = [
  { word1: "she", ipa1: "/ʃiː/", word2: "see", ipa2: "/siː/", audio1: "/audios/En-us-she.mp3", audio2: "/audios/En-us-see.mp3", answer1: "she", answer2: "see" },
  { word1: "so", ipa1: "/soʊ/", word2: "show", ipa2: "/ʃoʊ/", audio1: "/audios/En-us-so.mp3", audio2: "/audios/En-us-show.mp3", answer1: "so", answer2: "show" },
  { word1: "ship", ipa1: "/ʃɪp/", word2: "sip", ipa2: "/sɪp/", audio1: "/audios/En-us-ship.mp3", audio2: "/audios/En-us-sip.mp3", answer1: "ship", answer2: "sip" },
  { word1: "shine", ipa1: "/ʃaɪn/", word2: "sign", ipa2: "/saɪn/", audio1: "/audios/En-us-shine.mp3", audio2: "/audios/En-us-sign.mp3", answer1: "shine", answer2: "sign" },
  { word1: "sheet", ipa1: "/ʃiːt/", word2: "seat", ipa2: "/siːt/", audio1: "/audios/En-us-sheet.mp3", audio2: "/audios/En-us-seat.mp3", answer1: "sheet", answer2: "seat" },
  { word1: "shock", ipa1: "/ʃɑːk/", word2: "sock", ipa2: "/sɑːk/", audio1: "/audios/En-us-shock.mp3", audio2: "/audios/En-us-sock.mp3", answer1: "shock", answer2: "sock" },
  { word1: "sun", ipa1: "/sʌn/", word2: "shun", ipa2: "/ʃʌn/", audio1: "/audios/En-us-sun.mp3", audio2: "/audios/En-us-shun.mp3", answer1: "sun", answer2: "shun" },
  { word1: "same", ipa1: "/seɪm/", word2: "shame", ipa2: "/ʃeɪm/", audio1: "/audios/En-us-same.mp3", audio2: "/audios/En-us-shame.mp3", answer1: "same", answer2: "shame" },
  { word1: "shell", ipa1: "/ʃɛl/", word2: "sell", ipa2: "/sɛl/", audio1: "/audios/En-us-shell.mp3", audio2: "/audios/En-us-sell.mp3", answer1: "shell", answer2: "sell" },
  { word1: "shoe", ipa1: "/ʃuː/", word2: "sue", ipa2: "/suː/", audio1: "/audios/En-us-shoe.mp3", audio2: "/audios/En-us-sue.mp3", answer1: "shoe", answer2: "sue" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
