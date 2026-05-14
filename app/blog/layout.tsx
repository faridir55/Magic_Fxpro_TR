import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-grow pt-32 pb-20 px-4 min-h-screen">
        <article className="max-w-3xl mx-auto prose prose-invert prose-headings:font-serif prose-headings:text-text-color prose-a:text-accent-color hover:prose-a:text-white prose-a:transition-colors prose-p:text-text-muted prose-li:text-text-muted prose-blockquote:border-accent-color prose-blockquote:text-text-color prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:bg-accent-color/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r">
          {children}
        </article>
      </main>
    </>
  );
}
