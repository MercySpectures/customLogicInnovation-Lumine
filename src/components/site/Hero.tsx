import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero-product.jpg";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, delay: 0.9, ease: "power2.out" });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 1.05, ease: "power2.out" });
      gsap.from(".hero-img", { scale: 1.1, opacity: 0, duration: 1.4, delay: 0.3, ease: "power2.out" });
      gsap.from(".hero-meta", { opacity: 0, y: 10, duration: 0.8, delay: 1.2, stagger: 0.1 });
      gsap.to(".hero-scroll-ind", { y: 8, repeat: -1, yoyo: true, duration: 1.1, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-screen pt-24 lg:pt-28 bg-gradient-cream overflow-hidden"
    >
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-7rem)]">
        <div className="lg:col-span-7 relative z-10">
          <div className="hero-meta inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
            <span className="h-px w-10 bg-accent" />
            New Edition · Spring 2026
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-medium tracking-tight">
            <span className="block overflow-hidden">
              <span className="hero-line block">Radiant Skin</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block italic font-normal text-accent">Starts Here.</span>
            </span>
          </h1>
          <p className="hero-sub mt-8 max-w-md text-base lg:text-lg text-muted-foreground leading-relaxed">
            Luxury skincare crafted with nature's finest ingredients — formulated for the modern ritual.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest underline underline-offset-8 decoration-accent">
              Our story
            </a>
          </div>
          <div className="hero-meta mt-16 flex items-center gap-10 text-xs uppercase tracking-widest text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-foreground">12K+</div>
              <div className="mt-1">5★ Reviews</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">100%</div>
              <div className="mt-1">Clean Formulas</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh]">
          <div className="hero-img absolute inset-0">
            <img
              src={heroImg}
              alt="LUMINÉ signature serum"
              width={1280}
              height={1600}
              className="h-full w-full object-cover shadow-luxe"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background px-6 py-4 shadow-soft hidden lg:block">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bestseller</div>
            <div className="mt-1 font-display text-lg">Hydra Serum · $68</div>
          </div>
        </div>
      </div>
    </section>
  );
}
