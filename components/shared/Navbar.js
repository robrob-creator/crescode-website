import React from 'react';

const Navbar = () => {
  return <div>
      
      <header id="header" className="header-white header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
      <div className="header-body border-top-0 bg-white box-shadow-none">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <a data-hash className="nav-link" href="#home">
                    <img alt="Porto" src="img/logo-main.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links header-nav-dropdowns-dark header-nav-dark-text order-2 order-lg-1">
                  <div className="header-nav-main header-nav-main-font-lg header-nav-main-font-lg-upper-2 header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li className="dropdown">
                          <a data-hash className="nav-link active" href="#home">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" data-hash data-hash-offset={0} data-hash-offset-lg={68} href="#services">Services</a>
                        </li>
                        <li>
                          <a className="nav-link" data-hash data-hash-offset={0} data-hash-offset-lg={68} href="#about">About Us</a>
                        </li>
                        <li>
                          <a className="nav-link" data-hash data-hash-offset={0} data-hash-offset-lg={68} href="#contact">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button className="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  </div>;
};

export default Navbar;
