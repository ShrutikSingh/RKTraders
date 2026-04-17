const About = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            About us
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
            R.K. Traders
          </h1>
        </div>

        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
          R.K. Traders is a trusted supplier of high-quality construction
          materials based in Siwan, Bihar. We provide cement, TMT bars, and
          other essential building products to contractors, builders, and
          homeowners, with a focus on genuine products and transparent pricing.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
            <h2 className="text-sm font-semibold text-orange-700">
              Reliable products
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We source from trusted brands so your structures are strong,
              durable, and safe for years to come.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-800">Fair pricing</h2>
            <p className="mt-2 text-sm text-slate-600">
              Transparent, competitive pricing with up-to-date rates managed
              directly through our admin dashboard.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-800">Local service</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prompt and dependable service for projects in and around Siwan,
              with support just a call away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
