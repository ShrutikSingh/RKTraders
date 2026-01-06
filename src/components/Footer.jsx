const Footer = () => {
    return (
      <div className="bg-orange-500 text-white h-25">
        <div className="mx-auto text-center">
          <h3 className="text-xl font-semibold">R.K. Traders</h3>
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} R.K. Traders. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  