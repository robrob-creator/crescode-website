import React from 'react';
import $ from 'jquery';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

//import $ from 'jquery'


export default function Home() {
  return (
    <div className="w-auto">
     <>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>CRESCODE Corporation</title>
  <meta name="keywords" content="HTML5 Template" />
  <meta name="description" content="CRESCODE Corporation" />
  <meta name="author" content="okler.net" />
  {/* Favicon */}
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
  />
  {/* Web Fonts  */}
  <link
    id="googleFonts"
    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap"
    rel="stylesheet"
    type="text/css"
  />
  {/* Vendor CSS */}
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css" />
  <link rel="stylesheet" href="vendor/animate/animate.compat.css" />
  <link
    rel="stylesheet"
    href="vendor/simple-line-icons/css/simple-line-icons.min.css"
  />
  <link
    rel="stylesheet"
    href="vendor/owl.carousel/assets/owl.carousel.min.css"
  />
  <link
    rel="stylesheet"
    href="vendor/owl.carousel/assets/owl.theme.default.min.css"
  />
  <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css" />
  {/* Theme CSS */}
  <link rel="stylesheet" href="css/theme.css" />
  <link rel="stylesheet" href="css/theme-elements.css" />
  <link rel="stylesheet" href="css/theme-blog.css" />
  <link rel="stylesheet" href="css/theme-shop.css" />
  {/* Skin CSS */}
  <link id="skinCSS" rel="stylesheet" href="css/skins/default.css" />
  {/* Theme Custom CSS */}
  <link rel="stylesheet" href="css/custom.css" />
  {/* Head Libs */}
  {/* Font Awesome */}
  <div className="body">
    <header
      id="header"
      className="header-white header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0 bg-white box-shadow-none">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <a data-hash="" className="nav-link" href="#home">
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
                          <a
                            data-hash=""
                            className="nav-link active"
                            href="#home"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={68}
                            href="#services"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={68}
                            href="#about"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={68}
                            href="#contact"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button
                    className="btn header-btn-collapse-nav"
                    data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav"
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*-Carousel Section */}
    <div role="main" className="main">
      <div
        id="home"
        className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0"
        data-plugin-options="{'autoplayTimeout': 7000}"
        style={{ height: "100vh" }}
      >
        <div className="owl-stage-outer">
          <div className="owl-stage">
            {/* Carousel Slide 1 */}
            <div
              className="owl-item position-relative overlay overlay-show overlay-op-8 pt-5"
              style={{
                backgroundColor: "#162951",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="container position-relative z-index-3 h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column align-items-center">
                      <h3
                        className="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                        data-appear-animation="fadeInDownShorterPlus"
                        data-plugin-options="{'minWindowWidth': 0}"
                      >
                        <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation"
                            data-appear-animation="fadeInRightShorter"
                            data-appear-animation-delay={250}
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                          />
                        </span>
                        <p className="text-color-light">
                          WE AT CRESCODE WORK HARD TO DELIVER
                        </p>
                        <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation"
                            data-appear-animation="fadeInLeftShorter"
                            data-appear-animation-delay={250}
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                          />
                        </span>
                      </h3>
                      <h2
                        className="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
                        data-appear-animation="blurIn"
                        data-appear-animation-delay={500}
                        data-plugin-options="{'minWindowWidth': 0}"
                      >
                        THE BEST DESIGN
                      </h2>
                      <p
                        className="text-4 text-color-light font-weight-light opacity-7 text-center mb-0"
                        data-plugin-animated-letters=""
                        data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 25}"
                      >
                        Integrating information, design, and technology.
                      </p>
                      <a
                        className="btn btn-primary btn-rounded font-weight-bold text-3 px-5 py-3 appear-animation mt-2"
                        style={{ backgroundColor: "#fcb040" }}
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay={1600}
                        data-plugin-options="{'firstLoadNoAnim': true, 'minWindowWidth': 0}"
                        data-hash=""
                        data-hash-offset={0}
                        data-hash-offset-lg={68}
                        href="#contact"
                      >
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Slide 2 */}
            <div
              className="owl-item position-relative pt-5"
              style={{
                backgroundColor: "rgb(230, 230, 230)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="container position-relative z-index-3 h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column align-items-center">
                      <h3
                        className="position-relative text-color-dark text-4 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                        data-appear-animation="fadeInDownShorterPlus"
                        data-plugin-options="{'minWindowWidth': 0}"
                      >
                        <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation"
                            data-appear-animation="fadeInRightShorter"
                            data-appear-animation-delay={250}
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                          />
                        </span>
                        <p
                          className="text-3 font-weight-semibold text-center mb-0"
                          style={{ color: "#162951" }}
                          data-appear-animation="blurIn"
                          data-appear-animation-delay={500}
                          data-plugin-options="{'minWindowWidth': 0}"
                        >
                          WE CREATE DESIGNS, WE ARE
                        </p>
                        <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation"
                            data-appear-animation="fadeInLeftShorter"
                            data-appear-animation-delay={250}
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                          />
                        </span>
                      </h3>
                      <h2
                        style={{ fontSize: 60, color: "#162951" }}
                        className="font-weight-extra-bold mb-0"
                        data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0, 'animationSpeed': 850, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
                      >
                        CRESC<span style={{ color: "#fcb040" }}>O</span>DE
                      </h2>
                      <p
                        className="text-4 text-center mb-0 mt-3"
                        style={{ color: "#162951" }}
                        data-plugin-animated-letters=""
                        data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"
                      >
                        The best choice for your company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev" />
          <button type="button" role="presentation" className="owl-next" />
        </div>
        <div className="owl-dots mb-5">
          <button role="button" className="owl-dot active">
            <span />
          </button>
          <button role="button" className="owl-dot">
            <span />
          </button>
        </div>
      </div>
      {/*-Services Section */}
      <section
        id="services"
        className="section section-height-3 bg-primary border-0 m-0 appear-animation"
        data-appear-animation="fadeIn"
      >
        <div className="container my-3">
          <div className="row mb-5">
            <div
              className="col text-center appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay={200}
            >
              <h2 className="font-weight-bold text-color-light mb-2">
                SERVICES
              </h2>
            </div>
          </div>
          <div className="row mb-lg-4 align-items-center justify-content-center">
            <div
              className="col-lg-4 appear-animation"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box">
                <div className="feature-box-icon pb-5 pt-2">
                  <i className="fas fa-code fa-2x" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-light text-4 mb-2">
                    WEB APPLICATION DEVELOPMENT
                  </h4>
                  <p className="text-color-light opacity-7">
                    We specialize in designing, building, and migrating all
                    types of web-based software.
                    <br />
                    Our services include testing, and support and maintenance.
                    Crescode provide the efficient and user-friendly custom web
                    applications using a wide range of technologies.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-">
                <div className="feature-box-icon pb-5 pt-2">
                  <i className="fas fa-layer-group fa-2x" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-light text-4 mb-2">
                    WEB DESIGN
                  </h4>
                  <p className="text-color-light opacity-7">
                    Our goal is to provide our clients with beautiful,
                    user-friendly, easy to navigate website. We offer graphic
                    design, user experience design, interface design, search
                    engine optimization (SEO) and content creation, site maps,
                    video embedding, and form integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-4 appear-animation pt-4"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-">
                <div className="feature-box-icon pb-5 pt-2">
                  <i className="fas fa-mobile-alt fa-2x" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-light text-4 mb-2">
                    MOBILE APP DEVELOPMENT
                  </h4>
                  <p className="text-color-light opacity-7">
                    We provide high quality standard mobile app across all the
                    major platforms, including iOS (iPhone &amp; iPad), Android,
                    BlackBerry and Windows Mobile. Our team of mobile app
                    developers are expert in developing mobile app development
                    solutions to meet your business requirements.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-">
                <div className="feature-box-icon pb-5 pt-2">
                  <i className="fas fa-desktop fa-2x" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-light text-4 mb-2">
                    SYSTEM MAINTENANCE &amp; SUPPORT
                  </h4>
                  <p className="text-color-light opacity-7">
                    In addition to our custom software development service
                    offering, we also offer Software maintenance and support
                    services. The services we offer include removing program and
                    design errors, updating documentation and test data and
                    updating user support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-About us Section */}
      <section
        id="about"
        className="section section-height-3 border-0 m-0 appear-animation"
        style={{ backgroundColor: "white" }}
        data-appear-animation="fadeIn"
      >
        <div className="container my-3">
          <div className="row mb-5">
            <div
              className="col text-center mt-1 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay={200}
            >
              {/* <a data-hash class="justify-content-center align-items-center mb-5">
										<img alt="Porto"  src="img/logo-main.png">
									</a> */}
              <h2 className="font-weight-bold text-color-dark mb-0 mt-0">
                ABOUT US
              </h2>
            </div>
          </div>
          <div className="row mb-lg-4 mt-0 align-items-center justify-content-center">
            <div
              className="col-lg-8 appear-animation"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-">
                <div className="feature-box-info">
                  <p className="text-color-dark opacity-7">
                    CRESCODE Corporation was founded in March 19 and is a
                    software development company expert in providing development
                    and design services. We offer services such as website
                    design &amp; development, mobile app development, web apps,
                    and online stores for SMEs. We have a team of highly
                    qualified artists, developers, designers, and QA engineers
                    to ensure the quality delivery of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-4 appear-animation"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-dark text-4 mb-2 mt-4">
                    VISION
                  </h4>
                  <p className="text-color-dark opacity-7">
                    Our vision is to be the leading software development company
                    providing superior quality services and solutions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay={300}
            >
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-info">
                  <h4 className="font-weight-bold text-color-dark text-4 mb-2">
                    MISSION
                  </h4>
                  <p className="text-color-dark opacity-7">
                    <b>Our mission is to provide</b> IT services{" "}
                    <b>to enhance business growth of our customers.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-Contact us Section */}
      <section
        id="contact"
        className="section border-0 py-0 m-0"
        style={{ backgroundColor: "rgb(230, 230, 230)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {/* Google Maps - Settings on footer */}
              <div
                id="googlemaps"
                className="h-100 mx-5 mt-5"
                style={{ minHeight: 400 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8865575633768!2d121.04472641415167!3d14.548479282253808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f47838d93f%3A0xc60905b64be3827a!2sOne%20Global%20Place!5e0!3m2!1sen!2sph!4v1643282013049!5m2!1sen!2sph"
                  style={{ minHeight: 400, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-6 p-5 my-5">
              <div className="px-4">
                <h2 className="font-weight-bold line-height-1 mb-2 text-color-dark">
                  Contact Us
                </h2>
                {/*- <p class="text-3 mb-4">LOREM IPSUM DOLOR SIT A MET</p> -*/}
                <form
                  className="contact-form form-style-2 pe-xl-5"
                  action="php/contact-form.php"
                  method="POST"
                >
                  <div className="contact-form-success alert alert-success d-none mt-4">
                    <strong>Success!</strong> Your message has been sent to us.
                  </div>
                  <div className="contact-form-error alert alert-danger d-none mt-4">
                    <strong>Error!</strong> There was an error sending your
                    message.
                    <span className="mail-error-message text-1 d-block" />
                  </div>
                  <div className="row">
                    <div className="form-group col-xl-4">
                      <input
                        type="text"
                        defaultValue=""
                        data-msg-required="Please enter your name."
                        maxLength={100}
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-xl-8">
                      <input
                        type="email"
                        defaultValue=""
                        data-msg-required="Please enter your email address."
                        data-msg-email="Please enter a valid email address."
                        maxLength={100}
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <input
                        type="text"
                        defaultValue=""
                        data-msg-required="Please enter the subject."
                        maxLength={100}
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <textarea
                        maxLength={5000}
                        data-msg-required="Please enter your message."
                        rows={4}
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <input
                        type="submit"
                        defaultValue="SUBMIT"
                        className="btn btn-primary btn-rounded font-weight-semibold px-5 btn-py-2 text-2"
                        data-loading-text="Loading..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section m-0 pb-3 pt-4 bg-color-dark">
        <div className="container">
          <div className="row justify-content-center text-center text-lg-start py-0">
            <div
              className="col-lg-auto appear-animation"
              data-appear-animation="fadeInRightShorter"
            >
              <div className="feature-box feature-box-style-2 d-block d-lg-flex mb-2 mb-lg-0">
                <div className="feature-box-icon">
                  <i className="icon-location-pin icons text-color-light" />
                </div>
                <div className="feature-box-info ps-1">
                  <h5 className="font-weight-light text-color-light opacity-7 mb-0">
                    Level 10-1 One Global Place <br />
                    5th Ave. Corner 25th St. Fort Bonifacio <br />
                    Taguig City, Philippines
                  </h5>
                  <p className="text-color-light font-weight-semibold mb-0">
                    MON - FRI: 10:00AM - 6:00PM
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-auto appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay={200}
            >
              <div className="feature-box feature-box-style-2 d-block d-lg-flex mb-4 mb-lg-0 px-xl-4 mx-lg-5">
                <div className="feature-box-icon">
                  <i className="icon-call-out icons text-color-light" />
                </div>
                <div className="feature-box-info ps-1">
                  <h5 className="font-weight-light text-color-light opacity-7 mb-0">
                    CALL US NOW
                  </h5>
                  <a
                    href="tel:+8001234567"
                    className="text-color-light font-weight-semibold text-decoration-none"
                  >
                    632-8707-1886
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-auto appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay={400}
            >
              <div className="feature-box feature-box-style-2 d-block d-lg-flex">
                <div className="feature-box-icon">
                  <i className="icon-share icons text-color-light" />
                </div>
                <div className="feature-box-info ps-1">
                  <h5 className="font-weight-light text-color-light opacity-7 mb-0">
                    FOLLOW US
                  </h5>
                  <p className="mb-0">
                    <span className="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        className="text-color-light font-weight-semibold"
                        title="Facebook" rel="noreferrer"
                      >
                        <i className="me-1 fab fa-facebook-f" /> FACEBOOK
                      </a>
                    </span>
                    <span className="social-icons-twitter ps-3">
                      <a
                        href="http://www.twitter.com/"
                        target="_blank"
                        className="text-color-light font-weight-semibold"
                        title="Twitter" rel="noreferrer"
                      >
                        <i className="me-1 fab fa-twitter" /> TWITTER
                      </a>
                    </span>
                    <span className="social-icons-instagram ps-3">
                      <a
                        href="http://www.linkedin.com/"
                        target="_blank"
                        className="text-color-light font-weight-semibold"
                        title="Linkedin" rel="noreferrer"
                      >
                        <i className="me-1 fab fa-instagram" /> INSTAGRAM
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer id="footer" className="mt-0">
      <div className="footer-copyright" style={{ backgroundColor: "#162951" }}>
        <div className="container py-0">
          <div className="row py-2">
            <div className="col d-flex align-items-center justify-content-center">
              <a data-hash="" className="nav-link" href="#home">
                <img
                  className="px-3"
                  alt="Crescode"
                  height={30}
                  src="img/footer-logo.png"
                />
              </a>
              <p className="pt-2 text-color-light">
                © Copyright 2019. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  
</>

</div>
  

  )
}
