import React from 'react';
import logo from '../img/db.png'

function Footer() {
    return (
    <div className="footer">
      <div class="footer__logo-box">
          <a href="#top">
              <img src={logo} alt="Logo" class="footer__logo smooth-goto"></img>
          </a>
      </div>
      <div class="row">
            <div class="footer__navigation">
                  <a class="ztn ztn-icon ztn-github" href="https://github.com/LivingMartialWay" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i><span>/LivingMartialWay</span></a>
                  <a class="ztn ztn-icon ztn-pinterest" href='www.google.com'><i class="fa fa-envelope"></i><span>LivingMartialWay@gmail</span></a>
                  <a class="ztn ztn-icon ztn-resume" href="https://docs.google.com/document/d/1RVkR9zEw8eIo3WWkek39en2H2JyDabAsARYdZlcLE9Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fa fa-file"></i><span>Resume</span></a>
                  <a class="ztn ztn-icon ztn-twitter" href="www.google.com"><i class="fa fa-phone"></i><span>+972.58.420.2138</span></a>
                  <a class="ztn ztn-icon ztn-linkedin" href="https://www.linkedin.com/in/livingmartialway/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i><span>/LivingMartialWay</span></a>
            </div>
      </div>
    </div>
    )
  };

export default Footer;
