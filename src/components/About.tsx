"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-[var(--color-cream)]">
      <motion.div
        className="relative w-full md:w-1/2 h-64 md:h-96"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/favicon.jpg"
          alt="About us"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-serif mb-4 text-[var(--color-soft-brown)]">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Each candle is hand-poured in small batches using natural soy wax and sustainable fragrances.
          Our mission is to create a cozy, elegant atmosphere while being kind to the planet.
        </p>
      </motion.div>
    </section>
  );
}
