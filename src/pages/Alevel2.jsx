import QuizTemplate from "./QuizTemplate";

export default function Alevel2() { 

  const questions = [
  { word1: "men", word2: "man", ipa1: "/mɛn/", ipa2: "/mæn/", audio1: "/audios/En-us-men.mp3", audio2: "/audios/En-us-man.mp3", answer1: "men", answer2: "man" },
  { word1: "pet", word2: "pat", ipa1: "/pɛt/", ipa2: "/pæt/", audio1: "/audios/En-us-pet.mp3", audio2: "/audios/En-us-pat.mp3", answer1: "pet", answer2: "pat" },
  { word1: "said", word2: "sad", ipa1: "/sɛd/", ipa2: "/sæd/", audio1: "/audios/En-us-said.mp3", audio2: "/audios/En-us-sad.mp3", answer1: "said", answer2: "sad" },
  { word1: "beg", word2: "bag", ipa1: "/bɛg/", ipa2: "/bæg/", audio1: "/audios/En-us-beg.mp3", audio2: "/audios/En-us-bag.mp3", answer1: "beg", answer2: "bag" },
  { word1: "led", word2: "lad", ipa1: "/lɛd/", ipa2: "/læd/", audio1: "/audios/En-us-led.mp3", audio2: "/audios/En-us-lad.mp3", answer1: "led", answer2: "lad" },
  { word1: "jem", word2: "jam", ipa1: "/dʒɛm/", ipa2: "/dʒæm/", audio1: "/audios/En-us-jem.mp3", audio2: "/audios/En-us-jam.mp3", answer1: "jem", answer2: "jam" },
  { word1: "pen", word2: "pan", ipa1: "/pɛn/", ipa2: "/pæn/", audio1: "/audios/En-us-pen.mp3", audio2: "/audios/En-us-pan.mp3", answer1: "pen", answer2: "pan" },
  { word1: "mess", word2: "mass", ipa1: "/mɛs/", ipa2: "/mæs/", audio1: "/audios/En-us-mess.mp3", audio2: "/audios/En-us-mass.mp3", answer1: "mess", answer2: "mass" },
  { word1: "set", word2: "sat", ipa1: "/sɛt/", ipa2: "/sæt/", audio1: "/audios/En-us-set.mp3", audio2: "/audios/En-us-sat.mp3", answer1: "set", answer2: "sat" },
  { word1: "bet", word2: "bat", ipa1: "/bɛt/", ipa2: "/bæt/", audio1: "/audios/En-us-bet.mp3", audio2: "/audios/En-us-bat.mp3", answer1: "bet", answer2: "bat" },
];


  return <QuizTemplate questions={questions} parentPage="Apage" />;
}
