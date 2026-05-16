import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return setStatus("error");
    setStatus("ok");
    setEmail("");
  };

  return (
    <section className="py-28 lg:py-36 bg-secondary">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Newsletter</div>
        <h2 className="font-display text-4xl lg:text-6xl font-medium leading-[1.05] text-balance">
          Join our beauty community.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Get 20% off your first order and exclusive skincare rituals delivered weekly.
        </p>
        <form onSubmit={submit} className="mt-12 max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="Enter your email"
            className="flex-1 bg-background border border-border px-5 py-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={!valid}
            className="bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50"
          >
            Subscribe
          </button>
        </form>
        <div className="mt-4 h-5 text-sm">
          {status === "ok" && <span className="text-accent">Check your inbox for a special welcome offer.</span>}
          {status === "error" && <span className="text-destructive">Please enter a valid email address.</span>}
        </div>
      </div>
    </section>
  );
}
