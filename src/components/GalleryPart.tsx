import { type } from 'os';
import React, { useState } from 'react'

type props = {
    galleries: { name: string, description: string, url: string, categories: string[]}[]
}

export default function GalleryPart({galleries}:props) {

    const choices =  ["all", "government", "healthcare", "infrastructure", "commercial", "education"];
    const [filter, setFilter] = useState("all");
  return (
    <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="shuffle-btn-group">


                                    {choices.map((val) => {
                                        return <label htmlFor={val} className={filter === val ? 'active' : ""}>
                                            <input type="radio" name="shuffle-filter" checked={filter === val} id={val} value={val} className='gallery-filter' onClick={(obj) => {
                                                setFilter(val);
                                            }} />
                                            {val.charAt(0).toUpperCase() + val.slice(1)}
                                        </label>
                                    })}
                                </div>
                                {/* <!-- project filter end --> */}

                                <div className="row shuffle-wrapper">

                                    {
                                        galleries.map((val) => {
                                            return (<div className="col-lg-4 col-md-6 shuffle-item" data-groups={val.categories}
                                                style={{ display: val.categories.indexOf(filter) > -1 ? "block" : (filter == "all" ? "block" : "none") }}
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
  )
}
