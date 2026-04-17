import logo from "../assets/images/logo.webp";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-white px-4 pt-16 pb-12 sm:px-6 md:px-8 lg:pt-20 lg:pb-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 md:max-w-6xl md:flex-row md:items-start">
        {/* Logo / brand */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <div className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-orange-100">
            <img
              src={logo}
              alt="R.K. Traders Logo"
              className="h-32 w-auto md:h-40"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Trusted construction partner
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Quality building materials
            <span className="text-orange-600"> for every project.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            R.K. Traders supplies premium cement, TMT bars, and other
            construction essentials with transparent pricing and reliable
            delivery in and around Siwan, Bihar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
