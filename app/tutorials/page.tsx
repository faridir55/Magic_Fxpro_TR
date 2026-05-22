import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tutorials() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
              Video Eğitimler
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto">
              Özel algoritmalarımıza nasıl kayıt olacağınızı ve bağlanacağınızı öğrenin.
            </p>
          </div>

          <div className="space-y-16">
            <section className="tutorial-section">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-white">
                1. Hesap Nasıl Açılır
              </h2>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border border-accent-color/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/UE7r7u8Iqsc?si=EP3QVUO517dVe-Tt"
                  title="Hesap Nasıl Açılır"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            <section className="tutorial-section">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-white">
                2. Hesap Nasıl Doğrulanır
              </h2>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border border-accent-color/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/p4t7UKNjGm8?si=nTmngCQr8fIeOt_V"
                  title="Hesap Nasıl Doğrulanır"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
            <section className="tutorial-section">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-white">
                3. Para Yatırma ve Çekme İşlemi
              </h2>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border border-accent-color/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/sMKv9czbF30?si=v4WkOww6qLZVMKMK"
                  title="Para Yatırma ve Çekme İşlemi"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
