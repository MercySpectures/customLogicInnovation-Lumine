import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Products } from "@/components/site/Products";
import { Faq } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMINÉ — Radiant Skin, Elevated" },
      { name: "description", content: "Luxury skincare with 100% natural ingredients. Dermatologist tested, eco-friendly, cruelty-free rituals." },
      { property: "og:title", content: "LUMINÉ — Radiant Skin, Elevated" },
      { property: "og:description", content: "Luxury skincare crafted with nature's finest ingredients." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Features />
      <About />
      <Products />
      <Faq />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
