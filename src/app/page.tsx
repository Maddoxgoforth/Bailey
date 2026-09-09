import Hero from "@/components/sections/Hero";
import WhatsInside from "@/components/sections/WhatsInside";
import Community from "@/components/sections/Community";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Community />
      <WhatsInside />
      <About />
      <Pricing />
      <Footer />
    </main>
  );
}
