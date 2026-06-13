export type Grade = "premium" | "standard";

export interface RentalItem {
  code: string;
  name: string;
  grade: Grade;
  image?: string;
  images?: string[];
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
volumeDresses[0].images = [
  "/sample/dress-sample-1.jpg",
  "/sample/dress-sample-2.jpg",
  "/sample/dress-sample-3.jpg",
];

export const simpleDresses: RentalItem[] = placeholderSet("SD", 8, "Simple Dress");

export const accessories: RentalItem[] = placeholderSet("AC", 6, "Accessory");
