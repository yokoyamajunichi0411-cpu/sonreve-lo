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

export const volumeDresses: RentalItem[] = placeholderSet("VD", 8, "Volume Dress");

volumeDresses[0].name = "Crystal Royale";
volumeDresses[0].description = "ドレス全体に贅沢なビジューとクリスタル装飾を施したラグジュアリーウェディングドレス。上品なVネックと美しいシルエットが花嫁の魅力を引き立て、繊細な輝きが特別な一日を彩ります。";
volumeDresses[0].images = [
  "/dorsssdata/VD-01/IMG_8360.JPG",
  "/dorsssdata/VD-01/IMG_8361.JPG",
  "/dorsssdata/VD-01/IMG_8362.JPG",
];

volumeDresses[1].name = "Pearl Étoile";
volumeDresses[1].description = "無数のパールとクリスタルが輝くAラインドレス。光の中で星のように煌めく繊細なビーディングが、花嫁をより美しく演出します。";
volumeDresses[1].images = [
  "/dorsssdata/VD-02/IMG_8367.JPG",
  "/dorsssdata/VD-02/IMG_8368.JPG",
  "/dorsssdata/VD-02/IMG_8369.JPG",
];

export const simpleDresses: RentalItem[] = placeholderSet("SD", 8, "Simple Dress");

export const accessories: RentalItem[] = placeholderSet("AC", 6, "Accessory");
