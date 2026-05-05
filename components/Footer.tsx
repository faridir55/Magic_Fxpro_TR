export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-20 pb-10 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="font-serif text-3xl font-bold tracking-widest text-text-color mb-8">
          GTC<span className="text-accent-color">GOLD</span>
        </div>
        
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-serif italic">
          "The Element of Wealth, Mastered."
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16 uppercase text-sm tracking-widest font-medium">
          <a href="/" className="text-text-muted hover:text-accent-color transition-colors">Home</a>
          <a href="#strategy" className="text-text-muted hover:text-accent-color transition-colors">Strategy</a>
          <a href="#performance" className="text-text-muted hover:text-accent-color transition-colors">Performance</a>
          <a href="/tutorials" className="text-text-muted hover:text-accent-color transition-colors">Tutorials</a>
          <a href="/blog" className="text-text-muted hover:text-accent-color transition-colors">Blog</a>
        </div>

        <div className="border-t border-white/5 pt-10 mt-10">
          <p className="text-xs text-text-muted/60 leading-relaxed max-w-3xl mx-auto mb-6">
            <strong className="text-text-muted">RISK DISCLOSURE:</strong> Trading foreign exchange and precious metals on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Past performance is not indicative of future results. Before deciding to invest in foreign exchange or copy trading, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
          <p className="text-xs text-text-muted/40">
            &copy; {new Date().getFullYear()} GTC Gold. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-accent-color/5 blur-3xl rounded-[100%]" />
    </footer>
  );
}
