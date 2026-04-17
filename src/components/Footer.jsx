const Footer = () => {
  return (
    <footer className="border-t border-orange-100 bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-slate-400 md:px-8">
        <p className="text-[11px] tracking-[0.25em] uppercase text-orange-500">
          R.K. Traders
        </p>
        <p>© {new Date().getFullYear()} R.K. Traders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
