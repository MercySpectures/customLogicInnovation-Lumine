import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  { q: "Are your products suitable for sensitive skin?", a: "Yes, all formulas are hypoallergenic. We recommend a patch test and our team can help match your skin type." },
  { q: "What is your return policy?", a: "60-day money-back guarantee. Return in original packaging for a full refund — no questions asked." },
  { q: "How long does shipping take?", a: "Standard 5–7 business days. Express 2–3 days. Free shipping on orders over $100." },
  { q: "Are your products cruelty-free?", a: "100%. Certified cruelty-free with ethically sourced ingredients." },
  { q: "Can I layer multiple serums?", a: "Yes — apply lightest to heaviest. Start with Hydra Serum, follow with treatments, seal with moisturizer." },
  { q: "How often should I use the Gold Radiance Mask?", a: "1–2 times per week for best results. Once weekly for sensitive skin." },
  { q: "What is your sustainability commitment?", a: "100% recyclable packaging, sustainable sourcing, carbon-neutral shipping, plus one tree planted per order." },
  { q: "Do you offer subscriptions?", a: "Yes — monthly subscription saves 20% and gives early access to new launches." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-accent mb-4">— Questions</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">Frequently asked.</h2>
        </div>
        <div className="border-t border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-8 text-left group"
                >
                  <span className="font-display text-lg lg:text-2xl pr-4 group-hover:text-accent transition-colors">
                    {it.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={1.25}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 lg:pb-8 pr-12 text-muted-foreground leading-relaxed max-w-2xl">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
