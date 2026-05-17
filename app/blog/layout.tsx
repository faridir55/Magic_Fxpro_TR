"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname === "/blog";

  return (
    <>
      <Navbar />
      {isIndex ? (
        children
      ) : (
        <main className="flex-grow pt-32 pb-32 px-5 md:px-8 min-h-screen relative overflow-hidden bg-bg-color">
          {/* Subtle top radial gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-accent-color/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="max-w-[800px] mx-auto relative z-10">
            <div className="mb-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-text-muted hover:text-accent-color transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-color focus-visible:ring-offset-4 focus-visible:ring-offset-bg-color rounded"
              >
                <span aria-hidden="true" className="mr-2">&larr;</span> Back to Insights
              </Link>
            </div>
            
            <article className="prose prose-invert max-w-none
              prose-headings:font-serif prose-headings:text-text-color 
              prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-medium
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-text-muted prose-p:leading-[1.8] prose-p:text-lg prose-p:mb-8
              prose-a:text-accent-color prose-a:no-underline prose-a:border-b prose-a:border-accent-color/30 hover:prose-a:border-accent-color hover:prose-a:text-accent-color/90 prose-a:transition-all
              prose-blockquote:border-l-2 prose-blockquote:border-accent-color prose-blockquote:bg-accent-color/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:text-text-color prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:my-12
              prose-li:text-text-muted prose-li:leading-relaxed prose-li:text-lg prose-li:my-2
              prose-ul:my-8 prose-ol:my-8
              prose-strong:text-text-color prose-strong:font-semibold
              prose-hr:border-glass-border prose-hr:my-16
              prose-img:rounded-xl prose-img:border prose-img:border-glass-border
            ">
              {children}
            </article>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
