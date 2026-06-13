import FadeIn from "./FadeIn";
import ImageCarousel from "./ImageCarousel";
import type { RentalItem } from "@/lib/items";

interface ItemCardProps {
  item: RentalItem;
  delay?: number;
}

export default function ItemCard({ item, delay = 0 }: ItemCardProps) {
  const accent = item.grade === "premium" ? "var(--accent-premium)" : "var(--accent-standard)";

  return (
    <FadeIn delay={delay}>
      <div className="group">
        <div
          className="relative aspect-[3/4] bg-muted overflow-hidden mb-3 border-t-2"
          style={{ borderTopColor: accent }}
        >
          {item.images && item.images.length > 0 ? (
            <ImageCarousel images={item.images} alt={item.name} />
          ) : item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-foreground/5">
              <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/25">Coming Soon</span>
            </div>
          )}
        </div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/35">{item.code}</p>
        <p
          className="text-base text-foreground/70 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {item.name}
        </p>
      </div>
    </FadeIn>
  );
}
