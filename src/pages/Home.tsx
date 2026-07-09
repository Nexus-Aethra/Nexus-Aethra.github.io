import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import NoiseField from "@/components/NoiseField";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Ecosystem from "@/components/Ecosystem";
import Features from "@/components/Features";
import Manifesto from "@/components/Manifesto";
import Roadmap from "@/components/Roadmap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-bone">
      <NoiseField />
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main className="relative">
        <Hero />
        <Vision />
        <Ecosystem />
        <Features />
        <Manifesto />
        <Roadmap />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
