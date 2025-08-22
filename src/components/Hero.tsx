"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-candle.png"
          alt="Hero Candle"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-[rgba(245,241,231,0.6)]"></div>
      </div>

      {/* Foreground content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-serif mb-4 text-[var(--color-soft-brown)]"
      >
        Light Up Your Space
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-[var(--color-forest-green)]"
      >
        Handmade eco-friendly candles crafted with love to bring warmth and calm into your home.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-[var(--color-soft-brown)] text-white rounded-xl shadow-lg"
      >
        Shop Now
      </motion.button>
    </section>
  );
}
