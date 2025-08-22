"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 text-center bg-[var(--color-beige)]">
      <h2 className="text-3xl font-serif mb-4 text-[var(--color-soft-brown)]">Stay cozy, stay updated.</h2>
      <p className="mb-6 text-gray-700">Subscribe for offers & new fragrance alerts.</p>
      <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-l-lg border border-gray-300 w-full"
        />
        <button className="p-3 bg-[var(--color-soft-brown)] text-white rounded-r-lg flex items-center gap-2">
          <Mail className="w-5 h-5" /> Subscribe
        </button>
      </div>
    </section>
  );
}
