"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Cpu } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Cpu size={40} className="text-accent-color mb-6" />,
      title: "Algoritmik Hassasiyet",
      description: "Sıfır duygusal müdahale ile veriye dayalı işlem yürütme, optimum XAU/USD hareketlerini yakalama.",
    },
    {
      icon: <Shield size={40} className="text-accent-color mb-6" />,
      title: "Risk Yönetimi",
      description: "Oynak piyasalarda sermayenizi korumak için sıkı düşüş limitleri ve dinamik lot boyutlandırma.",
    },
    {
      icon: <TrendingUp size={40} className="text-accent-color mb-6" />,
      title: "Sürekli Büyüme",
      description: "Yüksek riskli kumarlardan kaçınarak uzun vadede istikrarlı, bileşik getiriler için tasarlandı.",
    },
  ];

  return (
    <section className="py-32 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="p-4 rounded-full bg-accent-color/5 group-hover:bg-accent-color/10 transition-colors duration-500">
              {value.icon}
            </div>
            <h4 className="font-serif text-xl mb-4 tracking-wide">{value.title}</h4>
            <p className="text-text-muted leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
