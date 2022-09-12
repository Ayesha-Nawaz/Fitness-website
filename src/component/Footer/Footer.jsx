import React from 'react'
import './footer.css'
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
import LinkedIn from "../../assets/linkedin.png";

export const Footer = () => {
return (
    <div className="Footer-container">
          <hr />
          <div className="footer">
               <div className="social-links">
                    <img src={GitHub} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
               <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
          </div>
          <div className="blur blur-f-1"></div>
          <div className="blur blur-f-2"></div>
    </div>
  )
}
