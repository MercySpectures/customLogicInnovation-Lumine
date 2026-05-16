import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-img-inner", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative h-[60vh] lg:h-[85vh] overflow-hidden">
          <img
            src={aboutImg}
            alt="Skincare ritual"
            loading="lazy"
            width={1200}
            height={1400}
            className="about-img-inner absolute inset-0 h-[120%] w-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pl-10">
          <div className="about-reveal text-xs tracking-[0.3em] uppercase text-accent mb-6">— Our Philosophy</div>
          <h2 className="about-reveal font-display text-5xl lg:text-6xl leading-[1.05] font-medium text-balance">
            Crafted for <em className="font-normal italic text-accent">every</em> skin.
          </h2>
          <p className="about-reveal mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
            At LUMINÉ, we believe skincare is deeply personal. Each formula is built with carefully sourced
            natural ingredients, backed by rigorous science, and designed to amplify your natural radiance.
          </p>
          <dl className="about-reveal mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Sourcing</dt>
              <dd className="mt-2 font-display text-2xl">Single-origin</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Formulation</dt>
              <dd className="mt-2 font-display text-2xl">Cold-blended</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Testing</dt>
              <dd className="mt-2 font-display text-2xl">Dermatologist</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Packaging</dt>
              <dd className="mt-2 font-display text-2xl">Refillable</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
