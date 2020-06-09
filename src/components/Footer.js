import React from 'react'

const Footer = ()=>{
    return(
        <footer>
            <div className="wrapper">
                <div className="footer-nav-links">
                    <ul>
                        <li> <a href="#"> Home </a></li>
                        <li>|</li>
                        <li> <a href="#"> Terms and Conditions </a></li>
                        <li>|</li>
                        <li> <a href="#"> Privacy Policy </a></li>
                        <li>|</li>
                        <li> <a href="#"> Collection Statement </a></li>
                        <li>|</li>
                        <li> <a href="#"> Help </a></li>
                        <li>|</li>
                        <li> <a href="#"> Manage Account </a></li>
                    </ul>
                </div>

                
                <div className="footer-copyright"> 
                    Copyright &#169; 2016 <span name="organization">DEMO Streaming </span> All Rights Reserved
                </div>

                <div className="flex">
                <div className="footer-social-media">
                    <ul>
                        <li> <a href="#"> <i className="fab fa-facebook-f"></i></a></li>
                        <li> <a href="#"> <i className="fab fa-twitter"></i> </a></li>
                        <li> <a href="#"> <i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

                <div className="footer-apps-downloads">
                    <ul>
                        <li><a href="#"><img src="assets/ios-icon.svg" alt="download on App Store" /></a></li>
                        <li><a href="#"> <img src="assets/google-play-badge.png" alt="download on google play" /></a></li>
                        <li><a href="#"> <img src="assets/en.png" alt="get it from microsoft" /></a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </footer>
    )

}

export default Footer