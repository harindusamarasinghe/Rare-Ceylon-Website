import './Footer.css';
import '../App.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="footer-up">
                    <img src="https://websitedemos.net/agency-ai/wp-content/uploads/sites/836/2021/05/logo-black.svg" alt='logo'></img>   
                    <ol className='footer-menu'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ol> 
                </div>
                <div className='footer-middle'>
                    3138 Ivy Street <br></br>Los Angeles<br></br>California<br></br>90034
                

                <div class="social-buttons">
                        <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                            <span class="social-button__inner facebook">
                            <i class="fab fa-facebook-f"></i>
                            </span>
                        </a>
                        <a href="#" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                            <span class="social-button__inner linkedin">
                            <i class="fab fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="social-buttons__button social-button social-button--instagram" aria-label="InstaGram">
                            <span class="social-button__inner instagram">
                            <i class="fab fa-instagram"></i>
                            </span>
                        </a>
                        <a href="#" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
                            <span class="social-button__inner github">
                            <i class="fab fa-github"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='footer-low'>
                    <hr></hr>
                    <p className='footer-low-para'>Copyright © 2024 Digital Agency | Powered by Digital Agency</p>
                </div>
                 
            </div>  

            
        </>
    )
}

export default Footer;