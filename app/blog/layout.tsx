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
        <main className="flex-grow pt-32 pb-32 px-5 md:px-8 min-h-screen relative overflow-hidden bg-bg-color isolate">
          {/* Subtle top radial gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-accent-color/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          <div className="max-w-[800px] mx-auto relative z-10">
            <div className="mb-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-text-muted hover:text-accent-color transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-color focus-visible:ring-offset-4 focus-visible:ring-offset-bg-color rounded"
              >
                <span aria-hidden="true" className="mr-2">&larr;</span> Back to Insights
              </Link>
            </div>
            
            <article className="article-prose">
              {children}
            </article>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
