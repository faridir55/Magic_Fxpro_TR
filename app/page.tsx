import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Performance from "@/components/Performance";
import CoreValues from "@/components/CoreValues";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Strategy Section Spacer / Hook */}
        {/*<div id="strategy" className="h-px w-full" />*/}

        <HowItWorks />
        <Performance />
        <CoreValues />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
