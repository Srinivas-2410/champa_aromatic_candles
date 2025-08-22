"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const products = [
  { id: 1, name: "Lavender Bliss", price: "₹499", image: "/images/candle1.png" },
  { id: 2, name: "Vanilla Dream", price: "₹599", image: "/images/candle2.png" },
  { id: 3, name: "Citrus Glow", price: "₹699", image: "/images/candle3.png" },
];

export default function ProductPreview() {
  return (
    <section className="py-20 bg-[var(--color-beige)] px-6 md:px-20">
      <h2 className="text-3xl font-serif mb-10 text-center text-[var(--color-soft-brown)]">Our Bestsellers</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="bg-[var(--color-cream)] rounded-xl shadow-md overflow-hidden relative"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-64">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-soft-brown)]">{p.name}</h3>
                <p className="text-gray-700">{p.price}</p>
              </div>
              <Heart className="w-6 h-6 text-[var(--color-forest-green)] cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
