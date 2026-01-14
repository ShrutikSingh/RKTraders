import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "7890390985"; // replace with uncle's number
const WHATSAPP_NUMBER = "7890390985"; // same or different

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-600 text-white shadow-lg hover:scale-110 transition"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </a>

    </div>
  );
}
