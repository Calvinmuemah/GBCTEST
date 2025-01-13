import React from 'react';
import './Allteachings.css';
import { Link } from 'react-router-dom';

function AllTeachings() {
  return (
    // Main container start
    <div className="main-container">
      {/* Aside start */}
      <div className="aside">
        <div className="logo">
          <Link
            to="/"
          >
          {/* <a href=""> */}
            <span>G</span>BC
          {/* </a> */}
          </Link>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav">
            <Link
              to = "/"
            >
            <li><a href="#home" className="active"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="/"><i className="fa fa-list"></i>Services</a>
            </li>
            <li><a href="/"><i className="fa fa-comments"></i>Teachings</a></li>
            <li><a href="/"><i className="fa fa-briefcase"></i>Ministries</a></li>
            <li><a href="/"><i className="fa fa-user"></i>About</a></li>
            <li><a href="/"><i className="fa fa-comments"></i>Give</a></li>
            <li><a href="/"><i className="fa fa-comments"></i>LiveStream</a></li>
            <li><a href="/"><i className="fa fa-comments"></i>All Teachings</a></li>
            </Link>
        </ul>
      </div>
      {/* Aside End */}

      <section className="all-teachings section" id="all-teachings-page">
        <div className="container">
          <div className="row">
            <div className="all-teachings-page">
              <h2>All Teachings</h2>
              <div className="video-all-container">
                <video controls muted>
                  <source src="/vids/1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video controls muted>
                  <source src="/vids/2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video controls muted>
                  <source src="/vids/3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video controls muted>
                  <source src="/vids/4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // Main container end
  );
}

export default AllTeachings;
