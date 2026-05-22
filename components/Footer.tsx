import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-20 pb-10 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="flex justify-center mb-8">
          <img
            src="/MagicFX_pro.png"
            alt="MagicFX Pro Logosu"
            className="h-24 w-auto object-contain"
          />
        </Link>

        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto font-serif italic">
          &quot;Zenginliğin Elementi, Ustalaşıldı.&quot;
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">Bize Ulaşın</h4>
          <a
            href="https://wa.me/+15019144353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/40 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
          >
            <MessageCircle size={20} />
            <span className="font-medium">WhatsApp ile Yazın</span>
          </a>
        </div>

        <div className="border-t border-white/5 pt-10 mt-10">
          <p className="text-xs text-text-muted/60 leading-relaxed max-w-3xl mx-auto mb-6">
            <strong className="text-text-muted">RİSK AÇIKLAMASI:</strong> Döviz ve kıymetli metal marjlı işlemleri yüksek düzeyde risk taşır ve tüm yatırımcılar için uygun olmayabilir. Yüksek kaldıraç oranı sizin lehinize olabileceği gibi aleyhinize de çalışabilir. Geçmiş performans gelecekteki sonuçların göstergesi değildir. Döviz veya kopya işlem yatırımı yapmaya karar vermeden önce, yatırım hedeflerinizi, deneyim seviyenizi ve risk iştahınızı dikkatlice değerlendirmelisiniz.
          </p>
          <p className="text-xs text-text-muted/40">
            &copy; {new Date().getFullYear()} Magic FX Pro. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-accent-color/5 blur-3xl rounded-[100%]" />
    </footer>
  );
}
