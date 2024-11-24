import { format } from 'path';
import React, { Component } from 'react';
import { ADDRESS1, EMAIL, MAP_KEY, PHONE_NUMBER, URL } from '../components/Config';
import MapComponent from '../components/MapComponent';
import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';

type MyProps = {

};

type MyState = {
    center: any,
    zoom: number,
    form: {
        name: string,
        email: string,
        subject: string,
        message: string
    },
    showMessage: boolean,
    loading: boolean
};

export default class Contact extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        this.state = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 4,
            form: {
                name: "",
                email: "",
                subject: "",
                message: ""
            },
            loading: false,
            showMessage: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event: React.FormEvent<HTMLFormElement>): void {

        this.setState({loading: true});
        event.preventDefault();
        axios.post("/form/inquiry",
            this.state.form,
            {
                headers: {
                  'Referer': 'strict-origin-when-cross-origin'
                }
              }
        ).then((response: any) => {
            if(response.status === 200){
                this.setState({showMessage: true, loading: false});
            }
        });
    }

    render() {
        const center = { lat: -34.397, lng: 150.644 };
        const zoom = 4;
        return (
            <>
                <div id="banner-area" className="banner-area" style={{ backgroundImage: "url(images/banner/banner1.jpg)" }}>
                    <div className="banner-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-heading">
                                        <h1 className="banner-title">Contact</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#">Company</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                                {/* <!-- Col end --> */}
                            </div>
                            {/* <!-- Row end --> */}
                        </div>
                        {/* <!-- Container end --> */}
                    </div>
                    {/* <!-- Banner text end --> */}
                </div>
                {/* <!-- Banner area end -->  */}

                <section id="main-container" className="main-container">
                    <div className="container">

                        <div className="row text-center">
                            <div className="col-12">
                                <h2 className="section-title">Reaching our Office</h2>
                                <h3 className="section-sub-title">Find Our Location</h3>
                            </div>
                        </div>
                        {/* <!--/ Title row end --> */}

                        <div className="row">
                            <div className="col-md-4">
                                <div className="ts-service-box-bg text-center h-100">
                                    <span className="ts-service-icon icon-round">
                                        <i className="fas fa-map-marker-alt mr-0"></i>
                                    </span>
                                    <div className="ts-service-box-content">
                                        <h4>Visit Our Office</h4>
                                        <p>{ADDRESS1}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Col 1 end --> */}

                            <div className="col-md-4">
                                <div className="ts-service-box-bg text-center h-100">
                                    <span className="ts-service-icon icon-round">
                                        <i className="fa fa-envelope mr-0"></i>
                                    </span>
                                    <div className="ts-service-box-content">
                                        <h4>Email Us</h4>
                                        <p>{EMAIL}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Col 2 end --> */}

                            <div className="col-md-4">
                                <div className="ts-service-box-bg text-center h-100">
                                    <span className="ts-service-icon icon-round">
                                        <i className="fa fa-phone-square mr-0"></i>
                                    </span>
                                    <div className="ts-service-box-content">
                                        <h4>Call Us</h4>
                                        <p>{PHONE_NUMBER}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Col 3 end --> */}

                        </div>
                        {/* <!-- 1st row end --> */}

                        <div className="gap-60"></div>

                        <div className="google-map">
                           
                            <div className="center">
                                <MapComponent />
                            </div>
                        </div>

                        <div className="gap-40"></div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="column-title">We love to hear</h3>
                                {/* <!-- contact form works with formspree.io  --> */}
                                {/* <!-- contact form activation doc: https://docs.themefisher.com/constra/contact-form/ --> */}
                                <form id="contact-form" onSubmit={this.onSubmit} role="form">
                                    <div className="error-container"></div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input className="form-control form-control-name" name="name" id="name" placeholder="" type="text" value={this.state.form.name} onChange={(val) => {
                                                    this.setState({
                                                        form: {
                                                            ...this.state.form,
                                                            name: val.target.value
                                                        }
                                                    });
                                                }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control form-control-email" name="email" id="email" placeholder="" type="email"
                                                onChange={(val) => {
                                                    this.setState({
                                                        form: {
                                                            ...this.state.form,
                                                            email: val.target.value
                                                        }
                                                    });
                                                }} 
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input className="form-control form-control-subject" name="subject" id="subject" placeholder="" onChange={(val) => {
                                                    this.setState({
                                                        form: {
                                                            ...this.state.form,
                                                            subject: val.target.value
                                                        }
                                                    });
                                                }}  required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control form-control-message" name="message" id="message" placeholder="" rows={10}
                                        onChange={(val) => {
                                            this.setState({
                                                form: {
                                                    ...this.state.form,
                                                    message: val.target.value
                                                }
                                            });

                                            console.log(this.state);
                                        }} 
                                            required></textarea>
                                    </div>
                                    <div className="text-right"><br />
    {this.state.loading ? <Spinner animation='border' /> :    <button className="btn btn-primary solid blank" type="submit">Send Message</button>}
                                      
                                    </div>
                                    <br/>
                                    <Alert dismissible={true} onClose={() => {
                                        this.setState({
                                            showMessage: false
                                        });
                                    }} show={this.state.showMessage} key={'success'} variant={'success'}>
          The Inquiry Sent. We will contact you as soon as possible!
        </Alert>
                                </form>
                            </div>

                        </div>
                        {/* <!-- Content row --> */}
                    </div>
                    {/* <!-- Conatiner end --> */}
                </section>
                {/* <!-- Main container end --> */}

            </>
        );
    }
}
