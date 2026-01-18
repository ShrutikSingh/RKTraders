import { Phone, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";




const ContactSection = () => {
  return (
    <section className="bg-orange-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold">📍 Address:</span><br />
            New Siwan Sugar Mill, Renuka Nagar, Bypass Road,<br />
            Near Ramesh Sons HP Petrol Pump,<br />
            Siwan, Bihar – 841226
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-2 text-gray-700">
            <Phone className="text-orange-600" size={20} />
            <a
              href="tel:+917890390985"
              className="hover:underline"
            >
              +91 7890390985
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 mb-2 text-gray-700">
            <FaWhatsapp className="text-green-600" size={22} />
            <a
              href="https://wa.me/917890390985"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-green-700"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-3 text-gray-700">
            <Facebook className="text-blue-600" size={20} />
            <a
              href="https://facebook.com/rktraders"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              facebook.com/rktraders
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[350px] md:h-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="R.K. Traders Location"
            src="https://www.google.com/maps?q=New%20Siwan%20Sugar%20Mill%2C%20Renuka%20Nagar%2C%20Bypass%20Road%2C%20near%20Ramesh%20Sons%20HP%20Petrol%20Pump%2C%20Siwan%2C%20Bihar%20841226&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
