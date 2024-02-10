import './ServiceListing.css'
import '../App.css'
import React from "react";


const ServiceListing =()=>{
    return(
        <div className="listing-container">
            <div className="listing-mainHead">How can we help you?</div>
            <div className="listing-box">
                <div className="listing-box-1">
                    <div className="listing-box-head">
                        Creative Design
                    </div>
                    <div className="listing-box-para">
                    Our team of professional graphic and web 
                    designers will help you with unique and creative 
                    logo and website designs that will match your business.
                    </div>
                    <button class="button-81" role="button">Get In Touch</button>
                </div>
                <div className="listing-box-1">
                    <div className="listing-box-head">
                        Research & Development
                    </div>
                    <div className="listing-box-para">
                    We help you develop the right website with a good 
                    user interface built after a lot of research in the 
                    industry to help you make the best out of it
                    </div>
                    <button class="button-81" role="button">Get In Touch</button>
                </div>
                <div className="listing-box-1">
                    <div className="listing-box-head">
                    Branding & Marketing
                    </div>
                    <div className="listing-box-para">
                    Need help with branding and marketing to reach out to a larger audience? 
                    We can help you create a brand presence and marketing efforts.
                    </div>
                    <button class="button-81" role="button">Get In Touch</button>
                </div>
                
            </div>
        </div>
    )
}

export default ServiceListing;