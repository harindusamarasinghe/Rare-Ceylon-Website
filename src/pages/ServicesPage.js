import React from "react";
import NavBar from "../Components/NavBar"
import ServiceHome from "../Components/ServiceHome";
import ServiceListing from "../Components/ServiceListing";
import Clients from "../Components/Clients"
import AboutUs from "../Components/AboutUs";
import WhyChooseUs from "../Components/WhyChooseUs"
import Footer from "../Components/Footer"

const ServicesPage=()=>{
    return(
        <>
           <NavBar/>
           <ServiceHome/>
           <ServiceListing/>
           <WhyChooseUs/>
           <Clients/>
           <Footer/>
        </>
    )
}

export default ServicesPage;