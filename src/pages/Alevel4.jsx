import QuizTemplate from "./QuizTemplate";

export default function Alevel4() {

  const questions = [
  { word1: "fit", word2: "feet", ipa1: "/fɪt/", ipa2: "/fiːt/", audio1: "/audios/En-us-fit.mp3", audio2: "/audios/En-us-feet.mp3", answer1: "fit", answer2: "feet" },
  { word1: "chick", word2: "cheek", ipa1: "/tʃɪk/", ipa2: "/tʃiːk/", audio1: "/audios/En-us-chick.mp3", audio2: "/audios/En-us-cheek.mp3", answer1: "chick", answer2: "cheek" },
  { word1: "pick", word2: "peak", ipa1: "/pɪk/", ipa2: "/piːk/", audio1: "/audios/En-us-pick.mp3", audio2: "/audios/En-us-peak.mp3", answer1: "pick", answer2: "peak" },
  { word1: "wick", word2: "weak", ipa1: "/wɪk/", ipa2: "/wiːk/", audio1: "/audios/En-us-wick.mp3", audio2: "/audios/En-us-weak.mp3", answer1: "wick", answer2: "weak" },
  { word1: "sick", word2: "seek", ipa1: "/sɪk/", ipa2: "/siːk/", audio1: "/audios/En-us-sick.mp3", audio2: "/audios/En-us-seek.mp3", answer1: "sick", answer2: "seek" },
  { word1: "ship", word2: "sheep", ipa1: "/ʃɪp/", ipa2: "/ʃiːp/", audio1: "/audios/En-us-ship.mp3", audio2: "/audios/En-us-sheep.mp3", answer1: "ship", answer2: "sheep" },
  { word1: "chip", word2: "cheep", ipa1: "/tʃɪp/", ipa2: "/tʃiːp/", audio1: "/audios/En-us-chip.mp3", audio2: "/audios/En-us-cheep.mp3", answer1: "chip", answer2: "cheep" },
  { word1: "slip", word2: "sleep", ipa1: "/slɪp/", ipa2: "/sliːp/", audio1: "/audios/En-us-slip.mp3", audio2: "/audios/En-us-sleep.mp3", answer1: "slip", answer2: "sleep" },
  { word1: "lick", word2: "leak", ipa1: "/lɪk/", ipa2: "/liːk/", audio1: "/audios/En-us-lick.mp3", audio2: "/audios/En-us-leak.mp3", answer1: "lick", answer2: "leak" },
  { word1: "piss", word2: "peace", ipa1: "/pɪs/", ipa2: "/piːs/", audio1: "/audios/En-us-piss.mp3", audio2: "/audios/En-us-peace.mp3", answer1: "piss", answer2: "peace" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
