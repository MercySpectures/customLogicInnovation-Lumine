import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

const products = [
  { name: "Hydra Serum", category: "Serums", price: 68, desc: "Hyaluronic acid & vitamin C complex", rating: 4.8, reviews: 142 },
  { name: "Gold Radiance Mask", category: "Masks", price: 54, desc: "24K gold-infused luminosity treatment", rating: 4.9, reviews: 198 },
  { name: "Luminous Eye Elixir", category: "Eye Care", price: 72, desc: "Targeted fine line & dark circle care", rating: 4.7, reviews: 87 },
  { name: "Midnight Renewal", category: "Moisturizers", price: 78, desc: "Rich peptide-rich night cream", rating: 4.9, reviews: 156 },
  { name: "Luxe Facial Oil", category: "Oils", price: 62, desc: "Jojoba, rosehip & argan blend", rating: 4.8, reviews: 124 },
  { name: "Silk Cleanser", category: "Cleansers", price: 42, desc: "Silk proteins & chamomile", rating: 4.6, reviews: 203 },
  { name: "Radiant Essence Toner", category: "Toners", price: 48, desc: "Rose water & niacinamide", rating: 4.7, reviews: 95 },
  { name: "Retinol Night Serum", category: "Serums", price: 85, desc: "Advanced cell renewal formula", rating: 4.8, reviews: 112 },
];

const swatches = [
  "linear-gradient(160deg,#e8d4b8,#c9a876)",
  "linear-gradient(160deg,#f5e6c8,#d4af6a)",
  "linear-gradient(160deg,#e5cba5,#b8915a)",
  "linear-gradient(160deg,#2a2520,#0f1419)",
  "linear-gradient(160deg,#d9b88a,#9a7544)",
  "linear-gradient(160deg,#f0e4d0,#c9a876)",
  "linear-gradient(160deg,#ead7b5,#b89464)",
  "linear-gradient(160deg,#1a1f2a,#3a3530)",
];

export function Products() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trackEl = track.current!;
      const totalScroll = () => trackEl.scrollWidth - window.innerWidth + 80;

      gsap.to(trackEl, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".prod-heading > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={root} className="relative h-screen overflow-hidden bg-gradient-cream-diag">
      <div className="absolute top-0 inset-x-0 pt-24 lg:pt-32 px-6 lg:px-10 z-10 pointer-events-none">
        <div className="prod-heading max-w-7xl mx-auto flex items-end justify-between gap-8">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-accent mb-4">— The Collection</div>
            <h2 className="font-display text-5xl lg:text-7xl font-medium leading-none">
              Our <em className="italic font-normal">Collection</em>
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            Eight rituals, one philosophy. Scroll to explore.
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div ref={track} className="flex gap-8 pl-[10vw] pr-[10vw] will-change-transform">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="prod-card group w-[78vw] sm:w-[55vw] md:w-[42vw] lg:w-[28vw] xl:w-[24vw] flex-shrink-0 flex flex-col"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden shadow-soft"
                style={{ background: swatches[i] }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/3 h-3/5 bg-background/20 backdrop-blur-sm border border-background/30 flex items-end justify-center pb-6">
                    <div className="text-[10px] tracking-[0.3em] text-background/90 uppercase">LUMINÉ</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-background/80">
                  No. 0{i + 1}
                </div>
                <button className="absolute bottom-4 right-4 bg-background text-foreground px-4 py-2 text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Add — ${p.price}
                </button>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.category}</div>
                  <h3 className="font-display text-2xl mt-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">{p.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display text-xl">${p.price}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" /> {p.rating}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
        ← Scroll to explore →
      </div>
    </section>
  );
}
