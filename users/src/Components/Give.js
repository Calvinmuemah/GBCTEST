import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Give() {
  return (
      <div className="main-container3">
        {/* <!-- aside start --> */}
        <div className="aside">
            <div className="logo">
                <Link
                    to="/"
                >
                    <span>G</span>BC
                </Link>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <Link
                    to = "/"
                >
                <li><a href="/" class="active"><i class="fa fa-home"></i>Home</a></li>
                <li><a href="/"><i class="fa fa-list"></i>Services</a></li>
                <li><a href="/"><i class="fa fa-comments"></i>Teachings</a></li>
                <li><a href="/"><i class="fa fa-briefcase"></i>Ministries</a></li>
                <li><a href="/"><i class="fa fa-user"></i>About</a></li>
                <li><a href="/"><i class="fa fa-comments"></i>Give Offerings</a></li>
                <li><a href="/"><i class="fa fa-comments"></i>LiveStream</a></li>
                </Link>
            </ul>
        </div>
        {/* <!-- aside End --> */}
        <header className="header">
            <h1>Glory Bible Church</h1>
            <p>Christian Fellowship</p>
        </header>

        <main className="container2">
            <section className="method1">
                <div className="icon phone"></div>
                <h2>Text to give</h2>
                <p>Send the <strong>AMOUNT</strong> you'd like to give by texting the amount to <a href="tel:+254 795578697">+254 795578697</a>.</p>
            </section>

            <section className="method2">
                <div className="icon mail"></div>
                <h2>Mail</h2>
                <p>GBC Christian Fellowship<br/>
                P.O. Box 1090<br/>
                Jacksonville OR, 97530</p>
            </section>

            <section className="method3">
                <div className="icon box"></div>
                <h2>In person</h2>
                <p>Tithes & Offerings boxes are located in the back of the...</p>
            </section>
        </main>
    </div>
  )
}

export default Give
