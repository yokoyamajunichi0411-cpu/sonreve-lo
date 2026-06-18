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

export const volumeDresses: RentalItem[] = placeholderSet("VD", 13, "Volume Dress");

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

// VD-03
volumeDresses[2].images = [
  "/dressdata/VD-003/IMG_8382.JPG",
  "/dressdata/VD-003/IMG_8383.JPG",
  "/dressdata/VD-003/IMG_8384.JPG",
];

// VD-04
volumeDresses[3].images = [
  "/dressdata/VD-004/IMG_8385.JPG",
  "/dressdata/VD-004/IMG_8386.JPG",
  "/dressdata/VD-004/IMG_8387.JPG",
];

// VD-05
volumeDresses[4].images = [
  "/dressdata/VD-005/IMG_8388.JPG",
  "/dressdata/VD-005/IMG_8389.JPG",
  "/dressdata/VD-005/IMG_8390.JPG",
];

// VD-06
volumeDresses[5].images = [
  "/dressdata/VD-006/IMG_8394.JPG",
  "/dressdata/VD-006/IMG_8395.JPG",
  "/dressdata/VD-006/IMG_8396.JPG",
];

// VD-07
volumeDresses[6].images = [
  "/dressdata/VD-007/IMG_8397.JPG",
  "/dressdata/VD-007/IMG_8398.JPG",
  "/dressdata/VD-007/IMG_8399.JPG",
];

// VD-08, VD-09 → COMING SOON（画像なし）

// VD-10
volumeDresses[9].images = [
  "/dressdata/VD-010/IMG_8400.JPG",
  "/dressdata/VD-010/IMG_8401.JPG",
  "/dressdata/VD-010/IMG_8402.JPG",
];

// VD-11
volumeDresses[10].images = [
  "/dressdata/VD-011/IMG_8403.JPG",
  "/dressdata/VD-011/IMG_8404.JPG",
  "/dressdata/VD-011/IMG_8405.JPG",
  "/dressdata/VD-011/IMG_8406.JPG",
];

// VD-12
volumeDresses[11].images = [
  "/dressdata/VD-012/IMG_8407.JPG",
  "/dressdata/VD-012/IMG_8408.JPG",
  "/dressdata/VD-012/IMG_8409.JPG",
  "/dressdata/VD-012/IMG_8410.JPG",
];

// VD-13
volumeDresses[12].images = [
  "/dressdata/VD-013/IMG_8411.JPG",
  "/dressdata/VD-013/IMG_8412.JPG",
  "/dressdata/VD-013/IMG_8413.JPG",
];

export const simpleDresses: RentalItem[] = placeholderSet("SD", 8, "Simple Dress");

export const accessories: RentalItem[] = placeholderSet("AC", 6, "Accessory");
