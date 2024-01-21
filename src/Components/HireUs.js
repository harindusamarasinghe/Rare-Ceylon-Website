import "./HireUs.css";
import "../App.css";
import React from 'react';

const HireUs =()=>{
    return(
        <>
            <div className="hireUs">
                <h1 className="hireUs-head">Hire Us For</h1>
                <div className="hireUs--cards">
                    <div className="item one"> 
                        <h6>Design</h6>
                        <p>Our web design team has ample years of experience 
                        in the core areas of design to build a website that you need..</p>
                    </div>
                    <div className="item two"> 
                        <h6>Development</h6>
                        <p>Looking out for customized solutions for your websites? 
                        Our team will develop and deliver a website that’ll serve your purpose.</p>
                    </div>
                    <div className="item three"> 
                        <h6>Marketing</h6>
                        <p>With researched digital marketing, 
                        we will ensure that new customers and clients are able to find your business.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HireUs;