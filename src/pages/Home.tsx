import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Animated } from 'react-animated-css';
import { Carousel, CarouselItem, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import VisibilitySensor from 'react-visibility-sensor';
import Facts from '../components/Facts';
import { PHONE_NUMBER, SINGLE_PHONE } from '../components/Config';
import CollapseValues from '../components/CollapseValues';
// import { Animation } from 'react-animate-style';
import ReactPlayer from 'react-player';
import GalleryPart from '../components/GalleryPart';
type Props = {

}

type States = {
    values: { title: string, content: string }[],
    news: {imagePath:string, articlePath: string, articleDesc:string, dateStr:string}[],
    galleries: { name: string, description:string,  url:string, categories: string[]}[]
}

class Home extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            values: [
                {
                    title: 'Safety',
                    content: 'MEGA METAL TRADING (M) SDN BHD considers safety a top priority in our everyday activities, it is our policy to provide and maintain a safety and health program with the best practices of the construction as well as those of our client.'
                },
                {
                    title: 'Customer Service',
                    content: "The rational for creating MEGA METAL TRADING (M) SDN BHD was to enhance the quality, integrity and scope of services available to industrial scrap generators and consumers. We shared a commitment to performance, customer satisfaction and environmental responsibility."
                },
                {
                    title: 'RECYCLING SERVICES',
                    content: 'At MEGA METAL TRADING (M) SDN BHD, our scrap material recycling center and scrap metal transfer facility offers a wide range of recycling services within this industry to commercial, domestic and other customers interested in recycling and recycling programs.'
                },
                {
                    title: 'QUALITY COMMITMENT',
                    content: 'The rational for creating MEGA METAL TRADING (M) SDN BHD was to enhance the quality, integrity and scope of services available to industrial scrap generators and consumers. We shared a commitment to performance, customer satisfaction and environmental responsibility.'
                }
            ],
            news: [
                {articleDesc: "WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI", 
            articlePath: "/", imagePath: "images/news/news1.jpg", dateStr: "JULY 20, 2017" },
            {articleDesc: "THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED", 
            articlePath: "/", imagePath: "images/news/news2.jpg", dateStr: "JULY 17, 2017" },
            {articleDesc: "SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES", 
            articlePath: "/", imagePath: "images/news/news3.jpg", dateStr: "JULY 13, 2017" }
        ],
        galleries:[
            { name: "Capital Teltway Building", description: "", url: "images/projects/project1.jpg", categories: ["government", "healthcare"] },
            { name: "Ghum Touch Hospital", description: "",url: "images/projects/project2.jpg", categories: ["healthcare"] },
            { name: "TNT East Facility", description: "",url: "images/projects/project3.jpg", categories: ["infrastructure", "commercial"] },
            { name: "Narriot Headquarters", description: "",url: "images/projects/project4.jpg", categories: ["education", "infrastructure"] },
            { name: "Kalas Metrorail",description: "", url: "images/projects/project5.jpg", categories: ["government", "healthcare"] },
            { name: "Ancraft Avenue House",description: "", url: "images/projects/project6.jpg", categories: ["government", "healthcare"] }
        ]
        }
    }
    render() {
        return (
            <>
                <Carousel className="banner-carousel-1 mb-0 h-100">
                    <CarouselItem>
                        <div className="c-banner" style={{ backgroundImage: "url(images/slider-main/bg1.jpg)" }}>
                            <div className="slider-content">
                                <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-12 text-center">
                                            <h2 className="slide-title" data-animation-in="slideInLeft">Recycling Metal and Industry Hardware Parts</h2>
                                            <h3 className="slide-sub-title" data-animation-in="slideInRight">Recycle Industry</h3>
                                            {/* <p data-animation-in="slideInLeft" data-duration-in="1.2"> */}

                                            <Row>
                                                <Col>
                                                    {/* <Animation animationIn='slideInRight' animationInDuration={1.2} animationOut='fadeOut' isVisible={true}> */}
                                                    <a href="/about" className="slider btn btn-primary">Our Services</a>
                                                    {/* </Animation> */}
                                                </Col>
                                                <Col>
                                                    {/* <Animation animationIn='slideInRight' animationInDuration={1.2} animationOut='fadeOut' isVisible={true}> */}
                                                    <a href="/contact" className="slider btn btn-primary border">Contact Now</a>
                                                    {/* </Animation> */}
                                                </Col>
                                            </Row>


                                            {/* </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        {/* https://player.vimeo.com/video/691143078?h=9b48ddb956&muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963 */}
                        {/* <ReactPlayer style={{ position: 'absolute', objectFit: 'cover'}} width="100vw" height="100vh" loop={true} muted={true} autoplay={true} url={"https://player.vimeo.com/video/691143078?h=9b48ddb956&muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963"} /> */}
                        <div className="c-banner" style={{ backgroundImage: "url(images/slider-main/bg2.jpg)", }}>
                            <div className="slider-content text-left">
                                <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-12">
                                            <h2 className="slide-title-box" data-animation-in="slideInDown">World Class Service</h2>
                                            <h3 className="slide-title" data-animation-in="fadeIn">When Service Matters</h3>
                                            <h3 className="slide-sub-title" data-animation-in="slideInLeft">Your Choice is Simple</h3>
                                            <p data-animation-in="slideInRight">
                                                <a href="services.html" className="slider btn btn-primary border">Our Services</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="c-banner" style={{ backgroundImage: "url(images/slider-main/bg3.jpg)" }}>
                            <div className="slider-content text-right">
                                <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-12">
                                            <h2 className="slide-title" data-animation-in="slideInDown">Meet Our Engineers</h2>
                                            <h3 className="slide-sub-title" data-animation-in="fadeIn">We believe sustainability</h3>
                                            <p className="slider-description lead" data-animation-in="slideInRight">We will deal with your failure that determines how you achieve success.</p>

                                            <Row>
                                                <Col>
                                                    {/* <Animation animationIn='slideInRight' animationInDuration={1.2} animationOut='fadeOut' isVisible={true}> */}
                                                    <a href="contact.html" className="slider btn btn-primary" aria-label="contact-with-us">Get Free Quote</a>
                                                    {/* </Animation> */}
                                                </Col>
                                                <Col>
                                                    {/* <Animation animationIn='slideInRight' animationInDuration={1.2} animationOut='fadeOut' isVisible={true}> */}
                                                    <a href="about.html" className="slider btn btn-primary border" aria-label="learn-more-about-us">Learn more</a>
                                                    {/* </Animation> */}
                                                </Col>
                                            </Row>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
                {/* <div className="banner-carousel banner-carousel-1 mb-0">
                    <div className="banner-carousel-item" style={{ "background-image": "url(images/slider-main/bg1.jpg)" }}>
                        <div className="slider-content">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12 text-center">
                                        <h2 className="slide-title" data-animation-in="slideInLeft">17 Years of excellence in</h2>
                                        <h3 className="slide-sub-title" data-animation-in="slideInRight">Construction Industry</h3>
                                        <p data-animation-in="slideInLeft" data-duration-in="1.2">
                                            <a href="services.html" className="slider btn btn-primary">Our Services</a>
                                            <a href="contact.html" className="slider btn btn-primary border">Contact Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-carousel-item" style={{ "background-image": "url(images/slider-main/bg2.jpg)" }}>
                        <div className="slider-content text-left">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12">
                                        <h2 className="slide-title-box" data-animation-in="slideInDown">World Class Service</h2>
                                        <h3 className="slide-title" data-animation-in="fadeIn">When Service Matters</h3>
                                        <h3 className="slide-sub-title" data-animation-in="slideInLeft">Your Choice is Simple</h3>
                                        <p data-animation-in="slideInRight">
                                            <a href="services.html" className="slider btn btn-primary border">Our Services</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-carousel-item" style={{ "background-image": "url(images/slider-main/bg3.jpg)" }}>
                        <div className="slider-content text-right">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12">
                                        <h2 className="slide-title" data-animation-in="slideInDown">Meet Our Engineers</h2>
                                        <h3 className="slide-sub-title" data-animation-in="fadeIn">We believe sustainability</h3>
                                        <p className="slider-description lead" data-animation-in="slideInRight">We will deal with your failure that determines how you achieve success.</p>
                                        <div data-animation-in="slideInLeft">
                                            <a href="contact.html" className="slider btn btn-primary" aria-label="contact-with-us">Get Free Quote</a>
                                            <a href="about.html" className="slider btn btn-primary border" aria-label="learn-more-about-us">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <section className="call-to-action-box no-padding">
                    <div className="container">
                        <div className="action-style-box">
                            <div className="row align-items-center">
                                <div className="col-md-8 text-center text-md-left">
                                    <div className="call-to-action-text">
                                        <h3 className="action-title">We understand your needs on construction</h3>
                                    </div>
                                </div>
                                {/* <!-- Col end --> */}
                                <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                                    <div className="call-to-action-btn">
                                        <a className="btn btn-dark" href="/contact">Request Quote</a>
                                    </div>
                                </div>
                                {/* <!-- col end --> */}
                            </div>
                            {/* <!-- row end --> */}
                        </div>
                        {/* <!-- Action style box --> */}
                    </div>
                    {/* <!-- Container end --> */}
                </section>
                {/* <!-- Action end --> */}

                <section id="ts-features" className="ts-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ts-intro">
                                    <h2 className="into-title">About Us</h2>
                                    <h3 className="into-sub-title">We deliver landmark projects</h3>
                                    <p>MEGA Metal TRADING
                                        (M) SDN BHD. Furthermore, we have embraced a methodology that gives our customer the most
                                        ideal arrangements, fundamentally because of our numerous key coalitions with different
                                        worldwide companies.</p>
                                </div>
                                {/* <!-- Intro box end --> */}

                                <div className="gap-20"></div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-trophy"></i>
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">RECYCLING SERVICES</h3>
                                            </div>
                                        </div>
                                        {/* <!-- Service 1 end --> */}
                                    </div>
                                    {/* <!-- col end --> */}

                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-sliders-h"></i>
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">TRANSPORT SERVICES</h3>
                                            </div>
                                        </div>
                                        {/* <!-- Service 2 end --> */}
                                    </div>
                                    {/* <!-- col end --> */}
                                </div>
                                {/* <!-- Content row 1 end --> */}

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-thumbs-up"></i>
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">INCINERATION NON‐RECYCLE WASTE</h3>
                                            </div>
                                        </div>
                                        {/* <!-- Service 1 end --> */}
                                    </div>
                                    {/* <!-- col end --> */}

                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-users"></i>
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">Trucking Services</h3>
                                            </div>
                                        </div>
                                        {/* <!-- Service 2 end --> */}
                                    </div>
                                    {/* <!-- col end --> */}
                                </div>
                                {/* <!-- Content row 1 end --> */}
                            </div>
                            {/* <!-- Col end --> */}

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <h3 className="into-sub-title">Our Values</h3>
                                <p>MEGA Metal Trading (M) Sdn Bhd. -our areas of expertise are in recycling metal and industry
                                    hardware parts.</p>

                                <div className="accordion accordion-group" id="our-values-accordion">

                                    {this.state.values.map(value => {
                                        return <CollapseValues title={value.title}>
                                            <> {value.content}</>
                                        </CollapseValues>;
                                    })}

                                </div>
                                {/* <!--/ Accordion end --> */}

                            </div>
                            {/* <!-- Col end --> */}
                        </div>
                        {/* <!-- Row end --> */}
                    </div>
                    {/* <!-- Container end --> */}
                </section>
                {/* <!-- Feature are end --> */}

                <Facts />

                <section id="ts-service-area" className="ts-service-area pb-0">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h2 className="section-title">We Are Specialists In</h2>
                                <h3 className="section-sub-title">What We Do</h3>
                            </div>
                        </div>
                        {/* <!--/ Title row end --> */}

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon1.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Collection and Sorting</a></h3>
                                        <p>The first step in the scrap metal recycling process is to collect and sort the wires. Wires may come from a variety of sources such as discarded appliances, electronics, construction materials, and automobiles. Once collected, the wires are sorted by type of metal and processed accordingly</p>
                                    </div>
                                </div>
                                {/* <!-- Service 1 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Stripping the Insulation</a></h3>
                                        <p> The wires are typically coated in a layer of insulation made of plastic or rubber. In order to extract the metal, the insulation needs to be removed. This can be done using a wire stripper, which cuts through the insulation while leaving the metal core intact.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 2 end --> */}


                                {/* <!-- Service 1 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Separating the Metal</a></h3>
                                        <p>Once the insulation has been removed, the metal can be separated from any remaining non-metallic material. This is often done using a magnet, as most metals are magnetic.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 2 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#"> Cleaning and Shredding</a></h3>
                                        <p>After the metal has been separated, it is cleaned to remove any remaining impurities. The metal is then shredded into smaller pieces, which makes it easier to transport and recycle.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 3 end --> */}



                            </div>
                            {/* <!-- Col end --> */}

                            <div className="col-lg-4 text-center">
                                <img loading="lazy" className="img-fluid" src="images/services/service-center.jpg" alt="service-avater-image" />
                            </div>
                            {/* <!-- Col end --> */}

                            <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon4.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Melting and Purification</a></h3>
                                        <p>The shredded metal is melted down in a furnace and purified to remove any remaining impurities. Once purified, the metal can be cast into ingots or other shapes for reuse in manufacturing.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 4 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon5.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Crushing and Grinding</a></h3>
                                        <p>Once the ore has been mined, it is crushed and ground into smaller particles. This process helps to release the metal from the surrounding rock or mineral.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 5 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon6.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Concentration</a></h3>
                                        <p>The crushed and ground ore is then subjected to a process called concentration, which separates the metal from other minerals and impurities. This can involve using chemicals, magnetic separation, or other methods.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 6 end --> */}

                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="images/icon-image/service-icon6.png" alt="service-icon" />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Refining</a></h3>
                                        <p>The metal may then undergo a refining process to further purify it and remove any remaining impurities. This can involve electrolysis, chemical treatments, or other methods.</p>
                                    </div>
                                </div>
                                {/* <!-- Service 7 end --> */}
                            </div>
                            {/* <!-- Col end --> */}
                        </div>
                        {/* <!-- Content row end --> */}

                    </div>
                    {/* <!--/ Container end --> */}
                </section>
                {/* <!-- Service end --> */}

                <section id="project-area" className="project-area solid-bg">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <h2 className="section-title">Work of Excellence</h2>
                                <h3 className="section-sub-title">Recent Projects</h3>
                            </div>
                        </div>
                        {/* <!--/ Title row end --> */}

                        <GalleryPart galleries={this.state.galleries} />
                        {/* <!-- Content row end --> */}
                    </div>
                    {/* <!--/ Container end --> */}
                </section>
                {/* <!-- Project area end --> */}

                {/*  */}
                {/* <!-- Content end --> */}

                <section className="subscribe no-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="subscribe-call-to-acton">
                                    <h3>Can We Help?</h3>
                                    <h4><a href={"tel://" + SINGLE_PHONE}>{SINGLE_PHONE}</a></h4>
                                </div>
                            </div>
                            {/* <!-- Col end --> */}

                            <div className="col-lg-8">
                                <div className="ts-newsletter row align-items-center">
                                    <div className="col-md-5 newsletter-introtext">
                                        <h4 className="text-white mb-0">Newsletter Sign-up</h4>
                                        <p className="text-white">Latest updates and news</p>
                                    </div>

                                    <div className="col-md-7 newsletter-form">
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="newsletter-email" className="content-hidden">Newsletter Email</label>
                                                <input type="email" name="email" id="newsletter-email" className="form-control form-control-lg" placeholder="Your your email and hit enter" autoComplete="off" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- Newsletter end --> */}
                            </div>
                            {/* <!-- Col end --> */}

                        </div>
                        {/* <!-- Content row end --> */}
                    </div>
                    {/* <!--/ Container end --> */}
                </section>
                {/* <!--/ subscribe end --> */}

                <section id="news" className="news">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h2 className="section-title">Work of Excellence</h2>
                                <h3 className="section-sub-title">Recent Projects</h3>
                            </div>
                        </div>
                        {/* <!--/ Title row end --> */}

                        <div className="row">
                       
                            { this.state.news.map((news) => {
                                return newsBlock(news.imagePath, news.articlePath, news.articleDesc, news.dateStr);
                            }) }
                            {/* <!-- 1st post col end --> */}

                          
                            {/* <!-- 3rd post col end --> */}
                        </div>
                        {/* <!--/ Content row end --> */}

                        <div className="general-btn text-center mt-4">
                            <a className="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
                        </div>

                    </div>
                    {/* <!--/ Container end --> */}
                </section>
                {/* <!--/ News end --> */}
            </>
        );

        function newsBlock(imagePath:string, articlePath: string, articleDesc:string, dateStr:string) {
            return <div className="col-lg-4 col-md-6 mb-4">
                <div className="latest-post">
                    <div className="latest-post-media">
                        <a href="#" className="latest-post-img">
                            <img loading="lazy" className="img-fluid" src={imagePath} alt="img" />
                        </a>
                    </div>
                    <div className="post-body">
                        <h4 className="post-title">
                            <a href="news-single.html" className="d-inline-block">{ articleDesc }</a>
                        </h4>
                        <div className="latest-post-meta">
                            <span className="post-item-date">
                                <i className="fa fa-clock-o"></i> { dateStr}
                            </span>
                        </div>
                    </div>
                </div>
                {/* <!-- Latest post end --> */}
            </div>;
        }
    }
}

export default Home;