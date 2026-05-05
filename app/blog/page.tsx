import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: "first-post",
      title: "Why Algorithmic Gold Trading Outperforms Manual Day Trading",
      date: "May 5, 2026",
      excerpt: "Explore the quantitative advantages of utilizing algorithmic systems in highly liquid markets like XAU/USD, eliminating emotional bias.",
    },
    {
      id: "risk-management",
      title: "The Core Pillar: Institutional Risk Management",
      date: "April 28, 2026",
      excerpt: "How our strict maximum drawdown parameters protect your capital during unforeseen macroeconomic news events.",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-serif text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
              Insights & Analysis
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto">
              Market commentary, algorithmic updates, and transparent reviews of our XAU/USD trading strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="block">
                <article className="glass-panel h-full p-10 hover:-translate-y-2 transition-all duration-500 hover:border-accent-color group flex flex-col">
                  <time className="text-xs font-medium uppercase tracking-widest text-accent-color mb-4 block">
                    {post.date}
                  </time>
                  <h2 className="font-serif text-2xl mb-4 group-hover:text-accent-color transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-8 text-accent-color text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Article <span aria-hidden="true">&rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
