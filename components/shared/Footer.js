import React from 'react';

const Footer = () => {
  return <div>

    <footer id="footer" className="mt-0">
      <div className="footer-copyright" style={{"background-color":"#162951"}}>
        <div className="container py-0">
          <div className="row py-2">
            <div className="col d-flex align-items-center justify-content-center">
              <a data-hash className="nav-link" href="#home">
                <img className="px-3" alt="Crescode" height={30} src="img/footer-logo.png" />
              </a>
              <p className="pt-2 text-color-light">© Copyright 2019. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>;
};

export default Footer;
