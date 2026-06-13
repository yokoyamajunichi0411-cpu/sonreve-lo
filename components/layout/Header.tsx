import Image from "next/image";

const navItems = [
  { href: "#volume-dress", label: "Volume Dress" },
  { href: "#simple-dress", label: "Simple Dress" },
  { href: "#accessories", label: "Accessories" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        <a href="#top" className="flex items-center flex-shrink-0">
          <Image src="/logo/sonreve_logo_dark.png" alt="SON RÊVE / Wedding Dress Rental & Photo" width={4608} height={3072} className="h-16 w-auto" priority />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-[11px] tracking-[0.25em] uppercase border border-foreground/20 px-4 py-2 hover:border-foreground/60 transition-colors duration-300"
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
