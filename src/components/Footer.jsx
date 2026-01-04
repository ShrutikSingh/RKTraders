const Footer = () => {
    return (
      <footer className="bg-orange-600 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-semibold">R.K. Traders</h3>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} R.K. Traders. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  