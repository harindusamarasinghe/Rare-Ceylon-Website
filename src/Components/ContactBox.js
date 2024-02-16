import React from 'react'
import "./ContactBox.css"

export default function ContactBox() {
  return (
    <div className='contact-box'>
    <div className='contact-content'>
        <h1 className='contact-content-head'>We are here to help!</h1>
        <p className='contact-address-para'>3138 Ivy Street ,Los Angeles ,California, 90034</p>
        <p className='contact-phone'>+1 234 567 890</p>
        <h3 className='contact-follow'>Follow us</h3>
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
    <div className='contact-form'>
        <h1 className='contact-form-heading'>Send us a Message</h1>
        <form>
            <label>
                <input type="text"  placeholder='First Name ' className='First-Name'/>
            </label>
            <label> 
                <input type="text" placeholder='Last Name' className='Last-Name'/>
            </label>
            <label>
                <input type='email' placeholder='Email address' className='Email-address'/>
            </label>
            <label>
                <input type="text" placeholder='Subject' className='Subject'/>
            </label>
            <label> 
                <input type="text" placeholder='Your Message' className='Your-Message' />
            </label>
            <input type="submit" value="Send Message" />
        </form>
    </div>
</div>
  )
}
