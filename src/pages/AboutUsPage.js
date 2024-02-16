import React from "react";
import AboutUsHome from "../Components/AboutUsHome";
import NavBar from "../Components/NavBar";
import Team from "../Components/team";
import AboutUs from "../Components/AboutUs";
import WhyChooseUs from "../Components/WhyChooseUs";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";

const AboutUsPage =()=>{
    return(
        <>
            <NavBar/>
            <AboutUsHome/>
            <AboutUs/>
            <Reviews/>
            <WhyChooseUs/>
            <Team/>
            <Footer/>

        
        </>
    )
}
export default AboutUsPage;