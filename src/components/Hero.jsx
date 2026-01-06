import logo from "../assets/images/logo.webp";

const Hero = () => {
  return (
    <section className="bg-orange-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="R.K. Traders Logo"
            className="w-40 md:w-56"
          />
        </div>

        {/* Description */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-orange-700 mb-6">
            R.K. Traders
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Your trusted supplier of quality construction materials including
            cement, TMT bars, bricks, and more. Reliable service, genuine
            products, and fair pricing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
