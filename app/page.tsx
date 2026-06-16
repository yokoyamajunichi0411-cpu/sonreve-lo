import FadeIn from "@/components/ui/FadeIn";
import ItemCard from "@/components/ui/ItemCard";
import { volumeDresses, simpleDresses, accessories } from "@/lib/items";

const valueProps = [
  {
    title: "Korean Import",
    ja: "韓国直輸入",
    desc: "ソウルのアトリエと直接提携し、最新トレンドのドレスを継続的に調達しています。",
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

export default function Home() {
  return (
    <div id="top">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-foreground text-background overflow-hidden">
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-[11px] tracking-[0.3em] uppercase hover:border-background/70 transition-colors duration-500"
          >
            公式LINEで問い合わせる
          </a>
        </FadeIn>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
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
      </section>

      {/* VOLUME DRESS */}
      <section id="volume-dress" className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Volume Dress</p>
          <h2
            className="text-3xl lg:text-4xl font-light mb-14"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Volume Dress
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {volumeDresses.map((item, i) => (
            <ItemCard key={item.code} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* SIMPLE DRESS */}
      <section id="simple-dress" className="py-20 lg:py-28 px-6 lg:px-12">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Simple Dress</p>
          <h2
            className="text-3xl lg:text-4xl font-light mb-14"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Simple Dress
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {simpleDresses.map((item, i) => (
            <ItemCard key={item.code} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* ACCESSORIES */}
      <section id="accessories" className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-4">Accessories</p>
          <h2
            className="text-3xl lg:text-4xl font-light mb-14"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Accessories
          </h2>
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
            className="text-3xl lg:text-4xl font-light mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            お問い合わせ
          </h2>
          <p className="text-sm text-background/60 leading-loose tracking-wider mb-10">
            ドレスのレンタルに関するご相談、お見積り、撮影スケジュールの調整など、
            お気軽にお問い合わせください。
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-[11px] tracking-[0.3em] uppercase hover:border-background/70 transition-colors duration-500"
          >
            公式LINEで問い合わせる
          </a>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 lg:px-12 bg-foreground text-background/30 border-t border-background/10 text-center">
        <p className="text-[11px] tracking-wider">
          © {new Date().getFullYear()} SON RÊVE. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
