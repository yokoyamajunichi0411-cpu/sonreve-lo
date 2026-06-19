import FadeIn from "@/components/ui/FadeIn";
import ItemCard from "@/components/ui/ItemCard";
import { volumeDresses } from "@/lib/items";

const targets = [
  "前撮り・フォトウェディング専門スタジオ",
  "フリーランスカメラマン",
  "ウェディング撮影事業者",
  "写真館・フォトスタジオ",
];

const valueProps = [
  {
    title: "Price Advantage",
    ja: "国内最安水準",
    desc: "韓国アトリエとの直接契約により、国内レンタル相場より大幅に安くご提供。同品質のドレスをより低コストで撮影に活用できます。",
  },
  {
    title: "Shoot-Ready",
    ja: "撮影対応品質",
    desc: "クリーニング・メンテナンス済みの状態でお届け。受け取ってすぐに撮影に入れます。",
  },
  {
    title: "Flexible Rental",
    ja: "法人レンタル対応",
    desc: "複数着のまとめてレンタルや、撮影スケジュールに合わせた期間調整など柔軟にご相談いただけます。",
  },
];

const flowSteps = [
  {
    step: "01",
    title: "LINEでカタログ請求",
    desc: "「カタログ希望」と送るだけ。料金・ドレス一覧をPDFでお送りします。",
  },
  {
    step: "02",
    title: "着数・日程を相談",
    desc: "カタログ確認後、着数・撮影日程・お届け先をご連絡ください。",
  },
  {
    step: "03",
    title: "配送・撮影",
    desc: "撮影現場またはスタジオへ直送。届いたその日に撮影できます。",
  },
  {
    step: "04",
    title: "返却（送るだけ）",
    desc: "同梱の返送伝票で発送するだけ。クリーニングはこちら対応。",
  },
];

const catalogContents = [
  "全ドレスのカラー写真一覧",
  "レンタル料金表（税込）",
  "サイズ・配送エリア情報",
  "レンタル規約・破損時の対応",
  "法人プラン・まとめ割引について",
];

const LINE_URL = "#";

function CtaBlock({ dark = false }: { dark?: boolean }) {
  return (
    <div className="text-center">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 bg-accent-premium text-foreground text-[11px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 mb-3"
      >
        無料カタログをLINEで受け取る（初回10% OFF）
      </a>
      <p className={`text-[10px] tracking-wider ${dark ? "text-background/30" : "text-foreground/40"}`}>
        登録無料・返信は通常24時間以内
      </p>
    </div>
  );
}

function SectionCta() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-accent-premium text-foreground text-[10px] tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 self-start md:self-auto"
    >
      カタログを受け取る
    </a>
  );
}

export default function Home() {
  return (
    <div id="top">
      {/* HERO — 既存着用写真を背景に使用 */}
      <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12 text-background overflow-hidden">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/dressdata/VD-001/IMG_8360.JPG')" }}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-foreground/72" />

        <FadeIn className="relative text-center mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-background/50 mb-8">
            For Photographers &amp; Studios
          </p>
          <h1
            className="text-4xl lg:text-7xl font-light leading-[1.2] max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            ドレスで、撮影を<br />もっと自由に。
          </h1>
          <p className="text-sm text-background/60 leading-loose tracking-wider max-w-lg mx-auto mb-10">
            韓国直輸入のウェディングドレスを、撮影業者・カメラマン様向けに法人レンタル。
            ボリュームドレスからシンプルドレス、アクセサリーまで一括でご用意しています。
          </p>
          <CtaBlock dark />
        </FadeIn>
      </section>

      {/* TARGET — こんな方に */}
      <section className="py-12 px-6 lg:px-12 bg-subtle border-b border-border">
        <FadeIn className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/30 mb-5 text-center">
            こんな方に選ばれています
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {targets.map((t) => (
              <div key={t} className="flex items-center gap-3">
                <span className="text-accent-premium text-base leading-none flex-shrink-0">✓</span>
                <span className="text-sm text-foreground/70 tracking-wide">{t}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-16">
          {valueProps.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/30 mb-3">{v.title}</p>
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {v.ja}
              </h3>
              <p className="text-sm text-foreground/50 leading-loose tracking-wider">{v.desc}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <CtaBlock />
        </FadeIn>
      </section>

      {/* PRICE ADVANTAGE */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 bg-foreground text-background">
        <FadeIn className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-background/40 mb-4 text-center">Why SON RÊVE</p>
          <h2
            className="text-2xl lg:text-3xl font-light mb-10 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            韓国直輸入だから実現できる、<br />国内レンタルより大幅に安い料金
          </h2>

          {/* 横並び比較 */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-5 text-center border border-background/10 flex flex-col justify-center">
              <p className="text-[9px] tracking-widest text-background/30 mb-2">国内相場</p>
              <p className="text-sm text-background/40 font-light">高コスト</p>
            </div>
            <div className="p-5 text-center border border-accent-premium bg-accent-premium/10 flex flex-col justify-center">
              <p className="text-[9px] tracking-widest text-accent-premium mb-2">SON RÊVE</p>
              <p className="text-sm text-accent-premium font-light">低コスト</p>
            </div>
            <div className="p-5 text-center border border-background/10 flex flex-col justify-center">
              <p className="text-[9px] tracking-widest text-background/30 mb-2">差額分を</p>
              <p className="text-sm text-background/50 font-light leading-snug">撮影本数・<br />品質アップへ</p>
            </div>
          </div>

          <p className="text-[11px] text-background/30 text-center mb-8 tracking-wider">
            ※ 具体的な料金はカタログにてご案内しています
          </p>

          {/* カタログCTA */}
          <div className="text-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-premium text-foreground text-[11px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 mb-3"
            >
              料金をカタログで確認する
            </a>
            <p className="text-[10px] text-background/30 tracking-wider">登録無料・返信は通常24時間以内</p>
          </div>
        </FadeIn>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4 text-center">How It Works</p>
          <h2
            className="text-3xl lg:text-4xl font-light mb-14 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            ご利用の流れ
          </h2>
        </FadeIn>

        {/* モバイル：横スクロール / PC：4列 */}
        <div className="flex overflow-x-auto gap-0 pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {flowSteps.map((s, i) => (
            <div
              key={s.step}
              className="flex-shrink-0 w-[72vw] sm:w-[55vw] md:w-auto relative pl-0 pr-6 md:pr-0"
            >
              <FadeIn delay={i * 0.1}>
                <div className="bg-background p-6 h-full md:bg-transparent md:p-0">
                  <p
                    className="text-4xl font-light text-accent-premium/40 mb-3 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.step}
                  </p>
                  <h3 className="text-sm font-normal tracking-wide text-foreground/80 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-foreground/50 leading-loose tracking-wider">{s.desc}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-foreground/30 text-center mt-6 md:hidden">← スワイプで確認 →</p>
      </section>

      {/* CATALOG CONTENTS — 何が届くか */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 border-y border-border">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Catalog</p>
          <h2
            className="text-2xl lg:text-3xl font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            カタログに含まれるもの
          </h2>
          <p className="text-[12px] text-foreground/40 tracking-wider mb-8">
            LINEにご登録後、PDFカタログを無料でお送りします
          </p>
          <ul className="text-left inline-block mb-10 space-y-3">
            {catalogContents.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/70 tracking-wide">
                <span className="text-accent-premium flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <CtaBlock />
          </div>
        </FadeIn>
      </section>

      {/* VOLUME DRESS */}
      <section id="volume-dress" className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Volume Dress</p>
            <h2
              className="text-3xl lg:text-4xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Volume Dress
            </h2>
          </div>
          <SectionCta />
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {volumeDresses.map((item, i) => (
            <ItemCard key={item.code} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground text-background">
        <FadeIn className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-background/40 mb-4">Contact</p>
          <h2
            className="text-3xl lg:text-4xl font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            まずは無料カタログをどうぞ
          </h2>
          <p className="text-sm text-background/60 leading-loose tracking-wider mb-10">
            ドレスラインナップ・料金・レンタル条件をまとめたPDFカタログを無料でお送りします。<br />
            LINEに「カタログ希望」とお送りください。
          </p>
          <CtaBlock dark />
        </FadeIn>
      </section>

      {/* COMPANY */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 bg-subtle border-t border-border">
        <FadeIn className="max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-6">Company</p>
          <h2
            className="text-2xl font-light mb-8 text-foreground/80"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            運営会社
          </h2>
          <dl className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-x-6 gap-y-4 text-sm text-foreground/60 tracking-wider">
            <dt className="text-[11px] text-foreground/35 uppercase tracking-[0.15em] pt-0.5">社名</dt>
            <dd>I KIDS KOREA株式会社</dd>
            <dt className="text-[11px] text-foreground/35 uppercase tracking-[0.15em] pt-0.5">所在地</dt>
            <dd>〒533-0021 大阪府大阪市東淀川区下新庄4-17-24, 302号</dd>
            <dt className="text-[11px] text-foreground/35 uppercase tracking-[0.15em] pt-0.5">Email</dt>
            <dd>
              <a href="mailto:support@ikidskorea.com" className="hover:text-foreground transition-colors">
                support@ikidskorea.com
              </a>
            </dd>
          </dl>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 lg:px-12 bg-foreground text-background/30 border-t border-background/10 text-center">
        <p className="text-[11px] tracking-wider">
          © {new Date().getFullYear()} SON RÊVE / I KIDS KOREA株式会社. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
