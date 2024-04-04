function Footer() {
    return (
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#008080" }}>
        <div className="container p-4">
          <div className="row">
            {/* Site Name & Tagline */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5>TradeInsight</h5>
              <p>
                Generate a winning business plan and unlock the potential of international trade.
              </p>
            </div>
  
            {/* Social Media & Contact */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Follow Us</h5>
  
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
  
            {/* Contact Details */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Contact Us</h5>
              <p>
                Phone: +123456789<br />
                Email: info@tradeinsight.com
              </p>
            </div>
          </div>
        </div>
  
        {/* Links & Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          {/* <a className="text-white me-4" href="#!">Terms and Conditions</a>
          <a className="text-white me-4" href="#!">Privacy Policy</a> */}
          {/* <br /> */}
          © {new Date().getFullYear()} TradeInsight: All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;