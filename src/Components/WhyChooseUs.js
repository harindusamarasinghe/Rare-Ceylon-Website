import './WhyChooseUs.css';
import '../App.css';
import React from 'react';
import imgRoot from "../Icons/idea.jpg"

const WhyChooseUs = () => {
    return (
        <>  
            <div className='why-text'>
                <div className='whyChooseUs-head'>Why Choose Us?</div>
                <div >
                    <h3 className='whyChooseUs-h3'>We are the right term for your business. We have the expertise and 
                        knowledge to offer impartial advice and services at an honest price.</h3>
                </div>
                <div>
                    <p className='whyChooseUs-para'>With us you’ll feel heard. We listen to our client requirements 
                        and then select the right solution that fits. We care for your 
                        business as our own. We take a sincere interest in it and genuinely 
                        want to help your company reach its potential.</p>
                </div>
                </div>
            
            <div className='whyUs'>
                <div className='whyChooseUs-box'>
                    <h2 className='whyBox-head'>Have a project on mind?</h2>
                    <p className='whyBox-para'>We can help you bring your ideas to life. 
                    Let’s talk about what we can build and raise together</p>
                    <button className="btn whychoose">Connect with us!</button>
                </div>
                
                <div className='why-img'>
                    <img src={imgRoot} alt='whyUs-img'></img>
                </div>
            </div>
            <div className='add-text'>
                <div className='add-head'>Let us together build a flourishing business</div>
                <div className='add-para'>When connected with us, you aren’t growing your business alone. 
                    We have your back and put in our best to contribute to the growth 
                    of your entire team and organization. So, if you are looking for the 
                    right agency that’ll help you build a good online presence and bring in 
                    more conversions and revenue, we are right here!</div>
            </div>
            </>
    )

}
export default WhyChooseUs;