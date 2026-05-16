import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 h-16 lg:h-20">
        <a href="#home" className="font-display text-2xl tracking-[0.2em] font-medium">
          LUMINÉ
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 hover:text-accent transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Cart" className="relative p-2 hover:text-accent transition-colors">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-0 -right-0 h-4 w-4 rounded-full bg-accent text-[10px] flex items-center justify-center text-accent-foreground font-medium">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
