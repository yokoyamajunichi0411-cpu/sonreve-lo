import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

const siteUrl = "https://sonreve-lp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "son rêve PRO | 撮影業者向け衣装レンタル",
  description:
    "韓国直輸入のウェディングドレスを撮影業者・カメラマン向けに法人レンタル。ボリュームドレス、シンプルドレス、アクセサリーまで一括対応。",
  alternates: { canonical: siteUrl },
  openGraph: {
    siteName: "son rêve PRO",
    locale: "ja_JP",
    type: "website",
    url: siteUrl,
    title: "son rêve PRO | 撮影業者向け衣装レンタル",
    description:
      "韓国直輸入のウェディングドレスを撮影業者・カメラマン向けに法人レンタル。ボリュームドレス、シンプルドレス、アクセサリーまで一括対応。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
