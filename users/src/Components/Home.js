import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="main-container">
      {/* Aside Section */}
      <div className="aside">
        <div className="logo">
          <a href="#about"><span>G</span>BC</a>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav">
          <li><a href="#home" className="active"><i className="fa fa-home"></i>Home</a></li>
          <li><a href="#services"><i className="fa fa-list"></i>Services</a></li>
          <li><a href="#teachings"><i className="fa fa-comments"></i>Teachings</a></li>
          <li><a href="#ministries"><i className="fa fa-briefcase"></i>Ministries</a></li>
          <li><a href="#about"><i className="fa fa-user"></i>About</a></li>
          <Link
            to="/Give "
          >
          <li><i className="fa fa-comments"></i>Give Offerings</li>
          </Link>
          <li><a href="#livestream"><i className="fa fa-comments"></i>LiveStream</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Home Section */}
        <section className="home section" id="home">
          <div className="container">
            <div className="overlay">
              <div className="img">
                <img src="/imgs/home.jpg" alt="Prayer Meeting Section"/>
              </div>
              <div className="quote">
                "Come to Me, all you who labor and are heavy laden,<br /> and I will give you rest."<br />- Jesus
              </div>
              <a href="#teachings">
                <button className="welcome-button">Welcome</button>
              </a>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services section" id="services">
          <div className="container">
            <div className="row">
              <div className="grid padd-15">
                <h2>Services</h2>
                <div className="cards">
                  {/* <a href="/services/prayer-meeting.html"> */}
                  <Link
                    to="/PrayerMeeting"
                  >
                    <div className="card">
                      <img src="/imgs/prayer meeting.jpg" alt="Prayer Meeting Section" />
                      <div className="text">
                        <h2>Prayer Meeting Section</h2>
                        <p>6:00 PM</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/BibleStudy"
                  >
                    <div className="card">
                      <img src="/imgs/prayer meeting.jpg" alt="Bible Study Section" />
                      <div className="text">
                        <h2>Bible Study Section</h2>
                        <p>1:00 PM</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/DoctrinalStudies"
                  >
                    <div className="card">
                      <img src="/imgs/prayer meeting.jpg" alt="Doctrinal Studies" />
                      <div className="text">
                        <h2>Doctrinal Studies</h2>
                        <p>6:00 PM Thursdays</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/BooksClub"
                  >
                    <div className="card">
                      <img src="/imgs/prayer meeting.jpg" alt="Books Club" />
                      <div className="text">
                        <h2>Books Club</h2>
                        <p>6:00 PM Fridays</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/SundayService"
                  >
                    <div className="card">
                      <img src="/imgs/prayer meeting.jpg" alt="Sunday Service" />
                      <div className="text">
                        <h2>Sunday Service</h2>
                        <p>11:00 AM Sundays</p>
                        <p>In Kamadep Guest House</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /* Services Section end*/}
        {/* Teachings Section */}
        <section className="teachings section" id="teachings">
          <div className="container">
            <div className="row">
              <div className="teachings">
                <h2>Teachings</h2>
                <div className="video-container">
                  <video controls className='teach-1'>
                    <source src="/vids/teachings.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="all-teachings">
                  <Link
                    to="/AllTeachings"
                  >
                  <button>All Teachings</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ministries Section start */}
        <section className="ministries section" id="ministries">
          <div className="container">
            <div className="row">
              <div className="grid padd-15">
                <h2>Ministries</h2>
                <div className="cards">
                  {/* Example ministry card */}
                  <Link
                    to="/SundaySchool"
                  >
                    <div className="card">
                      <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                      <div className="text">
                        <h2>Sunday School Ministry</h2>
                        <p>8:00 AM</p>
                        <p>At Grey Apartment</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ministries section end */}
        {/* About Section start */}
        <section className="about section" id="about">
          <div className="container">
            <div className="row">
              <div className="section-title">
              </div>
              <div className="content">
                <h2>About</h2>
                <h1>The Good News</h1>
                <p>
                  The gospel is the “Good News” of Jesus Christ. Romans 6:23 explains the
                  heavy price of our sin:
                  <q>
                    The wages of sin is death, but the gift of God is eternal life in Christ
                    Jesus our Lord.
                  </q>
                </p>
                <p>
                  God has provided a gift, a solution to our sin, and at great cost to
                  Himself. It was His only Son who came to suffer and die for our sins.
                </p>
                <p>
                  <q>
                    For God so loved the world that He gave His only begotten Son, that
                    whoever believes in Him should not perish but have everlasting life.
                  </q>{" "}
                  – JOHN 3:16
                </p>
              </div>
              <div className="image">
                <img src="/imgs/about.jpg" alt="Wooden Cross in Nature" />
              </div>
              <div className="container-2">
                <div className="p1">
                  <p>
                    - For God so loved the world that He gave His only begotten Son, that
                    whoever believes in Him should not perish but have everlasting life.
                  </p>
                </div>
                <div className="p2">
                  <p>
                    - For God so loved the world that He gave His only begotten Son, that
                    whoever believes in Him should not perish but have everlasting life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About section end */}

      {/* Other Pages */}
      <div className="other-pages">
        {/* Staff Section */}
        <div className="staff-section">
          <h2>What We're About</h2>
          <p>
            Here at ACF we go straight through the Bible. Looking at Jesus verse-by-verse,
            chapter-by-chapter, and book-by-book.
            <br />
            <em>- Hebrews 10:7</em>
          </p>
          <a href="/staff.html">
            <button>Meet Our Staff</button>
          </a>
        </div>

        {/* Contact Section */}
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact</h2>
            <div className="info-item">
              <span className="icon1">📍</span>
              <p>
                Glory Bible Church
                <br />
                Kakamega
                <br />
                Kamadep Guest House
              </p>
            </div>
            <div className="info-item">
              <span className="icon2">📞</span>
              <p>
                Office Hours: Tue-Fri, 8:00am–12:00pm
                <br />
                (541) 899-8732
              </p>
            </div>
            <div className="info-item">
              <span className="icon3">✉️</span>
              <p>staff@applegatefellowship.org</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" name="first-name" placeholder="First Name" required />
                <input type="text" name="last-name" placeholder="Last Name" required />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Email *" required />
              </div>
              <div className="form-row">
                <textarea name="message" placeholder="Message" rows="4" required />
              </div>
              <button className='send' type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
