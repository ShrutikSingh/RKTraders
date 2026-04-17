import { Phone, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";




const ContactSection = () => {
  return (
    <section className="bg-orange-50/60 px-4 py-16 sm:px-6 md:px-8 mt-12 md:mt-20">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-orange-100 md:max-w-6xl md:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                Get in touch with R.K. Traders
              </h2>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                <span className="font-semibold">Address:</span>
                <br />
                New Siwan Sugar Mill, Renuka Nagar, Bypass Road,
                <br />
                Near Ramesh Sons HP Petrol Pump,
                <br />
                Siwan, Bihar – 841226
              </p>

              {/* Phone */}
              <div className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                  <Phone size={18} />
                </span>
                <a
                  href="tel:+917890390985"
                  className="text-sm font-medium text-slate-800 hover:text-orange-700"
                >
                  +91 7890390985
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <FaWhatsapp size={18} />
                </span>
                <a
                  href="https://wa.me/917890390985"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Facebook size={18} />
                </span>
                <a
                  href="https://facebook.com/rktraders"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-800 hover:text-orange-700"
                >
                  facebook.com/rktraders
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md ring-1 ring-orange-100 md:h-[260px]">
            <iframe
              title="R.K. Traders Location"
              src="https://www.google.com/maps?q=New%20Siwan%20Sugar%20Mill%2C%20Renuka%20Nagar%2C%20Bypass%20Road%2C%20near%20Ramesh%20Sons%20HP%20Petrol%20Pump%2C%20Siwan%2C%20Bihar%20841226&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
