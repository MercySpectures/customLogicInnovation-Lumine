import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Sparkles, Recycle, HeartHandshake } from "lucide-react";

const items = [
  { icon: Leaf, heading: "100% Natural", description: "Formulated with pure, naturally-derived ingredients. No harsh chemicals." },
  { icon: Sparkles, heading: "Dermatologist Tested", description: "Clinically proven results with dermatologist approval for all skin types." },
  { icon: Recycle, heading: "Eco-Friendly", description: "Sustainable, refillable packaging with carbon-neutral shipping." },
  { icon: HeartHandshake, heading: "Cruelty-Free", description: "Never tested on animals. Vegan formulations. Certified ethical." },
];

export function Features() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feat-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 lg:py-32 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-accent mb-4">— The LUMINÉ Difference</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">Why choose LUMINÉ.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((it) => (
            <div key={it.heading} className="feat-card bg-secondary p-8 lg:p-10 group hover:bg-background transition-colors">
              <it.icon className="h-7 w-7 text-accent" strokeWidth={1.25} />
              <h3 className="mt-8 font-display text-xl">{it.heading}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.description}</p>
              <div className="mt-8 text-xs tracking-widest uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
