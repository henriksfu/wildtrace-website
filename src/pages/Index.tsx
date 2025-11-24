import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;