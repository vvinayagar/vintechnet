import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';

type MyProps = {

};

type MyState = {
    choices: any,
    filter: string,
    photos: any
};

export default class Gallery extends Component<MyProps, MyState> {


    constructor(props: MyProps) {
        super(props);

        this.state = {
            choices: ["all", "government", "healthcare", "infrastructure", "commercial", "education"],
            filter: "all",
            photos: [
                { name: "Capital Teltway Building", description: "", url: "images/projects/project1.jpg", categories: ["government", "healthcare"] },
                { name: "Ghum Touch Hospital", url: "images/projects/project2.jpg", categories: ["healthcare"] },
                { name: "TNT East Facility", url: "images/projects/project3.jpg", categories: ["infrastructure", "commercial"] },
                { name: "Narriot Headquarters", url: "images/projects/project4.jpg", categories: ["education", "infrastructure"] },
                { name: "Kalas Metrorail", url: "images/projects/project5.jpg", categories: ["government", "healthcare"] },
                { name: "Ancraft Avenue House", url: "images/projects/project6.jpg", categories: ["government", "healthcare"] }
            ]
        }

        this.selFilter = this.selFilter.bind(this);
    }


    selFilter(obj) {

        console.log("Set Filter");
        console.log(obj.target.value);
        this.setState({
            filter: obj.target.value
        })
    }

    render() {
        return (
            <div> <div id="banner-area" className="banner-area" style={{ backgroundImage: "url(images/banner/banner1.jpg)" }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Gallery</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active"><a href="#">Gallery</a></li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">All Projects</li> */}
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
                        <div className="row">
                            <div className="col-12">
                                <div className="shuffle-btn-group">


                                    {this.state.choices.map((val) => {
                                        return <label htmlFor={val} className={this.state.filter === val ? 'active' : ""}>
                                            <input type="radio" name="shuffle-filter" checked={this.state.filter === val} id={val} value={val} className='gallery-filter' onClick={this.selFilter} />
                                            {val.charAt(0).toUpperCase() + val.slice(1)}
                                        </label>
                                    })}
                                </div>
                                {/* <!-- project filter end --> */}

                                <div className="row shuffle-wrapper">

                                    {
                                        this.state.photos.map((val) => {
                                            return (<div className="col-lg-4 col-md-6 shuffle-item" data-groups={val.categories}
                                                style={{ display: val.categories.indexOf(this.state.filter) > -1 ? "block" : (this.state.filter == "all" ? "block" : "none") }}
                                            >
                                                <div className="project-img-container">
                                                    <a className="gallery-popup" href={val.url}>
                                                        <img className="img-fluid" src={val.url} alt="project-image" />
                                                        <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                                    </a>
                                                    <div className="project-item-info">
                                                        <div className="project-item-info-content">
                                                            <h3 className="project-item-title">
                                                                <a href="projects-single.html">{val.name}</a>
                                                            </h3>
                                                            <p className="project-cat">{val.categories.map((cat, ind) => {
                                                                return (ind != 0 ? ", " : "") + cat;
                                                            })}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>);
                                        })
                                    }

                                </div>
                                {/* <!-- shuffle end --> */}
                            </div>

                            <div className="col-12">
                                {/* <div className="general-btn text-center">
                                    <a className="btn btn-primary" href="projects.html">View All Projects</a>
                                </div> */}
                            </div>

                        </div>
                        {/* <!-- Content row end --> */}

                    </div>
                    {/* <!-- Conatiner end --> */}
                </section>
                {/* <!-- Main container end -->  */}
            </div>
        );
    }
}
