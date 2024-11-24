import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Facts from '../components/Facts';

export default class About extends Component {
  render() {
    return (
      <div>  {/* <!--/ Header end --> */}
        <div id="banner-area" className="banner-area" style={{ "backgroundImage": "url(images/banner/banner1.jpg)" }}>
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-heading">
                    <h1 className="banner-title">About</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">company</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                      </ol>
                    </nav>
                  </div>
                </div> {/* <!-- Col end --> */}
              </div> {/* <!-- Row end --> */}
            </div> {/* <!-- Container end --> */}
          </div> {/* <!-- Banner text end --> */}
        </div> {/* <!-- Banner area end --> */}

        <section id="main-container" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="column-title">Who We Are</h3>
                <p><b>MEGA Metal Trading (M) Sdn Bhd.</b> -our areas of expertise are in recycling metal and industry
hardware parts. Our organization is unique as the top management compromises of
professionals with different expertise from management to operations that enables us to deliver
you the best services.<br/>
Execution standards are the establishment of the business conditions at <b>MEGA Metal TRADING
(M) SDN BHD.</b> Furthermore, we have embraced a methodology that gives our customer the most
ideal arrangements, fundamentally because of our numerous key coalitions with different
worldwide companies.<br/>
We are an organization that looks at each engagement in a holistic manner. We spearhead the
respective competencies, with information technology acting as an integration tool that
expedites the implementation process, thus reducing unnecessary cost expenditure to clients.
<b>MEGA Metal Trading (M) Sdn Bhd</b> has an approach, which is unique as none of our competitors
comes close to providing similar value-added services as we do. We analyze all aspects of the
engagement methodology, known as <blockquote>“Strategic Implementation Solution” (SIS)</blockquote>. This
engagement methodology allows us to provide the products and services that best fit their
requirements.<br/>
<b>MEGA Metal Trading (M) Sdn Bhd</b> It provides products and services, which have been fine-tuned
individual requirements from conception to complete turn-key facilities; our products and
services can go hand in hand with our skilled leadership team. We are a total solution provider.
The primary activities are collecting, trading, and recycling all grades of ferrous and non-ferrous
metals, plastics, paper/carton boxes, industrial scraps, electronic scraps, transportation, and
solid waste disposal.<br/>
4
At present, <b>MEGA Metal Trading (M) Sdn Bhd</b> operates on industrial land of 2.5 acres, and our
office located at <address>No.27, Jalan 3/89B, Off Batu 3 ½, Jalan Sg Besi, Seksyen 92, 55200 Kuala Lumpur
Wilayah Persekutuan.</address> Currently MEGA Metal Trading (M) Sdn Bhd has employed more than 23
employers and management executives.
We are focused on offering amazing quality types of assistance to meet our clients' prerequisites.
We invest wholeheartedly in our consistent development and improvement from a various
pieces gatherer arrangement in (year) to one of the biggest metal reusing organizations (as far
as volume of metal reuse) in Malaysia today.</p>
               
              </div> {/* <!-- Col end --> */}

              <div className="col-lg-6 mt-5 mt-lg-0">

                <Carousel showArrows={true} autoPlay={true} interval={5000} >
                  <div>
                    <div className="item" style={{ backgroundImage: "url(images/slider-pages/slide-page1.jpg)", height:"300px" }}>
                      <div className="container">
                        <div className="box-slider-content">
                          <div className="box-slider-text">
                            <h2 className="box-slide-title">Leadership</h2>
                          </div>
                        </div>
                      </div>
                    </div> {/* <!-- Item 1 end --> */}
                  </div>

                  <div>
                    <div className="item" style={{ backgroundImage: "url(images/slider-pages/slide-page2.jpg)", height:"300px" }}>
                      <div className="container">
                        <div className="box-slider-content">
                          <div className="box-slider-text">
                            <h2 className="box-slide-title">Relationships</h2>
                          </div>
                        </div>
                      </div>
                    </div> {/* <!-- Item 1 end --> */}

                  </div>

                  <div>
                    <div className="item" style={{ backgroundImage: "url(images/slider-pages/slide-page3.jpg)", height:"300px" }}>
                      <div className="container">
                        <div className="box-slider-content">
                          <div className="box-slider-text">
                            <h2 className="box-slide-title">Performance</h2>
                          </div>
                        </div>
                      </div>
                    </div> {/* <!-- Item 1 end --> */}
                  </div>
                </Carousel>


                

              </div> {/* <!-- Col end --> */}
            </div> {/* <!-- Content row end --> */}

          </div> {/* <!-- Container end --> */}
        </section> {/* <!-- Main container end --> */}


       <Facts />

        <section id="ts-team" className="ts-team">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2 className="section-title">Quality Service</h2>
                <h3 className="section-sub-title">Professional Team</h3>
              </div>
            </div> {/* <!--/ Title row end --> */}

            <div className="row">
              <div className="col-lg-12">
                <div id="team-slide" className="team-slide row">
                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team1.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Nats Stenman</h3>
                        <p className="ts-designation">Chief Operating Officer</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 1 end --> */}

                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team2.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Angela Lyouer</h3>
                        <p className="ts-designation">Innovation Officer</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 2 end --> */}

                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team3.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Mark Conter</h3>
                        <p className="ts-designation">Safety Officer</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 3 end --> */}

                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team4.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Ayesha Stewart</h3>
                        <p className="ts-designation">Finance Officer</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 4 end --> */}

                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team5.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Dave Clarkte</h3>
                        <p className="ts-designation">Civil Engineer</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 5 end --> */}

                  <div className="item col-lg-3 col-xs-3 col-sm-6">
                    <div className="ts-team-wrapper">
                      <div className="team-img-wrapper">
                        <img loading="lazy" className="w-100" src="images/team/team6.jpg" alt="team-img" />
                      </div>
                      <div className="ts-team-content">
                        <h3 className="ts-name">Elton Joe</h3>
                        <p className="ts-designation">Site Supervisor</p>
                        <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                        <div className="team-social-icons">
                          <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        </div> {/* <!--/ social-icons--> */}
                      </div>
                    </div> {/* <!--/ Team wrapper end --> */}
                  </div> {/* <!-- Team 6 end --> */}

                </div> {/* <!-- Team slide end --> */}
              </div>
            </div> {/* <!--/ Content row end --> */}
          </div> {/* <!--/ Container end --> */}
        </section> {/* <!--/ Team end --> */} </div>
    );
  }
}
