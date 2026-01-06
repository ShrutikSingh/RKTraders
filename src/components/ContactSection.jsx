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
  
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">📞 Phone:</span><br />
              +91 XXXXXXXXXX
            </p>
  
            <p className="text-gray-700">
              <span className="font-semibold">📘 Facebook:</span><br />
              <a
                href="#"
                className="text-orange-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/rktraders
              </a>
            </p>
          </div>
  
          {/* Google Map */}
          <div className="w-full h-[350px] md:h-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="R.K. Traders Location"
              src="https://www.google.com/maps?q=New%20Siwan%20Sugar%20Mill%2C%20Renuka%20Nagar%2C%20Bypass%20Road%2C%20near%20Ramesh%20Sons%20HP%20Peteol%20Pump%2C%20Siwan%2C%20Bihar%20841226&output=embed"
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
  