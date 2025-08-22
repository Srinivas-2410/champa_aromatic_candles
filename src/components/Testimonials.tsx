"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { id: 1, text: "These candles make my home smell amazing. Truly relaxing after a long day.", name: "Priya" },
    { id: 2, text: "The perfect gift for my partner. Beautifully crafted and long lasting.", name: "Rahul" },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[var(--color-cream)] text-center">
      <h2 className="text-3xl font-serif mb-10 text-[var(--color-soft-brown)]">What Our Customers Say</h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.id}
            className="italic text-lg text-gray-700 relative px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="absolute -left-2 top-0 w-6 h-6 text-[var(--color-soft-brown)]" />
            {t.text} <br /> <span className="font-semibold text-[var(--color-forest-green)]">– {t.name}</span>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
