import React from 'react';

function Footer() {
    return (
    <div className="footer">
      <div class="footer__logo-box">
          <a href="#top">
              <img src="../img/db.png" alt="Logo" class="footer__logo smooth-goto"></img>
          </a>
      </div>
      <div class="row">
          <div class="col-1-of-2">
              <div class="footer__navigation">
                  <ul class="footer__list">
                      <li class="footer__item">
                          <a href="https://github.com/LivingMartialWay" class="footer__link">GitHub</a>
                      </li>
                      <li class="footer__item">
                          <a href="https://www.linkedin.com/in/daniel-bach-2282b4172/" class="footer__link">LinkedIn</a>
                      </li>
                      <li class="footer__item">
                          <a href="#" class="footer__link">Resume</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-1-of-2">
              <p class="footer__copyright">
                  Site by
                  <a href="localhost:3000" class="footer__link"> Daniel Bach </a>
              </p>
          </div>
      </div>
    </div>
    )
  };

export default Footer;
