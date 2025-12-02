import { useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks"; // We can treat this as Approach
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  const approachRef = useRef<HTMLElement>(null);

  const scrollToApproach = () => {
    approachRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden">
      <Hero onApproachClick={scrollToApproach} />
      <About />
      <Features />
      <section ref={approachRef}>
        <HowItWorks /> {/* This will be your Approach section */}
      </section>
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;
