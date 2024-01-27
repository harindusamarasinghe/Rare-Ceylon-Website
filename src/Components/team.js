import './team.css';
import '../App.css';
import React,{useState} from 'react';
import image1 from '../Icons/team1.jpg';
import image2 from '../Icons/team2.jpg';
import image3 from '../Icons/team3.jpg';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Team =()=>{
    return(
        <>
            <h3 className='team-small'>Your Trusted Partners</h3>
            <div className='content'>
                <h1 className='team-head'>Highly Motivated Team with Innovative Ideas</h1>
                <p className='team-para'>We love what we do and therefore come up with the 
                    best possible solutions to help you set and grow online quickly. 
                    We are your trusted partners you can count on.</p>
            </div>
            <div className='gallery-slide'>
                <div className='img-container'>
                    <img className='img' src={image1} alt='image-1' />
                </div>
                <div className='img-container'>
                    <img className='img' src={image2} alt='image-2' />
                </div>
                <div className='img-container'>
                    <img className='img' src={image3} alt='image-3' />
                </div>
            </div>
            <div className='sub'>
                <h1 className='sub-head'>Subscribe</h1>
                <div className='sub-fields'>
                <TextField id="standard-basic" 
                label="Email Address" 
                variant="standard"
                className="custom-textfield"/>
                <button class="button-81" role="button">I'm Interested</button>
                </div>
            </div>

        </>
    )
}

export default Team;