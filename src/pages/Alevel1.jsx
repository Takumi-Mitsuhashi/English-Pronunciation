import QuizTemplate from "./QuizTemplate";

export default function Alevel1() {

  const questions = [
  { word1: "bet", word2: "bit", ipa1: "/bɛt/", ipa2: "/bɪt/", audio1: "/audios/En-us-bet.mp3", audio2: "/audios/En-us-bit.mp3", answer1: "bet", answer2: "bit" },
  { word1: "let", word2: "lit", ipa1: "/lɛt/", ipa2: "/lɪt/", audio1: "/audios/En-us-let.mp3", audio2: "/audios/En-us-lit.mp3", answer1: "let", answer2: "lit" },
  { word1: "pit", word2: "pet", ipa1: "/pɪt/", ipa2: "/pɛt/", audio1: "/audios/En-us-pit.mp3", audio2: "/audios/En-us-pet.mp3", answer1: "pit", answer2: "pet" },
  { word1: "sit", word2: "set", ipa1: "/sɪt/", ipa2: "/sɛt/", audio1: "/audios/En-us-sit.mp3", audio2: "/audios/En-us-set.mp3", answer1: "sit", answer2: "set" },
  { word1: "better", word2: "bitter", ipa1: "/ˈbɛt.ɚ/", ipa2: "/ˈbɪt.ər/", audio1: "/audios/En-us-better.mp3", audio2: "/audios/En-us-bitter.mp3", answer1: "better", answer2: "bitter" },
  { word1: "check", word2: "chick", ipa1: "/tʃɛk/", ipa2: "/tʃɪk/", audio1: "/audios/En-us-check.mp3", audio2: "/audios/En-us-chick.mp3", answer1: "check", answer2: "chick" },
  { word1: "head", word2: "hid", ipa1: "/hɛd/", ipa2: "/hɪd/", audio1: "/audios/En-us-head.mp3", audio2: "/audios/En-us-hid.mp3", answer1: "head", answer2: "hid" },
  { word1: "rid", word2: "red", ipa1: "/rɪd/", ipa2: "/rɛd/", audio1: "/audios/En-us-rid.mp3", audio2: "/audios/En-us-red.mp3", answer1: "rid", answer2: "red" },
  { word1: "miss", word2: "mess", ipa1: "/mɪs/", ipa2: "/mɛs/", audio1: "/audios/En-us-miss.mp3", audio2: "/audios/En-us-mess.mp3", answer1: "miss", answer2: "mess" },
  { word1: "did", word2: "dead", ipa1: "/dɪd/", ipa2: "/dɛd/", audio1: "/audios/En-us-did.mp3", audio2: "/audios/En-us-dead.mp3", answer1: "did", answer2: "dead" },
];

  return <QuizTemplate questions={questions} parentPage="Apage" />;
}

// 以下のデータに新しいプロパティ、ipa1, ipa2を与える。例えば、bot → ipa1: "/bɑːt/", bat → "/bæt"。
