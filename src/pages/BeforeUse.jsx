import styles from "./beforeuse.module.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function BeforeUse() {
    const navigate = useNavigate();
    return (
        <>
        <Header onClick={() => navigate("/")} />
        <h1>はじめに</h1>
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <p className={styles.subtitle}>Profile　<span lang="ja">作成者について</span></p>
                <p>性別： Male</p>
                <p>年齢： 24 years old</p>
                <p>国籍： Japanese</p>
                <br/>
                <p lang="ja">高校生の時に英単語帳の音声記号に興味をもつ。そこから大学で英語の発音について研究。現在、かけだしのエンジニアとしてアウトプットの日々。</p>
            </div>

            <div className={styles.container}>
                <p className={styles.subtitle}>
                    Purpose　<span lang="ja">発音について学ぶ意味</span>
                </p>
                <p lang="ja" className={styles.subsubtitle}>
                    1. 発音がわかると、英語が聞こえる
                </p>
                <p lang="ja">まず、人が言葉を聞いて理解するまでには、次の２つのステップがあります。</p>
                <br/>
                <p lang="ja">① 音を聞き取る</p>
                <p lang="ja">② 意味を理解する</p>
                <br/>
                <p lang="ja">①をクリアするには、「正しく音を聞き取る力」が、②をクリアするには、「意味を理解するための語彙力・文法の知識・会話の背景知識など」が求められます。
                </p>
                <br/>
                <p lang="ja">つまり、言葉を理解する最初のとびらを開くカギは「発音」ということです。</p>
                <br/>
                <p　lang="ja">このアプリでは、かなり理論的な部分まで踏み込んで説明していますが、大事なのはやはり「体が覚えるまで何度も聞く」こと。この感覚的な動作を手助けするのが理論、つまり知識の部分です。</p>
                <br/>
                <p lang="ja">1つ1つの音がどのように違うのか、仕組みも含めて理解することで深い理解となります。</p>
                <br/>
                <br/>
                <br/>
                <p lang="ja" className={styles.subsubtitle}>
                    2. 耳を使って英語を覚える
                </p>
                <p lang="ja">人が勉強したことを長く覚えているためには、覚える際にできるだけ多くの五感を使うことが推奨されています。</p>
                <br/>
                <p lang="ja">手で書く、目で見る、食べて覚える（暗記パン）。これに加えて、「耳」で聞いて覚えることで長い間記憶に定着させることができます。</p>
                <br/>
                <p lang="ja">ただ、この時に「正確に」聞くことが重要となるのでやはり発音を学ぶことは重要となってきます。</p>
            </div>

            <div className={styles.container}>
                <p className={styles.subtitle}>
                    Target　<span lang="ja">こんな方へ</span>
                </p>
                <p lang="ja">・２，３年ほど英語を学んできた英語中級者</p>
                <p lang="ja">・今、リスニングでつまづいている</p>
                <p lang="ja">・「きれいな」発音で英語を話せるようになりたい</p>
                <br/>
                <p　lang="ja">少し踏み込んだ説明が多いので、ある程度英語を勉強してきた人の方が理解に困らないと思い、今回は中級者向けとしています。</p>
            </div>

            <div className={styles.container}>
                <p className={styles.subtitle}>
                    Solution　<span lang="ja">このアプリを使う意味</span>
                </p>
                <p lang="ja">「このアプリを使う意味」、それは英語の発音を理論的、実践的に理解するためのコンテンツを網羅的にまとめてあるため、やり込むことで深い知識を身につけることができる点にあります。</p>
                <br/>
                <p lang="ja">このアプリがユーザーに提供する機能は２つです。</p>
                <br/>
                <br/>
                <p lang="ja" className={styles.subsubtitle}>
                    1. 聞き取りクイズ
                </p>
                <p lang="ja">主に10問程度の聞き取りクイズです。</p>
                <br/>
                <p lang="ja">母音と子音、それぞれでどのような種類に分けられているか、また、各カテゴリーで、聞き間違いが起こりやすい単語同士をセットで学べるように工夫しています。</p>
                <br/>
                <p lang="ja">また、各カテゴリーで？マークを押すと、発音の仕方や音の違いを詳しく説明しているので、ぜひ読んでみてください。</p>
                <br/>
                <br/>
                <p lang="ja" className={styles.subsubtitle}>
                    2. IPA道場
                </p>
                <p lang="ja">ゲーム感覚で発音を学べる機能を用意してみました。</p>
                <br/>
                <p lang="ja">制限時間60秒でなるべく多くの音声記号から英単語を導き出しましょう。</p>
            </div>
        </div>

        </>
    )
}