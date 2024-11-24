import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ADDRESS1, COMPANY_NAME, EMAIL, PHONE_NUMBER, SINGLE_PHONE } from './Config';

class Header extends Component {
  render() {
    return (
      <>
        <div id="top-bar" className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul className="top-info text-center text-md-left">
                  <li><i className="fas fa-map-marker-alt"></i> <p className="info-text"> {ADDRESS1 } </p>
                  </li>
                </ul>
              </div>
              {/* <!--/ Top info end --> */}

              <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                <ul className="list-unstyled">
                  <li>
                    <a title="Facebook" href="https://facebbok.com/themefisher.com">
                      <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                    </a>
                    <a title="Twitter" href="https://twitter.com/themefisher.com">
                      <span className="social-icon"><i className="fab fa-twitter"></i></span>
                    </a>
                    <a title="Instagram" href="https://instagram.com/themefisher.com">
                      <span className="social-icon"><i className="fab fa-instagram"></i></span>
                    </a>
                    <a title="Linkdin" href="https://github.com/themefisher.com">
                      <span className="social-icon"><i className="fab fa-github"></i></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--/ Top social end --> */}
            </div>
            {/* <!--/ Content row end --> */}
          </div>
          {/* <!--/ Container end --> */}
        </div>
        {/* <!--/ Topbar end --> */}
        {/* <!-- Header start --> */}
        <header id="header" className="header-one">
          <div className="bg-white">
            <div className="container">
              <div className="logo-area">
                <div className="row align-items-center">
                  <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <a className="d-block" href="index.html">
                      <img loading="lazy" src="images/logo.png" alt="MEGAMETAL" />
                      <h2>{ COMPANY_NAME }</h2>
                    </a>
                  </div>
                  {/* <!-- logo end --> */}

                  <div className="col-lg-9 header-right">
                    <ul className="top-info-box">
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">Call Us</p>
                            <p className="info-box-subtitle"><a href={ "tel://" + SINGLE_PHONE }>{ PHONE_NUMBER }</a></p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">Email Us</p>
                            <p className="info-box-subtitle">{ EMAIL }</p>
                          </div>
                        </div>
                      </li>
                      <li className="last">
                        <div className="info-box last">
                          <div className="info-box-content">
                            <p className="info-box-title">Global Certificate</p>
                            <p className="info-box-subtitle">ISO 9001:2017</p>
                          </div>
                        </div>
                      </li>
                      <li className="header-get-a-quote">
                        <a className="btn btn-primary" href="contact.html">Get A Quote</a>
                      </li>
                    </ul>
                    {/* <!-- Ul end --> */}
                  </div>
                  {/* <!-- header right end --> */}
                </div>
                {/* <!-- logo area end --> */}

              </div>
              {/* <!-- Row end --> */}
            </div>
            {/* <!-- Container end --> */}
          </div>

          <div className="site-navigation">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active">
                      
                          <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li className="active"><a href="/">Home One</a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                          </ul>
                      </li>

                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Our People</a></li>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Projects <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="projects.html">Projects All</a></li>
                            <li><a href="projects-single.html">Projects Single</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="services.html">Services All</a></li>
                            <li><a href="service-single.html">Services Single</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="404.html">404</a></li>
                            <li className="dropdown-submenu">
                                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                <ul className="dropdown-menu">
                                  <li><a href="#!">Child Menu 1</a></li>
                                  <li><a href="#!">Child Menu 2</a></li>
                                  <li><a href="#!">Child Menu 3</a></li>
                                </ul>
                            </li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                            <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                            <li><a href="news-single.html">News Single</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
              </nav> */}

                  <Navbar bg="dark" expand="lg" >
                    <Container>
                      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="/#home">Home</Nav.Link>
                          <Nav.Link href="/gallery">Gallery</Nav.Link>
                          <Nav.Link href="/about">About Us</Nav.Link>
                          <Nav.Link href="/contact">Contact Us</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              Separated link
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </div>
                {/* <!--/ Col end --> */}
              </div>
              {/* <!--/ Row end --> */}

              <div className="nav-search">
                <span id="search"><i className="fa fa-search"></i></span>
              </div>
              {/* <!-- Search end --> */}

              <div className="search-block" style={{ "display": "none" }}>
                <label htmlFor="search-field" className="w-100 mb-0">
                  <input type="text" className="form-control" id="search-field" placeholder="Type what you want and enter" />
                </label>
                <span className="search-close">&times;</span>
              </div>
              {/* <!-- Site search end --> */}
            </div>
            {/* <!--/ Container end --> */}

          </div>
          {/* <!--/ Navigation end --> */}
        </header>
        {/* <!--/ Header end -->   */}
      </>
    );
  }
}

export default Header;