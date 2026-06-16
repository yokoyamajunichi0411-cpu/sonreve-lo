import FadeIn from "@/components/ui/FadeIn";
import ItemCard from "@/components/ui/ItemCard";
import { volumeDresses, simpleDresses, accessories } from "@/lib/items";

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
    title: "LINEで無料カタログを請求",
    desc: "公式LINEに「カタログ希望」と送るだけ。ドレス一覧・料金表をまとめたPDFカタログをお送りします。",
  },
  {
    step: "02",
    title: "着数・日程をご相談",
    desc: "カタログをご確認いただいた後、レンタル着数・撮影日程・お届け先をLINEまたはメールでお知らせください。",
  },
  {
    step: "03",
    title: "配送・撮影",
    desc: "ご指定の日時に撮影現場またはスタジオへ直送。クリーニング済みの状態でお届けするので、届いたその日に撮影できます。",
  },
  {
    step: "04",
    title: "撮影後に返却",
    desc: "撮影終了後は同梱の返送伝票で発送するだけ。クリーニングはこちらで対応するので手間いらずです。",
  },
];

const LINE_URL = "#";

function CtaButton({ label = "無料カタログをLINEで受け取る（初回10% OFF）" }: { label?: string }) {
  return (
    <div className="text-center">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 bg-accent-premium text-foreground text-[11px] tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300 mb-3"
      >
        {label}
      </a>
      <p className="text-[10px] text-foreground/40 tracking-wider">登録無料・返信は通常24時間以内</p>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      {/* HERO */}
      <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12 bg-foreground text-background overflow-hidden">
        <FadeIn className="text-center mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-background/40 mb-8">
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
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-premium text-foreground text-[11px] tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300 mb-4"
          >
            無料カタログをLINEで受け取る（初回10% OFF）
          </a>
          <p className="text-[10px] text-background/30 tracking-wider">
            登録無料・返信は通常24時間以内
          </p>
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
          <CtaButton />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            {[
              { label: "国内一般レンタル", note: "（相場）", highlight: false },
              { label: "SON RÊVE", note: "韓国直仕入れ", highlight: true },
              { label: "差額分を", note: "撮影品質・本数アップへ", highlight: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`p-6 text-center border ${item.highlight ? "border-accent-premium bg-accent-premium/10" : "border-background/10"}`}
              >
                <p className={`text-[10px] tracking-widest mb-2 ${item.highlight ? "text-accent-premium" : "text-background/40"}`}>
                  {item.note}
                </p>
                <p className={`text-lg font-light tracking-wide ${item.highlight ? "text-accent-premium" : "text-background/60"}`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-background/30 text-center mt-4 tracking-wider">
            ※ 具体的な料金はカタログにてご案内しています
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {flowSteps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.1}>
              <div className="relative">
                <p
                  className="text-5xl font-light text-foreground/10 mb-4 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.step}
                </p>
                <h3 className="text-sm font-normal tracking-wide text-foreground/80 mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[12px] text-foreground/50 leading-loose tracking-wider">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* VOLUME DRESS */}
      <section id="volume-dress" className="py-20 lg:py-28 px-6 lg:px-12">
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
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-premium text-foreground text-[10px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 self-start md:self-auto"
          >
            カタログを受け取る
          </a>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {volumeDresses.map((item, i) => (
            <ItemCard key={item.code} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* SIMPLE DRESS */}
      <section id="simple-dress" className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Simple Dress</p>
            <h2
              className="text-3xl lg:text-4xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Simple Dress
            </h2>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-premium text-foreground text-[10px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 self-start md:self-auto"
          >
            カタログを受け取る
          </a>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {simpleDresses.map((item, i) => (
            <ItemCard key={item.code} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* ACCESSORIES */}
      <section id="accessories" className="py-20 lg:py-28 px-6 lg:px-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Accessories</p>
            <h2
              className="text-3xl lg:text-4xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Accessories
            </h2>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-premium text-foreground text-[10px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 self-start md:self-auto"
          >
            カタログを受け取る
          </a>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {accessories.map((item, i) => (
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
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-premium text-foreground text-[11px] tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300 mb-4"
          >
            無料カタログをLINEで受け取る（初回10% OFF）
          </a>
          <p className="text-[10px] text-background/30 tracking-wider">
            登録無料・返信は通常24時間以内
          </p>
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
          <dl className="grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr] gap-x-6 gap-y-4 text-sm text-foreground/60 tracking-wider">
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
