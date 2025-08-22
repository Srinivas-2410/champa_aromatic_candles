import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-[var(--color-soft-brown)] text-white text-center">
      <p className="mb-4">© 2025 Champa Candles. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <Instagram className="w-5 h-5 cursor-pointer" />
        <Facebook className="w-5 h-5 cursor-pointer" />
      </div>
    </footer>
  );
}
