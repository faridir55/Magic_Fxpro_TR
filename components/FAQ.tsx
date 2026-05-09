"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the minimum investment required?",
      answer: "The minimum required capital to copy the GTC Gold strategy is typically determined by the platform parameters to ensure safe lot sizing. Please check the strategy profile for the current minimums.",
    },
    {
      question: "Do I need to leave my computer on?",
      answer: "No. The trades are copied entirely on the server side through the GTC platform. Your account will mirror the strategy 24/5 automatically.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer: "Yes, you retain full control over your funds. You can pause the copying or withdraw your capital at any time without lock-in periods.",
    },
    {
      question: "How does the performance fee work?",
      answer: "A performance fee is only charged on new profits generated above the high-water mark. If there is no profit, there is no fee.",
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
