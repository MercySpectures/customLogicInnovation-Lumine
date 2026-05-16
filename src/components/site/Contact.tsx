export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Begin Your Ritual</div>
        <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
          Ready to transform <em className="italic font-normal text-accent">your skin</em>?
        </h2>
        <p className="mt-8 text-background/70 max-w-xl mx-auto text-lg">
          Join thousands of customers discovering their most radiant self.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#products" className="bg-accent text-accent-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors">
            Shop now
          </a>
          <a href="#" className="border border-background/30 px-10 py-4 text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-colors">
            Get consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background/70 border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl tracking-[0.2em] text-background">LUMINÉ</div>
        <div className="text-xs uppercase tracking-widest">© 2026 Luminé Skincare. Radiant Skin, Elevated.</div>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">Journal</a>
          <a href="#" className="hover:text-accent">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
