"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-500 hover:scale-110 transition-all duration-300"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
