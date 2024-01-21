import "./AboutUs.css";
import "../App.css";
import React from 'react';
import aboutUsImage from '../Icons/aboutAnime.png';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="AboutUs-content">
                    <h1 className="aboutUs-head">About <span>Us</span></h1>
                    <p className="aboutUs-para">We are a team of 40 web experts with over 12 years of 
                        experience in website building and marketing to help businesses grow online.</p>
                </div>
            <div className="aboutUs-container">
                <div className="row">
                    <div className="card">
                        <h4>Our Mission</h4>
                        <p>Our mission is to empower our clients to use the internet 
                            to its full potential by providing affordable, effective, 
                            custom design and marketing solutions.</p>
                    </div>
                    <div className="card">
                        <h4>Our Vision</h4>
                        <p>Our vision is to become a global leader in providing the best 
                            and unique web design and marketing services to improve our client’s 
                            productivity and business strength.</p>
                    </div>
                    <div className="card">
                        <h4>Our Values</h4>
                        <p>Empowering businesses through the lens of innovation, 
                            we offer a spectrum of services, including 
                            internet marketing, and mobile and
                             web applications development.</p>
                    </div>
                </div>
                <div className="AboutUs-img">
                    <img className="aboutus-img" src={aboutUsImage} alt="about us"/>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
