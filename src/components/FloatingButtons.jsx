import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "7890390985";
const WHATSAPP_NUMBER = "7890390985";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <div className="relative group">
        <span className="absolute right-16 top-1/2 -translate-y-1/2
          bg-black text-white text-sm px-3 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition whitespace-nowrap">
          WhatsApp Now
        </span>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14
            rounded-full bg-green-500 text-white shadow-lg
            hover:scale-110 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Call Button */}
      <div className="relative group">
        <span className="absolute right-16 top-1/2 -translate-y-1/2
          bg-black text-white text-sm px-3 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition whitespace-nowrap">
          Call Now
        </span>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center w-14 h-14
            rounded-full bg-orange-600 text-white shadow-lg
            hover:scale-110 transition"
          aria-label="Call Now"
        >
          <Phone size={26} />
        </a>
      </div>

    </div>
  );
}
