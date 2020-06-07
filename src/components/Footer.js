import React from 'react';
import logo from '../img/db.png'
import {FaGithub} from 'react-icons/fa';
import {GrHeroku} from 'react-icons/gr';
import {FaWhatsapp} from 'react-icons/fa';

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
                  <a class="ztn ztn-icon ztn-github" href="#"><i class="fa fa-github"></i><span>/LivingMartialWay</span></a>
                  <a class="ztn ztn-icon ztn-pinterest" href="#"><i class="fa fa-envelope"></i><span>LivingMartialWay@gmail</span></a>
                  <a class="ztn ztn-icon ztn-resume" href="#"><i class="fa fa-file"></i><span>Resume</span></a>
                  <a class="ztn ztn-icon ztn-twitter" href="#"><i class="fa fa-phone"></i><span>+972.58.420.2138</span></a>
                  <a class="ztn ztn-icon ztn-linkedin" href="#"><i class="fa fa-linkedin"></i><span>/LivingMartialWay</span></a>
            </div>
      </div>
    </div>
    )
  };

export default Footer;
