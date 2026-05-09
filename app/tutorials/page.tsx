import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tutorials() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
              Tutorials
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto">
              Master the platform and maximize your algorithmic copy trading potential with our step-by-step guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "How to connect your MT4 account",
                desc: "A complete walkthrough on linking your existing MetaTrader 4 account to the GTCCopy platform safely.",
              },
              {
                title: "Understanding Drawdown Metrics",
                desc: "Learn how to interpret our live performance dashboard and set proper risk expectations.",
              },
              {
                title: "Setting up automated withdrawals",
                desc: "Configure your account to automatically withdraw profits at the end of each trading week.",
              },
              {
                title: "Adjusting your copy multiplier",
                desc: "Scale your risk and reward by adjusting the proportional lot size multiplier on your dashboard.",
              },
            ].map((tutorial, idx) => (
              <div key={idx} className="glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300 hover:border-accent-color cursor-pointer">
                <div className="w-12 h-12 bg-accent-color/10 rounded flex items-center justify-center text-accent-color font-bold mb-6 group-hover:bg-accent-color group-hover:text-bg-color transition-colors">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-xl mb-3">{tutorial.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{tutorial.desc}</p>
                <div className="mt-6 text-accent-color text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Watch Video <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
