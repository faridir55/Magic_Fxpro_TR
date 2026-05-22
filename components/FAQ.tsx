"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kopyalamaya başlamak için minimum tutar nedir?",
      answer: "Gerekli minimum sermaye 100$'dır. Bu, hesabınızda güvenli lot boyutlandırma ve uygun risk yönetimi sağlar.",
    },
    {
      question: "Herhangi bir işlem deneyimine ihtiyacım var mı?",
      answer: "Deneyim gerekmez. Abone olduğunuzda, algoritma sizin adınıza otomatik olarak işlem yapar — grafikleri izlemenize veya manuel sipariş vermenize gerek yoktur.",
    },
    {
      question: "Bilgisayarımı açık tutmam gerekiyor mu?",
      answer: "Hayır. Strateji sunucularımızda 24/5 çalışır. Bilgisayarınız tamamen kapalı olabilir ve işlemler normal şekilde gerçekleştirilmeye devam eder.",
    },
    {
      question: "Paramı istediğim zaman çekebilir miyim?",
      answer: "Evet. Fonlarınız kendi GTC aracı kurum hesabınızda tutulur ve asla kilitlenmez. Ceza olmaksızın istediğiniz zaman çekebilirsiniz.",
    },
    {
      question: "Performans ücreti nasıl çalışır?",
      answer: "Performans ücreti yalnızca kârlar üzerinden alınır. Strateji getiri sağlamazsa hiçbir ödeme yapmazsınız. Tam ücret detayları strateji profil sayfasında mevcuttur.",
    },
  ];

  return (
    <section className="py-32 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
          Sıkça Sorulan Sorular
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-glass-border rounded bg-white/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-lg text-accent-color">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-accent-color flex-shrink-0" size={20} />
              ) : (
                <Plus className="text-text-muted flex-shrink-0" size={20} />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
