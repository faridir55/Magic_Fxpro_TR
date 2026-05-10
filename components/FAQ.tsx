"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the minimum amount to start copying?",
      answer: "The minimum capital required is $100. This ensures safe lot sizing and proper risk management on your account.",
    },
    {
      question: "Do I need any trading experience?",
      answer: "No experience is needed. Once you subscribe, the algorithm trades automatically on your behalf — you don't need to monitor charts or place any orders manually.",
    },
    {
      question: "Do I need to keep my computer on?",
      answer: "No. The strategy runs on our servers 24/5. Your computer can be completely off and trades will still execute normally.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer: "Yes. Your funds are held in your own GTC brokerage account and are never locked. You can withdraw at any time without penalties.",
    },
    {
      question: "How does the performance fee work?",
      answer: "A performance fee is only charged on profits. If the strategy does not generate returns, you pay nothing. Full fee details are available on the strategy profile page.",
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
          Frequently Asked Questions
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
