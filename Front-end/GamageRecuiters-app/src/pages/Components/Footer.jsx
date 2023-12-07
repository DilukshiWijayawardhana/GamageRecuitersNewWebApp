import React from 'react'

import { IoMail } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import Home from './../Home/Home';
// import Contactus from './../Contact Us/Contactus';
// import Ourjourney from './../Our Journey/Ourjourney';
// import Jobvacancy from './../Job-vacancy/Jobvacancy';
// import clientdiaries from './../Client Diaries/Clientdiaries'

const Footer = () => {
    return (
        <div className='footer' >
            <div className="sb_footer footerSelection">
                <div className="sb_footer-footerLinks">
                    <div className="sb_footer-subFooterLinks">
                        <h4 className='head'>Our Mission</h4>
                        <p className='head'>To showcase emerging market talent <br />globally to
                            provide a genuinely local solution<br /> to organizational needs.</p>
                    </div>

                    <div className="sb_footer-subFooterLinks">
                        <h4 className='head'>Contact Us</h4>
                        <a href="gamagerecruiters@gmail.com"><p><IoMail className='icon' />gamagerecruiters@gmail.com</p></a>
                        <p><GiRotaryPhone className='icon' />011-2236189</p>
                        <p><FaPhoneAlt className='icon' />071-3344371</p>
                        <p><FaLocationDot className='icon' />Gamage Recruiters Pvt Ltd, No.789, Panadura Road, Sri Lanka</p>
                    </div>

                    <div className="sb_footer-subFooterLinks">
                        <h4 className='head'>Links</h4>
                        <a className='head' href="/"><p>Home</p></a>
                        <a className='head' href="/Ourjurney"><p>Our Jurney</p></a>
                        <a className='head' href="/Clientdiaries"><p>Client Diaries</p></a>
                        <a className='head' href="/Jobvacancies"><p>Job Vacancies</p></a>
                        <a className='head' href="/Contactus"><p>Contact Us</p></a>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className="sb_footer-belowLinks">
                <div className='socialMedia'>
                    <h2 className='follow'>Follow Us</h2>
                    <a href="https://web.facebook.com/profile.php?id=61552739918345 " target="_blank" rel="noopener noreferrer"><FaFacebook className='social-icons' /></a>
                    <a href="https://www.tiktok.com/@gamagerecruitersofficial?_t=8hwu0zBntVS&_r=1" target='_blank' rel='noopener noreferrer'><FaTiktok className='social-icons' /></a>
                    <a href="https://instagram.com/officialgamagerecruiters?igshid=NzZlODBkYWE4Ng==" target='_blank' rel='noopener noreferrer'><FaInstagramSquare className='social-icons' /></a>
                    <a href="https://www.linkedin.com/company/gamage-recruiters" target='_blank' rel='noopener noreferrer'><FaLinkedin className='social-icons' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
