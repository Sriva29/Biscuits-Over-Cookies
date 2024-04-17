import React from 'react';

function Footer() {
  return (
    <footer className="footer py-3" style={{ backgroundColor: "#008080", marginTop: "auto" }}>
      <div className="container text-center text-lg-start text-white">
        <div className="row">
          {/* Site Name & Tagline */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5>TradeX</h5>
            <p>
              Generate a winning business plan and unlock the potential of international trade.
            </p>
          </div>

          {/* Social Media & Contact */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <div className="btn-group">
              <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              Phone: +123456789<br />
              Email: info@tradex.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} TradeX: All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
