// import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} My Website:
        <a className="text-dark" href="https://mywebsite.com/">
          mywebsite.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;