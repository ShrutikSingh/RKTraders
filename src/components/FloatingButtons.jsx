import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "7890390985";
const WHATSAPP_NUMBER = "7890390985";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {/* WhatsApp Button */}
      <div className="group relative">
        <span
          className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/95 px-3 py-1 text-xs text-white opacity-0 shadow-sm backdrop-blur transition group-hover:opacity-100"
        >
          Chat on WhatsApp
        </span>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-300/50 transition hover:translate-y-0.5 hover:bg-emerald-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* Call Button */}
      <div className="group relative">
        <span
          className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/95 px-3 py-1 text-xs text-white opacity-0 shadow-sm backdrop-blur transition group-hover:opacity-100"
        >
          Call R.K. Traders
        </span>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-300/60 transition hover:translate-y-0.5 hover:bg-orange-700"
          aria-label="Call Now"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
