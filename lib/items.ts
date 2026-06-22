export type Grade = "premium" | "standard";

export interface RentalItem {
  code: string;
  name: string;
  grade: Grade;
  image?: string;
  images?: string[];
  description?: string;
}

function placeholderSet(prefix: string, count: number, label: string): RentalItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      code: `${prefix}-${String(n).padStart(2, "0")}`,
      name: `${label} ${String(n).padStart(2, "0")}`,
      grade: (n % 2 === 0 ? "standard" : "premium") as Grade,
    };
  });
}

export const volumeDresses: RentalItem[] = placeholderSet("VD", 20, "Volume Dress");

// VD-01 Crystal Royale
volumeDresses[0].name = "Crystal Royale";
volumeDresses[0].description = "ドレス全体に贅沢なビジューとクリスタル装飾を施したラグジュアリーウェディングドレス。上品なVネックと美しいシルエットが花嫁の魅力を引き立て、繊細な輝きが特別な一日を彩ります。";
volumeDresses[0].images = [
  "/dressdata/VD-001/IMG_8360.JPG",
  "/dressdata/VD-001/IMG_8361.JPG",
  "/dressdata/VD-001/IMG_8362.JPG",
];

// VD-02 Pearl Étoile
volumeDresses[1].name = "Pearl Étoile";
volumeDresses[1].description = "繊細なパールとクリスタルを贅沢にあしらったラグジュアリーウェディングドレス。深めのVネックと上品なイリュージョンデザインがデコルテを美しく演出し、流れるようなビーディングと繊細な輝きが花嫁をより一層華やかに彩ります。特別な一日にふさわしい、気品と存在感を兼ね備えた一着です。";
volumeDresses[1].images = [
  "/dressdata/VD-002/IMG_8367.JPG",
  "/dressdata/VD-002/IMG_8368.JPG",
  "/dressdata/VD-002/IMG_8369.JPG",
];

// VD-03 Lumière Crystal Gown
volumeDresses[2].name = "Lumière Crystal Gown";
volumeDresses[2].description = "繊細なクリスタル刺繍が全体に施された、上品な輝きのウェディングドレス。軽やかなAラインシルエットが、優雅で洗練された花嫁姿を演出します。";
volumeDresses[2].images = [
  "/dressdata/VD-003/IMG_8382.JPG",
  "/dressdata/VD-003/IMG_8383.JPG",
  "/dressdata/VD-003/IMG_8384.JPG",
];

// VD-04 Beaded Blossom
volumeDresses[3].name = "Beaded Blossom";
volumeDresses[3].description = "繊細なパールビーディングとクリスタル装飾が美しく輝く、韓国クチュールスタイルのウェディングドレス。優雅なAラインシルエットと上品なフローラル刺繍が、花嫁を華やかに彩ります。";
volumeDresses[3].images = [
  "/dressdata/VD-004/IMG_8385.JPG",
  "/dressdata/VD-004/IMG_8386.JPG",
  "/dressdata/VD-004/IMG_8387.JPG",
];

// VD-05 Royal Pearl Garden
volumeDresses[4].name = "Royal Pearl Garden";
volumeDresses[4].description = "立体感のあるフラワーアップリケと繊細なパールビーディング、クリスタル装飾が美しく輝く韓国クチュールウェディングドレス。華やかなビーデッドスリーブとシャンパンアイボリーのグリッターチュールが上品な存在感を演出します。";
volumeDresses[4].images = [
  "/dressdata/VD-005/IMG_8388.JPG",
  "/dressdata/VD-005/IMG_8389.JPG",
  "/dressdata/VD-005/IMG_8390.JPG",
];

// VD-06 Blossom Mermaid
volumeDresses[5].name = "Blossom Mermaid";
volumeDresses[5].description = "繊細なフローラルレース刺繍と立体感のあるビーディングが美しく輝く韓国クチュールウェディングドレス。優雅なマーメイドシルエットと上品なシャンパンアイボリーカラーが、洗練された花嫁スタイルを演出します。";
volumeDresses[5].images = [
  "/dressdata/VD-006/IMG_8394.JPG",
  "/dressdata/VD-006/IMG_8395.JPG",
  "/dressdata/VD-006/IMG_8396.JPG",
];

// VD-07 Crystal Constellation
volumeDresses[6].name = "Crystal Constellation";
volumeDresses[6].description = "ジュエリーのようなクリスタル装飾が全体に煌めく韓国クチュールマーメイドドレス。繊細なイリュージョンメッシュと透明感あふれるクリスタルスリーブが上品な輝きを演出し、優雅なチャペルトレーンが洗練されたブライダルスタイルを完成させます。";
volumeDresses[6].images = [
  "/dressdata/VD-007/IMG_8397.JPG",
  "/dressdata/VD-007/IMG_8398.JPG",
  "/dressdata/VD-007/IMG_8399.JPG",
];

// VD-08 Crystal Illusion Pearl A-Line Dress
volumeDresses[7].name = "Crystal Illusion Pearl A-Line Dress";
volumeDresses[7].description = "イリュージョンネックにパールとクリスタルビーディングをあしらった、華やかなAラインドレス。立体感のある刺繍と繊細なチュールが、上品で透明感のある印象を演出します。";
volumeDresses[7].images = [
  "/dressdata/VD-008/IMG_8425.JPG",
  "/dressdata/VD-008/IMG_8426.JPG",
  "/dressdata/VD-008/IMG_8427.JPG",
];

// VD-09 Ivory Illusion Beaded A-Line Dress
volumeDresses[8].name = "Ivory Illusion Beaded A-Line Dress";
volumeDresses[8].description = "イリュージョンネックに繊細なビーズ刺繍をあしらった、上品なAラインドレス。軽やかに広がるソフトチュールスカートと、前裾に動きを持たせたヘムラインが、清楚で洗練された印象を演出します。";
volumeDresses[8].images = [
  "/dressdata/VD-009/IMG_8453.JPG",
  "/dressdata/VD-009/IMG_8454.JPG",
  "/dressdata/VD-009/IMG_8455.JPG",
];

// VD-10 Ivory V-Neck Satin Ballgown Dress
volumeDresses[9].name = "Ivory V-Neck Satin Ballgown Dress";
volumeDresses[9].description = "上質なサテンと柔らかなチュールを組み合わせた、洗練された韓国クチュールスタイルのウェディングドレス。深めのVネックと立体的なパフスリーブが上品な存在感を演出し、背面のレースアップデザインが美しいシルエットを叶えます。";
volumeDresses[9].images = [
  "/dressdata/VD-010/IMG_8400.JPG",
  "/dressdata/VD-010/IMG_8401.JPG",
  "/dressdata/VD-010/IMG_8402.JPG",
];

// VD-11 Ivory Puff Sleeve Column Dress
volumeDresses[10].name = "Ivory Puff Sleeve Column Dress";
volumeDresses[10].description = "上品なサテン素材とシアーメッシュを組み合わせた、ミニマルで洗練された韓国クチュールスタイルのウェディングドレス。立体感のあるパフスリーブとウエストのドレープデザインが優雅なシルエットを演出し、透明感のあるバックデザインが上品な魅力を引き立てます。";
volumeDresses[10].images = [
  "/dressdata/VD-011/IMG_8403.JPG",
  "/dressdata/VD-011/IMG_8404.JPG",
  "/dressdata/VD-011/IMG_8405.JPG",
  "/dressdata/VD-011/IMG_8406.JPG",
];

// VD-12 Ivory Strapless Satin Mermaid Dress
volumeDresses[11].name = "Ivory Strapless Satin Mermaid Dress";
volumeDresses[11].description = "美しいボディラインを引き立てる上質なサテン素材の韓国クチュールスタイルウェディングドレス。シンプルなストラップレスデザインと立体的なマーメイドシルエットが洗練された印象を演出し、背面のレースアップコルセットと優雅なロングトレーンがドラマティックな後ろ姿を叶えます。";
volumeDresses[11].images = [
  "/dressdata/VD-012/IMG_8407.JPG",
  "/dressdata/VD-012/IMG_8408.JPG",
  "/dressdata/VD-012/IMG_8409.JPG",
  "/dressdata/VD-012/IMG_8410.JPG",
];

// VD-13 Ivory Illusion Lace A-Line Dress
volumeDresses[12].name = "Ivory Illusion Lace A-Line Dress";
volumeDresses[12].description = "繊細なフローラルレース刺繍とイリュージョンネックラインが美しい韓国クチュールウェディングドレス。上品なスリムAラインシルエットが優雅で洗練された印象を演出します。";
volumeDresses[12].images = [
  "/dressdata/VD-013/IMG_8411.JPG",
  "/dressdata/VD-013/IMG_8412.JPG",
  "/dressdata/VD-013/IMG_8413.JPG",
];

// VD-14 Ivory Baroque Lace Dress
volumeDresses[13].name = "Ivory Baroque Lace Dress";
volumeDresses[13].description = "上品なバロック調レース刺繍が全体に施された、クラシカルで洗練された韓国クチュールスタイルのイーブニングドレス。イリュージョンメッシュのボートネックとショートレーススリーブが、控えめながら華やかな印象を演出します。すっきりとしたストレートシルエットとミディ丈のスカラップヘムが、上品で凛とした雰囲気を引き立てます。";
volumeDresses[13].images = [
  "/dressdata/VD-014/IMG_8418.JPG",
  "/dressdata/VD-014/IMG_8419.JPG",
  "/dressdata/VD-014/IMG_8420.JPG",
];

// VD-15 Ivory Rococo Lace Midi Dress
volumeDresses[14].name = "Ivory Rococo Lace Midi Dress";
volumeDresses[14].description = "繊細なフローラルレース刺繍とやわらかなチュールスカートが美しく調和した、韓国クチュールスタイルのウェディングドレス。透け感のあるイリュージョンネックラインとショートレーススリーブが、上品でロマンティックな印象を演出します。すっきりとしたAラインシルエットに、縦に流れるレースモチーフが加わることで、花嫁の姿をより優雅に引き立てます。";
volumeDresses[14].images = [
  "/dressdata/VD-015/IMG_8422.JPG",
  "/dressdata/VD-015/IMG_8423.JPG",
  "/dressdata/VD-015/IMG_8424.JPG",
];

// VD-16 Ivory Lace Evening Dress
volumeDresses[15].name = "Ivory Lace Evening Dress";
volumeDresses[15].description = "上品なストレートネックラインに、繊細なフラワーレースを重ねたアイボリーのイブニングドレス。すっきりとしたシルエットとやわらかなレースの質感が、清楚で洗練された印象を演出します。";
volumeDresses[15].images = [
  "/dressdata/VD-016/IMG_8463.JPG",
  "/dressdata/VD-016/IMG_8464.JPG",
  "/dressdata/VD-016/IMG_8465.JPG",
];

// VD-17 Ivory Illusion Minimal Dress
volumeDresses[16].name = "Ivory Illusion Minimal Dress";
volumeDresses[16].description = "シアーなイリュージョンネックと、すっきりとしたミニマルデザインが印象的なアイボリードレス。やわらかに流れるスカートラインが、上品で清楚な雰囲気を演出します。";
volumeDresses[16].images = [
  "/dressdata/VD-017/IMG_8466.JPG",
  "/dressdata/VD-017/IMG_8467.JPG",
  "/dressdata/VD-017/IMG_8468.JPG",
];

// VD-18 Ivory Floral Lace Midi Dress
volumeDresses[17].name = "Ivory Floral Lace Midi Dress";
volumeDresses[17].description = "上品なVネックラインと繊細なフローラルレースが印象的なアイボリーのミディドレス。透け感のある七分袖とスカラップヘムが、清楚でクラシカルな雰囲気を演出します。";
volumeDresses[17].images = [
  "/dressdata/VD-018/IMG_8469.JPG",
  "/dressdata/VD-018/IMG_8470.JPG",
  "/dressdata/VD-018/IMG_8471.JPG",
];

// VD-19 Ivory Satin Peplum Two-Piece Dress
volumeDresses[18].name = "Ivory Satin Peplum Two-Piece Dress";
volumeDresses[18].description = "上品なサテン素材を使用した、アイボリーのツーピースドレス。すっきりとしたトップスにペプラムデザインを合わせ、タイトなミディスカートが洗練された女性らしさを演出します。";
volumeDresses[18].images = [
  "/dressdata/VD-019/IMG_8472.JPG",
  "/dressdata/VD-019/IMG_8473.JPG",
  "/dressdata/VD-019/IMG_8474.JPG",
];

// VD-20 Blush Floral Lace Midi Dress
volumeDresses[19].name = "Blush Floral Lace Midi Dress";
volumeDresses[19].description = "上品なブラッシュカラーに繊細なフローラルレースを重ねた、ミディ丈のレースドレス。やわらかな透け感のあるショートスリーブと、すっきりとしたラインが清楚で華やかな印象を演出します。";
volumeDresses[19].images = [
  "/dressdata/VD-020/IMG_8475.JPG",
  "/dressdata/VD-020/IMG_8476.JPG",
  "/dressdata/VD-020/IMG_8477.JPG",
];

export const simpleDresses: RentalItem[] = placeholderSet("SD", 8, "Simple Dress");

export const accessories: RentalItem[] = placeholderSet("AC", 6, "Accessory");
