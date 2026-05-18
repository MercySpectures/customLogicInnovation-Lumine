import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

const items = [
  { author: "Michelle Park", role: "Makeup Artist", quote: "I recommend LUMINÉ to all my clients. Unmatched quality — everyone sees results within weeks." },
  { author: "Sarah Mitchell", role: "Beauty Enthusiast", quote: "My skin has never looked better. The serums are absolutely transformative, and I love knowing the products are ethically made." },
  { author: "Emily Rodriguez", role: "Eco-Conscious", quote: "Finally a brand that takes sustainability seriously. Premium results without the environmental guilt." },
  { author: "Dr. Jessica Chen", role: "Dermatologist", quote: "As someone with sensitive skin, I was hesitant. LUMINÉ is gentle yet incredibly effective. Highly recommend." },
  { author: "Amanda Torres", role: "Fashion Editor", quote: "The gold mask is my weekly ritual. Luxurious, effective, and the glow is undeniably visible." },
  { author: "Michelle Park", role: "Makeup Artist", quote: "I recommend LUMINÉ to all my clients. Unmatched quality — everyone sees results within weeks." },
];

export function Testimonials() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tm-card", {
        y: 60,
        opacity: 0,
        rotateY: 6,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from(".tm-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={root} className="py-28 lg:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="tm-heading max-w-3xl mb-20">
          <div className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Our Community</div>
          <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[1.02]">
            Loved by those who <em className="italic font-normal text-accent">glow</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10">
          {items.map((t) => (
            <figure key={t.author} className="tm-card bg-foreground p-8 lg:p-10 flex flex-col">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-background/15">
                <div className="font-medium">{t.author}</div>
                <div className="text-xs uppercase tracking-widest text-background/60 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
