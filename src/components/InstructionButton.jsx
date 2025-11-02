import styles from "./instructionbutton.module.css";
import question8B from "../assets/icons/question_8B7DBE.svg";
import { useState } from "react";

export default function InstructionButton({ label, ruby }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleInstruction = () => setIsVisible((prev) => !prev);

  // === 各「母音タイプ」に応じた説明内容を定義 ===
  const content = {
    短母音: (
      <>
        <p>「短い」母音のことです。ここでは、「気の抜けた」母音と覚えて下さい。</p>

        <p className={styles.subtitle}>
          <strong>― じゃあ、「短い」があれば、「長い」もあるの？</strong>
        </p>
        <p>良い所に気づきましたね。そうです、英語には短母音と長母音があります。</p>

        <p className={styles.subtitle}>
          <strong>― どう違うの？</strong>
        </p>
        <p>
          日本語の伸ばし棒を思い浮かべて下さい。例えば、「イ」と「イー」がありますね。英語でも、
          「イ」に近い音でいうと、<strong>pickの/ɪ/</strong>と
          <strong>peakの/iː/</strong>があります。「ː」のマークが長母音の目印です。
        </p>

        <p className={styles.subtitle}>
          <strong>― なるほど！それでそれで？</strong>
        </p>
        <p>ノッテきましたね。アメリカ英語には、５種類の短母音があります。</p>
        <span>※ 厳密には６種類ありますが、詳しくはどこかでお話します。</span>

        <ul className={styles.firstlist}>
          <li><strong>　/ɪ/</strong></li>
          <li><strong>　/ɛ/</strong></li>
          <li><strong>　/æ/</strong></li>
          <li><strong>　/ʊ/</strong></li>
          <li><strong>　/ʌ/</strong></li>
        </ul>

        <p>この５つです。では、詳しく見ていきましょうか。</p>
        <p>
          今回のポイントは<strong>「脱力」</strong>です。藤井風のような脱力感を意識しましょう。
        </p>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /ɪ/</strong></li>
          <p className={styles.examplewords}>pick、sit、finish</p>
          <p>気の抜けた「イ」です。「イ」と「エ」の真ん中の音なので、次の/e/と聞き間違えることがあります。</p>

          <li><strong>2. /ɛ/</strong></li>
          <p className={styles.examplewords}>get、set、collect</p>
          <p>日本語の「エ」に近い音ですが、「ア」に似た響きがあり、次の/æ/と聞き間違えることがあります。</p>

          <li><strong>3. /æ/</strong></li>
          <p className={styles.examplewords}>apple、can、thank</p>
          <p>「ア」と「エ」の真ん中の音、とよく言われます。のどを締め付けるように発音すると効果的です。</p>

          <li><strong>4. /ʊ/</strong></li>
          <p className={styles.examplewords}>look、book、likelihood</p>
          <p>唇を丸め、ゆるく喉の奥の方で「ウ」と発音してみましょう。</p>

          <li><strong>5. /ʌ/</strong></li>
          <p className={styles.examplewords}>luck、jump、punch</p>
          <p>「ア」と「オ」の真ん中の音で、口をあまり開かずに口の少し奥のほうで「ア」と発してみましょう。</p>
        </ul>

        <p className={styles.subtitle}>
          <strong>― ん～、むずかしいなぁ...</strong>
        </p>
        <p>
          日本語の音に引っ張られてしまうと区別するのに苦労しますよね。何度も聞いて、口に出して、
          発音の練習を繰り返していきましょう！
        </p>

        <p className={styles.last}>今日の講義は「{label}」についてでした。それでは、また来週～。</p>
      </>
    ),

    長母音: (
      <>
      <p>「長い」母音のことです。日本語の伸ばし棒をイメージしましょう。キーワードは「緊張」です。</p>
      
      <p className={styles.subtitle}>
          <strong>― 緊張した母音？</strong>
      </p>
      <p>そうです。口を大きく開いたり、尖らせたりして、筋肉がこわばるイメージです。例えば、peakの/iː/でいうと、口を横に大きく開きますよね。</p>

      <p className={styles.subtitle}>
          <strong>― なるほど！それでそれで？</strong>
      </p>
      <p>ノッテきましたね。アメリカ英語には、４種類の長母音があります。</p>
      <span>※ 厳密には５種類ありますが、詳しくはどこかでお話します。</span>
      
      <ul className={styles.firstlist}>
          <li><strong>　/iː/</strong></li>
          <li><strong>　/uː/</strong></li>
          <li><strong>　/ɑː/</strong></li>
          <li><strong>　/ɚː/</strong></li>
        </ul>

        <p>この４つです。では、詳しく見ていきましょうか。</p>
        <p>
          今回のポイントは<strong>「緊張」と「伸ばし棒」</strong>です。
        </p>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /iː/</strong></li>
          <p className={styles.examplewords}>see、peak、these</p>
          <p>日本語の「イー」と大体同じですが、口を大きく横に開くことを意識しましょう。</p>

          <li><strong>2. /ɑː/</strong></li>
          <p className={styles.examplewords}>father、cause、law</p>
          <p>日本語の「ア」よりも大きく口を開け、口の奥の方から「アー」と長めに発音しましょう。</p>

          <li><strong>3. /uː/</strong></li>
          <p className={styles.examplewords}>food、route、cool</p>
          <p>唇を丸めて突き出すようにして、「ウー」と発音しましょう。</p>

          <li><strong>4. /ɚː/</strong></li>
          <p className={styles.examplewords}>bird、first、curl</p>
          <p>Rの音が入る母音です。力を抜き、口を脱力させ、舌を巻いてRの音を意識しながら「ウー」と発音してみましょう。</p>
        </ul>
        <p className={styles.subtitle}>
          <strong>― 短母音よりは、わかるかも！でも最後の音がむずかしいなぁ...</strong>
        </p>
        <p>
          やはり、練習あるのみです。何度も聞いて、口に出して、発音の練習を繰り返していきましょう！
        </p>

        <p className={styles.last}>今日の講義は「{label}」についてでした。それでは、また来週～。</p>
      </>
    ),

    二重母音: (
      <>
      <p>「２つで１つ」の母音です。</p>
      <p className={styles.subtitle}>
          <strong>― ２つで１つ？</strong>
      </p>
      <p>そうです。実際に具体例を見た方が早いかもしれませんね！</p>
      <br/>
      <p>アメリカ英語の二重母音は、大きく２つの分類に分けられます。</p>
      <br/>
      <p><strong>１．　Rの音を含むもの</strong></p>
      <p><strong>２．　Rの音を含まないもの</strong>　　☚</p>
      <br/>
      <p>今回は、「Rの音を含まないもの」について扱っていきます。以下の５種類です。</p>
      <ul className={styles.firstlist}>
          <li><strong>　/eɪ/</strong></li>
          <li><strong>　/aɪ/</strong></li>
          <li><strong>　/ɔɪ/</strong></li>
          <li><strong>　/aʊ/</strong></li>
          <li><strong>　/oʊ/</strong></li>
      </ul>
      <br/>
      <p>では、詳しく見ていきましょうか。</p>
      <br/>
        <p>
          今回のポイントは<strong>「２つで１つ」</strong>です。
        </p>
        <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /eɪ/</strong></li>
          <p className={styles.examplewords}>cake、main、base</p>
          <p>/ɛ/よりも高い舌の位置から始まり、/ɪ/に向かう。「エ」のあとに軽く「イ」を添える</p>

          <li><strong>2. /aɪ/</strong></li>
          <p className={styles.examplewords}>like、fight、nice</p>
          <p>「ア」の音から始まり、「イ」と「エ」の間あたりの音へ向かう。</p>

          <li><strong>3. /ɔɪ/</strong></li>
          <p className={styles.examplewords}>choice、boy、exploit</p>
          <p>「オ」より口をやや開いた音、「オ」寄りの「ア」、で始まり、「イ」と「エ」の中間へ向かう。</p>

          <li><strong>4. /aʊ/</strong></li>
          <p className={styles.examplewords}>mouse、count、how</p>
          <p>日本語の「ア」に近い音から始まり、「ウ」と「オ」の間の音へ向かう。</p>

          <li><strong>5. /oʊ/</strong></li>
          <p className={styles.examplewords}>home、road、grow</p>
          <p>日本語の「オ」の後に軽く「ウ」を添える。</p>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― 今回は分かりやすかった！</strong>
        </p>
        <p>
          いいですね！その調子です。「２つで１つ」であること、２つ目の母音が１つ目より脱力した音になることを心がけましょう。
        </p>

        <p className={styles.last}>今日の講義は「{label}」についてでした。それでは、また来週～。</p>
      </>
    ),

    Rの二重母音: (
      <>
      <p>「Rの音を含む」二重母音のことです。前回、二重母音は大きく２種類に分かれることを話しました。</p>
        <p className={styles.subtitle}>
            <strong>― 　.　.　.</strong>
        </p>
        <p>振り返っていきましょうか笑</p>
        <br/>
        <p>二重母音は、２種類あります。</p>
        <p><strong>１．　Rの音を含まないもの</strong></p>
        <p><strong>２．　Rの音を含まないもの</strong>　　☚</p>
        <br/>
        <p>これが前回紹介した「Rの音を含まない」ものでしたね。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/eɪ/</strong></li>
          <li><strong>　/aɪ/</strong></li>
          <li><strong>　/ɔɪ/</strong></li>
          <li><strong>　/aʊ/</strong></li>
          <li><strong>　/oʊ/</strong></li>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― 思い出した！</strong>
        </p>
        <p>よかったです...</p>
        <br/>
        <p>そして、こちらが今回紹介する「Rの音を含む」二重母音です。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/ɪɚ/</strong></li>
          <li><strong>　/ɛɚ/</strong></li>
          <li><strong>　/ɑɚ/</strong></li>
          <li><strong>　/ɔɚ/</strong></li>
          <li><strong>　/ʊɚ/</strong></li>
        </ul>
        <p className={styles.subtitle}>
          <strong>― なんか複雑でむずかしそう...</strong>
        </p>
        <p>Rの音さえマスターしてしまえば、なんてことないですよ。</p>
        <br/>
        <p>詳しく見ていきましょう。</p>
        <br/>
        <p>
          今回のポイントは<strong>「２つで１つ」、「Rの音」</strong>です。
        </p>
        <br/>
      <div className={styles.subtitle2}>{label}</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /ɪɚ/</strong></li>
          <p className={styles.examplewords}>near、fear、interfere</p>
          <p>/ɪ/、やや「エ」に近い「イ」の音に、長母音の/ɚ/の音を軽く添えるイメ―ジです。</p>

          <li><strong>2. /ɛɚ/</strong></li>
          <p className={styles.examplewords}>air、share、scary</p>
          <p>/ɛ/、やや「ア」に近い「エ」の音に、長母音の/ɚ/の音を軽く添えるイメ―ジです。</p>

          <li><strong>3. /ɑɚ/</strong></li>
          <p className={styles.examplewords}>car、park、heart</p>
          <p>/ɑ/、日本語よりも口を大きく開き、のどの奥で発音する「ア」の音に、長母音の/ɚ/の音を軽く添えるイメ―ジです。</p>

          <li><strong>4. /ɔɚ/</strong></li>
          <p className={styles.examplewords}>four、shore、more</p>
          <p>/ɔ/、「ア」寄りの「オ」の音に、長母音の/ɚ/の音を軽く添えるイメ―ジです。</p>
        
          <li><strong>5. /ʊɚ/</strong></li>
          <p className={styles.examplewords}>your、cure、endure</p>
          <p>/ʊ/、唇を丸め、ゆるく喉の奥で発音する「ウ」の音に、長母音の/ɚ/の音を軽く添えるイメ―ジです。</p>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― 今回も中々ハードだったけれど、英語の母音について分かってきた気がする！</strong>
        </p>
        <p>
          それを聞けて感動しました。惜しまれつつも、次回が母音をご紹介するラストの回になります。
        </p>
        <p className={styles.last}>今日の講義は「{label}」についてでした。それでは、また来週～。</p>
      </>
    ),
    弱母音:(
      <>
      <p>「アクセントの置かれない」母音のことです。</p>
      <p className={styles.subtitle}>
          <strong>― アクセントって？</strong>
      </p>
      <p>アクセントというのは、単語の音の中で最も強く発音する部分です。例えば、banana /bə'næn.ə/ でいうと、/æ/の部分にアクセントがきて、他２つの/ə/にはアクセントがありません。</p>
      <br/>
      <p>今まで触れてきた母音は、全てアクセントの置かれる母音です。ちなみに、上の/ə/は今回紹介する弱母音の１つで「シュワ―、曖昧母音」と呼ばれています。</p>
      
      <p className={styles.subtitle}>
          <strong>― なるほど～、弱母音には他にどのようなものがあるの？</strong>
      </p>
      <p>それでは、具体的に見ていきましょうか。</p>
      <p>こちらの５つが今回紹介する弱母音です。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/ɪ/</strong></li>
          <li><strong>　/i/</strong></li>
          <li><strong>　/ə/</strong></li>
          <li><strong>　/ju/</strong></li>
          <li><strong>　/ɚ/</strong></li>
        </ul>
        <p className={styles.subtitle}>
          <strong>― あれ、１つ目の/ɪ/は最初の方でも見た気がする...</strong>
        </p>
        <p>いいですね、よく覚えています。記号は同じですが、アクセントが置かれるかどうかで実は少しだけ音が変わるんです。</p>
        <p className={styles.subtitle}>
          <strong>― ひぇっ！</strong>
        </p>
        <p>慣れですね。</p>
        <br/>
        <p>それでは、具体的に見ていきましょうか。</p>
        <p>
          今回のポイントは<strong>「曖昧」、「アクセントがない」</strong>です。
        </p>
        <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /ɪ/</strong></li>
          <p className={styles.examplewords}>visit、foreign、colonial</p>
          <p>アクセントが置かれる/ɪ/よりも、気の抜けた曖昧な音です。子音の前にだけ現れます。</p>

          <li><strong>2. /i/</strong></li>
          <p className={styles.examplewords}>funny、movie、library</p>
          <p>長母音の/iː/よりも、少しだけ気の抜けた短い「イ」の音です。y、ey、ieで終わる単語、母音の前のi, eでこの音は出現します。</p>

          <li><strong>3. /ə/</strong></li>
          <p className={styles.examplewords}>animal、problem、traditional</p>
          <p>「ア」とも「ウ」ともいえない、気を抜いた時に不意に口から漏れるような音です。アクセントが置かれない場合、あらゆる母音がこの音で代用される可能性があり、母音界の室伏広治といえます。</p>

          <li><strong>4. /ju/</strong></li>
          <p className={styles.examplewords}>document、regular、calculate</p>
          <p>日本語よりも弱く曖昧な「ユ」です。</p>
        
          <li><strong>5. /ɚ/</strong></li>
          <p className={styles.examplewords}>matter、survive、brother</p>
          <p>長母音の/ɚː/が短くなったものです。アクセントが置かれないすべての母音＋ｒでこの音が出現する。</p>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― なるほど、アクセントが置かれないと短くなるんだ！</strong>
        </p>
        <p>
          まさにそうです。英語を英語たらしめるリズム感、強弱を作っているのは、この弱母音です。
        </p>
        <br/>
        <p className={styles.last}>今日の講義は「{label}」についてでした。今回が母音をご紹介するラストの回。次回からは子音についてです。来週からも何卒～。</p>
      </>
    ),
    破裂音:(
      <>
      <p>「破裂」するような弾ける音が聞こえる子音です。
      </p>
      <p className={styles.subtitle}>
          <strong>― なるほど！</strong>
        </p>
      <p>はじめに具体例から見ていきましょうか。</p>
      <br/>
      <p>こちらの６つが今回紹介する{label}です。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/p/ - /b/</strong></li>
          <li><strong>　/t/ - /d/</strong></li>
          <li><strong>　/k/ - /g/</strong></li>
        </ul>
      <p>それぞれ、無声音と有声音のペアになっています。</p>
      <p className={styles.subtitle}>
          <strong>― 無声音...？ 有声音...？</strong>
        </p>
      <p>日本語の「濁音」と考えてもらって結構です。例えば、「カ」と「ガ」です。「カ」が/k/が無声音、「ガ」の/g/が有声音です。</p>
      <br/>
      <p>もう少し踏み込むと、のどにある「声帯、せいたい」という器管が震えるか、が基準になります。２つを実際に発音しながらのどに手を当ててみると分かりやすいです。</p>
      <p className={styles.subtitle}>
          <strong>― なんとなくわかった気がする！</strong>
        </p>
      <p>よかったです。</p>
      <br/>
      <p>さらに、破裂音には大きく３つの特徴があり、ここは少し理論的な話になるので、お菓子でも食べながら聞いてください。</p>
      <br/>
      <ul className={styles.listContainer}>
          <li style={{fontSize: "20px"}}><strong>１．気音</strong></li>
          <p>「気音」というのは、/p/、/t/、/k/の後に息を吐くような/h/の音が入る現象です。</p>
          <br/>
          <p>ちょうど、コロナが猛威を振るい始めた頃、"This is a pen！"とティッシュに向けて放ち、英語話者の方が飛沫が飛びやすいというジョークがありました。これはまさに気音のことですね。</p>
          <br/>
          <li style={{fontSize: "20px"}}><strong>２．解放の省略</strong></li>
          <p>cupなどの破裂音で終わる単語で、「カッ（プ）」のように最後の音を発音する時に、口が閉じた状態のままで終わることがあります。</p>
          <br/>
          <li style={{fontSize: "20px"}}><strong>３．無声化</strong></li>
          <p>batのように単語の始め、pigのように単語の終わりに有声の破裂音、/b/、/d/、/g/が来るとき、これらは部分的に無声化し/p/、/t/、/k/の音に聞こえます。</p>
      </ul>
      <br/>
      <p className={styles.subtitle}>
        <strong>― むむ...</strong>
      </p>
      <p>特に重要な「気音」だけ覚えて帰ってもらえれば大丈夫ですよ。</p>
      <br/>
      <p>それでは、さらに具体的に見ていきましょうか。今回のポイントは、「気音」と「濁音」です。</p>
      <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
      <ul className={styles.listContainer}>
          <li><strong>1. /p/</strong></li>
          <p className={styles.examplewords}>peak, port, cup</p>
          <p>日本語のパ行と同じ。ただ、気音を意識し、/p/の音で、吐息を出していきましょう。ただ、speakのような/s/が無声の破裂音の前に来るときは、気音はナシです。</p>

          <li><strong>2. /b/</strong></li>
          <p className={styles.examplewords}>big、hobby、job</p>
          <p>日本語のバ行と同じ。しっかりと上下の唇を閉じる。</p>

          <li><strong>3. /t/</strong></li>
          <p className={styles.examplewords}>take、water、cut</p>
          <p>気音を意識。日本語の「タ」、「テ」、「ト」は舌先を歯にあてるが、英語の/t/は舌先を歯茎にあてるので、少し手前にあてることを意識。</p>
          <br/>
          <p>water、betterのように/t/が母音に挟まれると、アメリカ英語では日本語のラ行に近い音になる。これを「たたき音」という。</p>
          
          <li><strong>4. /d/</strong></li>
          <p className={styles.examplewords}>deep、riding、sad</p>
          <p>日本語のダ行と同じ。ただ、舌先は歯茎につけることを意識。ridingのように/d/が母音に挟まれると、同じく「たたき音」となる。ridingとwritingはほぼ同じ発音になる。</p>
        
          <li><strong>5. /k/</strong></li>
          <p className={styles.examplewords}>key、sick、background</p>
          <p>日本語のカ行と同じ。気音を意識。</p>
        
          <li><strong>6. /g/</strong></li>
          <p className={styles.examplewords}>give、sugar、egg</p>
          <p>日本語のガ行とほぼ同じ。</p>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― 母音よりはわかりやすい気がする！</strong>
        </p>
        <p>
          そうですね。今回出てきた「気音」が日本語と英語の分かれ道となる特徴なので、意識していきましょう。
        </p>
        <br/>
        <p className={styles.last}>今日の講義は「{label}」についてでした。それではまた来週～。</p>
      
      </>
    ),
    摩擦音:(
      <>
      <p>
        「摩擦」のようなかすれた音が聞こえるのが{label}です。
      </p>
      <p className={styles.subtitle}>
          <strong>― なるほど！</strong>
        </p>
      <p>はじめに具体例から見ていきましょうか。</p>
      <br/>
      <br/>
      <br/>
      <p>こちらの９つが今回紹介する{label}です。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/f/ - /b/</strong></li>
          <li><strong>　/s/ - /z/</strong></li>
          <li><strong>　/θ/ - /ð/</strong></li>
        </ul>
        <ul className={styles.firstlist}>
          <li><strong>　/ʃ/ - /ʒ/</strong></li>
          <li><strong>　/h/</strong></li>
          </ul>
      <p>/h/を除いて、それぞれ無声音と有声音のペアになっています。</p>
      <br/>
      <p>振り返ると、無声音と有声音の違いは日本語の「濁音」と説明しましたね。</p>
      <br/>
      <p>破裂音と同じく、有声音が単語のはじまりとおわりに来る場合は、無声化が起こります。「濁音」が無くなって聞こえるということですね。</p>
      <br/>
      <p>なので、loveが「ラフ」に近い「ラブ」になります。</p>
      <br/>
      <p>それでは、さらに具体的に見ていきましょうか。今回のポイントは「摩擦」と「濁音」です。</p>
      <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
      <ul className={styles.listContainer}>
          <li><strong>1. /f/</strong></li>
          <p className={styles.examplewords}>five、coffee、if</p>
          <p>日本語の「フ」で発音しがちですが、日本語には存在しない音です。日本語の「フ」は、上下の唇を近づけ息を吐きますが、英語の/f/は上の歯と下の唇を近づけて息を吐きます。</p>

          <li><strong>2. /v/</strong></li>
          <p className={styles.examplewords}>victory、clever、leave</p>
          <p>日本語のバ行で発音しがちですが、これも日本語にはない音です。/f/の有声音で、同じ発音の仕方で声を出しながら発音してみましょう。</p>

          <li><strong>3. /θ/</strong></li>
          <p className={styles.examplewords}>think、nothing、math</p>
          <p>日本人が苦手意識を持ちやすい発音の１つで、日本語のサ行で発音してしまいがち。舌先を上の歯につけて隙間から息を吐きます。息を吐きながら、舌を近づけたり、離したりして、何回も練習しましょう。</p>
          
          <li><strong>4. /ð/</strong></li>
          <p className={styles.examplewords}>that、mother、with</p>
          <p>日本人が苦手意識を持ちやすい発音の１つで、日本語のザ行で発音してしまいがち。 /θ/の有声音。同じ発音の仕方で声を出しながら発音してみましょう。</p>
        
          <li><strong>5. /s/</strong></li>
          <p className={styles.examplewords}>see、passage、gas</p>
          <p>日本語のサ行とほぼ同じ音です。日本語では、舌先を歯茎か上の歯に近づけますが、英語では歯茎に近づけます。/t/を発音する時と同じ位置です。後に説明する/ʃ/と間違えないようにしましょう。</p>
        
          <li><strong>6. /z/</strong></li>
          <p className={styles.examplewords}>zoo、easy、lose</p>
          <p>日本語のザ行とほぼ同じです。/s/の発音と同じ方法で、声を出しながら発音してみましょう。舌は歯茎につけず、「近づける」ことを意識。</p>

          <li><strong>7. /ʃ/</strong></li>
          <p className={styles.examplewords}>sheep、machine、wish</p>
          <p>日本語のサ行の「シ」とほぼ同じ音ですが、少し口をすぼめることを意識。口をすぼめて、口の中で舌を盛り上げ、吐息を歯の裏側にぶつけるイメージです。/s/と混同しないように注意。</p>
        
          <li><strong>8. /ʒ/</strong></li>
          <p className={styles.examplewords}>give、sugar、egg</p>
          <p>/ʃ/の有声音です。/ʃ/の発音と同じ方法で、声を出しながら発音してみましょう。</p>

          <li><strong>9. /h/</strong></li>
          <p className={styles.examplewords}>heat、hit、behind</p>
          <p>日本語のハ行の「ハ」「へ」「ホ」と同じ音です。のどの奥で隙間をつくり、勢いよく息を吐きましょう。</p>
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― なるほど！たくさんあるけど、どれも擦れた音がして摩擦の意味がわかった！</strong>
        </p>
        <p>無声音の時の舌の配置で、吐息だけの無声音を出したり、息に声を乗せて有声音にしたり、切り替えながら練習することでペアの音をセットで練習していきましょう。</p>
        <br/>
        <p className={styles.last}>今日の講義は「{label}」についてでした。それではまた来週～。</p>
      </>
    ),
    破擦音:(
      <>
      <p>「破裂」音 ＋「摩擦」音＝「破擦」音です。</p>
      <p className={styles.subtitle}>
          <strong>― 二重母音の時みたいに「２つで１つ」ですか？</strong>
      </p>
      <p>筋がよろしい。具体例を見ていきましょう</p>
      <br/>
      <br/>
      <br/>
      <p>これが破擦音です。今回は２つ、１ペアだけ。</p>
        <ul className={styles.firstlist}>
          <li><strong>　/tʃ/</strong></li>
          <li><strong>　/dʒ/</strong></li>
        </ul>

      <p>今回のポイントは、</p>
      <p>破裂音の舌の位置 ⇒ 開放 ⇒ 摩擦音の擦れた音。</p>
      <p>この３ステップです。</p>
      <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
        <ul className={styles.listContainer}>
          <li><strong>1. /tʃ/</strong></li>
          <p className={styles.examplewords}>chess、teacher、search
          </p>
          <p>日本語の「チ」と似ているが、より唇を丸めて突き出す。破裂音の/t/の位置、舌先を歯茎につけた状態から勢いよく離し、/ʃ/の「シュー」という摩擦音を出すイメージです。</p>

          <li><strong>2. /dʒ/</strong></li>
          <p className={styles.examplewords}>job、adjective、bridge</p>
          <p>日本語の「ジ」の子音と似ていて、代用できる。/tʃ/と同じ発音の仕方で声を出しながら発音してみましょう。</p>　
        </ul>
        <br/>
        <p className={styles.subtitle}>
          <strong>― なるほど、日本語に似た音があると分かりやすい！</strong>
        </p>
        <p>そうですね。今回は２つだけですが、しっかりと発音の仕方を習得していきましょう。</p>
        <br/>
        <p className={styles.last}>今日の講義は「{label}」についてでした。それではまた来週～。</p>
      </>
    ),
    接近音:(
      <>
      <p>舌が「接近」する子音です。</p>
      <p className={styles.subtitle}>
          <strong>― 他の子音とどう違うの？</strong>
      </p>
      <br/>
      <p>もう少し踏み込んでいきましょう。</p>
      <br/>
      <p>「接近」＝くっつきはせず、空気がじゃまされずに通り抜ける十分な隙間がある、ということです。</p>
      <br/>
      <p>これまで見てきた/p/などの破裂音、/s/などの摩擦音では、吐く息がせきとめられるか、隙間が狭く擦れた音がするという特徴がありました。</p>
      <br/>
      <p>ですが、今回の「接近音」では、空気の流れが邪魔されず母音の近い音が聞こえるの特徴です。</p>
      <p className={styles.subtitle}>
          <strong>― なるほど！</strong>
      </p>
      <p>それでは、具体的に見ていきましょう。</p>
      <br/>
      <br/>
      <br/>
      <p>今回も２つだけですが、日本人がもっとも苦手とする音かもしれません。</p>
      <ul className={styles.firstlist}>
          <li><strong>　/r/</strong></li>
          <li><strong>　/l/</strong></li>
        </ul>
      <p>みんな大好き、RとLです。</p>
      <br/>
      <p className={styles.subtitle}>
          <strong>― ひぇっ！</strong>
      </p>
      <p>がんばりましょう。</p>
      <br/>
      <br/>
      <p>今回のポイントは、「接近」と「２種類のL」です。</p>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
      <ul className={styles.listContainer}>
          <li><strong>1. /r/</strong></li>
          <p className={styles.examplewords}>right、part、matter
          </p>
          <p>舌先を歯茎の後ろ、手前部分に近づけ、舌全体をそらせることを意識。redなど、単語の最初にRが来るときは「ゥ」を軽く添えると発音しやすい。</p>

          <li><strong>2. /l/</strong></li>
          <p>Lって２種類あんねん。</p>
          <p>共通点は、舌先を歯茎につける、または近づけ、舌の両側から空気をにがすことです。</p>
          <br/>
          <p>舌先を歯茎につけた状態で舌の両側から息を吐いてみましょう。そこで声を出すとそれはもうＬです。</p>
          <br/>
          <p>①「明るい」L</p>
          <p className={styles.examplewords}>light、allow、please</p>
          <p>舌先を歯茎につけます。舌の両側から空気をにがすことは共通です。</p>
          <br/>
          <p>②「暗い」L</p>
          <p className={styles.examplewords}>milk、pull、fall</p>
          <p>舌先を歯茎に近づけます。舌の両側から空気をにがすことは共通です。「ウ」に近い音に聞こえますが、母音ではないので、しっかりと区別していきましょう。</p>
        </ul>
      <br/>
      <p className={styles.subtitle}>
          <strong>― むずかしい...</strong>
      </p>
      <p>日本語にない音なので、習得までに時間はかかるかもしれません。私のおすすめの方法としては、right - lightの２単語から始めることです。この場合、Rは舌先を近づける、Lは舌先をくっつけるという分かりやすい違いがあるので練習しやすいと思います。</p>
      <br/>
      <p className={styles.last}>今日の講義は「{label}」についてでした。それではまた来週～。</p>
      </>
    ),
    鼻音: (
      <>
      <p>鼻声です。</p>
      <p>もう少し踏み込むと、他の母音や子音を発音する場合は、空気が口から抜けていきますが、鼻音を発音する場合は鼻から空気が抜けていきます。</p>
      <br/>
      <p>日本語の「ン」を発音して、鼻に手をあてて空気が抜けていっていることを実際に確かめてみましょう。</p>
      <p className={styles.subtitle}>
          <strong>― ほんとだ！</strong>
      </p>
      <p>確認ができたら、具体的に見ていきましょうか。</p>
      <br/>
      <br/>
      <p>今回は３つです。</p>
      <ul className={styles.firstlist}>
          <li><strong>　/m/</strong></li>
          <li><strong>　/n/</strong></li>
          <li><strong>　/ŋ/</strong></li>
        </ul>
      <br/>
      <p className={styles.subtitle}>
          <strong>― なんか似た記号があるね。</strong>
      </p>
      <p>/n/と/ŋ/のことですね。先に簡単に説明しておくと、/n/は「さ<strong>ん</strong>にん」の「ン」、/ŋ/は「キ<strong>ン</strong>グ」の「ン」</p>
      <p className={styles.subtitle}>
          <strong>― ん...？</strong>
      </p>
      <p>実は、日本語の「ン」には５種類あると言われていて、あとに続く音によって、音が変わります。ちなみに「ん...?」の「ン」はさらにまた違う「ン」です。</p>
      <br/>
      <p className={styles.subtitle}>
          <strong>― ひぇっ！</strong>
      </p>
      <br/>
      <p>それでは、具体的に見ていきましょうか</p>
      <p>今回のポイントは、「日本語のンと区別」、「鼻から息を吐く」です。</p>
      <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
      <ul className={styles.listContainer}>
        <li><strong>1. /m/</strong></li>
        <p className={styles.examplewords}>make、lemon、come</p>
        <p>日本語のマ行と同じです。単語の終わりに/m/が来る時は、しっかりと唇を閉じることを意識。</p>
        <br/>
        <p>comeなど、単語のおわりに/m/の音が来るとき、勢いあまって「ム」のように母音が入ってしまうと、英語っぽい発音から離れてしまいます。</p>

        <li><strong>2. /n/</strong></li>
        <p className={styles.examplewords}>name、dinner、run</p>
        <p>日本語のナ行の「ナ」「ヌ」「ネ」「ノ」と同じです。「二」はまた違う音なので注意。</p>
        <br/>
        <p>また、/n/が単語の終わりに来る時も注意が必要です。</p>
        <br/>
        <p>例えば、manを日本語のような「マン」で発音してしまうと、５種類のうちの違う「ン」になってしまいます。しっかりと最後は舌先を歯茎につけることを意識しましょう。</p>
        
        <li><strong>3. /ŋ/</strong></li>
        <p className={styles.examplewords}>ring、pink、singer</p>
        <p>小学校の音楽の授業を思い出してください。「が～♪」じゃなくて「んが～♪」と言われたことがある方、それです。/k/や/g/を発音する位置で鼻から息を吐く、これを意識しましょう。
        </p>
      </ul>
      <br/>
      <p className={styles.subtitle}>
          <strong>― 簡単そうでむすかしいな。</strong>
      </p>
      <p>一度覚えてしまえば、簡単なものです。唇を使うのか、舌先を使うのかなど、発音の仕方を覚え、何度も練習していきましょう。</p>
      <br/>
      <p className={styles.last}>今日の講義は「{label}」についてでした。それではまた来週～。</p>
      </>
    ),
    半母音:(
      <>
      <p>母音と子音のハーフです。</p>
      <br/>
      <p className={styles.subtitle}>
          <strong>― どういうこと？</strong>
      </p>
      <br/>
      <p>具体的に見ていきましょう。</p>
      <br/>
      <p>少し込み入った話になります。</p>
      <p>まず、母音と子音の大きな違いとして、「吐く息が妨害されるか」があります。</p>
      <br/>
      <p>例えば、子音の/t/でいうと舌と歯茎がくっつき、空気がせき止められますが、母音の/iː/では邪魔されずに息が続く限り声を出すことができますね。</p>
      <br/>
      <p>この点で、半母音は「妨害を受けない」という点で母音の仲間といえます。</p>
      <br/>
      <p>一方で、妨害は受けないけれど、同じ音を出し続けることはできません。</p>
      <br/>
      <p className={styles.subtitle}>
          <strong>― . . .？</strong>
      </p>
      <br/>
      <p>さらに踏み込んでいきましょう。</p>
      <p>zoo /zuː/という単語があります。最初に子音の/z/の音から始まり、次に「ウー」と続くように、発音の仕組みとして途中で母音に切り替わるようになっています。</p>
      <br/>
      <p>この意味で、子音は同じ音を出し続けることはできず、半母音もこの特徴を持っています。</p>
      <br/>
      <p className={styles.subtitle}>
          <strong>― なるほど..難しいけど、母音と子音の特徴を両方もっているんだね。</strong>
      </p>
      <br/>
      <p>まさにそういうことです。</p>
      <br/>
      <br/>
      <br/>
      <p>それでは、今回も具体的に見ていきましょう。</p>
      <ul className={styles.firstlist}>
          <li><strong>　/w/</strong></li>
          <li><strong>　/j/</strong></li>
        </ul>
      <p>今回は、２つです。WとYの音です。</p>
      <p style={{fontSize: "12px", color: "gray"}}>※ 実は、前回紹介した/r/も半母音なのですが、接近音というグループで/r/と/l/を比べる方が説明の都合上わかりやすいと思い分けました。</p>
      <br/>
      <div className={styles.subtitle2}>{label}（{ruby}）</div>
      <ul className={styles.listContainer}>
        <li><strong>1. /w/</strong></li>
        <p className={styles.examplewords}>word、reward、language</p>
        <p>唇を丸めることを意識。決まった口の形はないのですが、/uː/や/ʊ/に近い音で、すぐに次に続く母音に切り替わります。</p>

        <li><strong>2. /j/</strong></li>
        <p className={styles.examplewords}>young、beyond、cute</p>
        <p>決まった口の形はないのですが、/iː/や/ɪ/に近い音で、すぐに次に続く母音に切り替わります。</p>
        <br/>
        <p>「ュ」に近い音で、yearやyeastなどの単語は、「イ」ではなく「ュイ」に近い音で発音し、しっかりと/j/が聞こえるようにしましょう。
        </p>
      </ul>
      <br/>
      <p className={styles.subtitle}>
          <strong>― 発音の仕方はなんとなくわかった気がする！</strong>
      </p>
      <p>いいですね。冒頭の理論的な部分は知らなくても大丈夫なので、しっかりと発音をマスターしていきましょう。</p>
      <br/>
      <p className={styles.last}>今日の講義は「{label}」についてでした。</p>
      <br/>
      <p>惜しくも今回が最終講義になります。難しいところもあったとは思いますが、ここまでご精読いただきありがとうございました。またどこかでお会いしましょう。</p>
      </>
    )
  };

  // === JSX ===
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          margin: 0,
        }}
      >
        <button className={styles.infobtn} onClick={handleInstruction}>
          <img src={question8B} alt="info" />
        </button>
      </div>

      {isVisible && (
        <div className={styles.containerWrapper}>
          <button onClick={handleInstruction} className={styles.closebtn}>
              ✕
            </button>
          <div className={styles.instructionContainer}>

            {/* タイトル */}
            <div className={styles.titleContainer}><div className={styles.title}>{label}って、なぁに？</div></div>
            <p className={styles.subtitle}>
              <strong>― {label}ってなぁに？</strong>
            </p>

            {/* 内容を表示 */}
            {content[label] || <p>この項目の説明はまだ準備中です。</p>}
          </div>
        </div>
      )}
    </>
  );
}
