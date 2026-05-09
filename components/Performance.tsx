"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Performance() {
  const [metrics, setMetrics] = useState({
    totalReturn: "26.22",
    dayReturn: "4.26",
    maxDrawdown: "13.02",
    monthReturn: "14.46",
    loading: true,
  });

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const [profileRes, indicatorsRes] = await Promise.all([
          fetch(
            "https://ratings.gtccopy.com/api/rating/1/profile/5588?widget_key=social_platform_ratings"
          ),
          fetch(
            "https://ratings.gtccopy.com/api/reports/5322/indicators?widget_key=social_platform_ratings"
          ),
        ]);

        if (!profileRes.ok || !indicatorsRes.ok) throw new Error("API failed");

        const profileData = await profileRes.json();
        const indicatorsData = await indicatorsRes.json();

        setMetrics({
          totalReturn: parseFloat(profileData.returnAllTime).toFixed(2),
          dayReturn: parseFloat(profileData.returnDay).toFixed(2),
          maxDrawdown: parseFloat(indicatorsData.maxDrawdown).toFixed(2),
          monthReturn: parseFloat(profileData.returnMonth).toFixed(2),
          loading: false,
        });
      } catch (error) {
        console.error("Failed to fetch performance metrics", error);
        setMetrics((prev) => ({ ...prev, loading: false }));
      }
    }

    fetchMetrics();
  }, []);

  const totalReturnFloat = parseFloat(metrics.totalReturn);
  const progressWidth = Math.min(totalReturnFloat, 100);

  return (
    <section id="performance" className="py-32 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
          Live Performance
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Metric */}
          <div className="md:col-span-3 p-10 bg-gradient-to-br from-accent-color/5 to-white/5 border border-accent-color/20 rounded relative overflow-hidden group hover:border-accent-color transition-colors duration-500">
            <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">
              Total Return
            </h4>
            <div className="flex items-baseline gap-2 text-green-500">
              <span className="font-serif text-6xl md:text-7xl font-bold">
                {metrics.loading ? "..." : metrics.totalReturn}
              </span>
              <span className="text-2xl">%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/5 mt-8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full bg-gradient-to-r from-accent-color to-[#f1d18a]"
              />
            </div>
          </div>

          {/* Sub Metrics */}
          {[
            { label: "Daily Return", value: metrics.dayReturn, color: "text-green-500" },
            { label: "Monthly Return", value: metrics.monthReturn, color: "text-green-500" },
            { label: "Max Drawdown", value: metrics.maxDrawdown, color: "text-red-500" },
          ].map((metric, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 border border-white/10 rounded hover:border-accent-color transition-colors duration-300 hover:-translate-y-1 transform"
            >
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4">
                {metric.label}
              </h4>
              <div className={`flex items-baseline gap-1 ${metric.color}`}>
                <span className="font-serif text-4xl font-bold">
                  {metrics.loading ? "..." : metric.value}
                </span>
                <span className="text-lg">%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/5 gap-4">
          <span className="text-xs text-text-muted">
            Live metrics synced with GTCCopy Platform
          </span>
          <a
            href="https://ratings.gtccopy.com/widgets/ratings/5588?widgetKey=social_platform_ratings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent-color hover:text-white transition-colors underline underline-offset-4"
          >
            View Verified Strategy
          </a>
        </div>
      </motion.div>
    </section>
  );
}
