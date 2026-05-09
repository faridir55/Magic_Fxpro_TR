"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Cpu } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Cpu size={40} className="text-accent-color mb-6" />,
      title: "Algorithmic Precision",
      description: "Data-driven execution with zero emotional interference, capturing optimal XAU/USD movements.",
    },
    {
      icon: <Shield size={40} className="text-accent-color mb-6" />,
      title: "Risk Management",
      description: "Strict drawdown limits and dynamic lot sizing to protect your capital in volatile markets.",
    },
    {
      icon: <TrendingUp size={40} className="text-accent-color mb-6" />,
      title: "Consistent Growth",
      description: "Engineered for steady, compounding returns over the long term, avoiding high-risk gambles.",
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
