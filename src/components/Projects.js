import React from 'react';
import Particles from 'react-particles-js';
import reactlogo from '../img/react.png';
import jslogo from '../img/javascript.png';
import nodelogo from '../img/nodejs.png';
import {FaGithub} from 'react-icons/fa';
import {GrHeroku} from 'react-icons/gr';

/*
const signs6 = document.querySelectorAll("card__heading-span--1")
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs6.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

const signs1 = document.querySelector("card__heading-span--2")
signs1.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
const signs2 = document.querySelector("card__heading-span--3")
signs2.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
const signs3 = document.querySelector("card__heading-span--4")
signs3.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
const signs4 = document.querySelector("card__heading-span--5")
signs4.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
const signs5 = document.querySelector("card__heading-span--6")
signs5.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
*/

function Projects() {
  return (
      <div className="projects">
      <Particles
        params={("particles-js",
            {"particles":{
              "number":{"value":80,"density":{"enable":true,"value_area":800}},
              "color":{"value":"#ffffff"},
              "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
              "opacity":{"value":0.4,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":0.6,"sync":false}},
              "size":{"value":3,"random":true,"anim":{"enable":true,"speed":18,"size_min":0.1,"sync":false}},
              "line_linked":{"enable":true,"distance":150,"color":"#87b2c5","opacity":0.35,"width":1.2},
              "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
            "interactivity":{"detect_on":"canvas","events":{
              "onhover":{"enable":true,"mode":"grab"},
              "onclick":{"enable":true,"mode":"push"},"resize":true},
              "modes":{
                "grab":{"distance":200,"line_linked":{"opacity":1,"color":"#ff0000"}},
                "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
                "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
                "remove":{"particles_nb":2}}},"retina_detect":true}
              )
            }
      />

      <section className="section-tours" id="projects">
          <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                  Project Portfolio
              </h2>
          </div>
          <div className="row">
              <div className="col-1-of-3">
                  <div className="card">
                      <div className="card__side card__side--front card__side--front-1">
                          <div className="card__picture card__picture--1">
                              &nbsp;
                          </div>
                          <img src="img/gear.png" className="card__svg-icon spin" alt=""></img>
                          <h4 className="card__heading">

                              <span className="card__heading-span--1">
                                  Booking Service
                              </span>
                          </h4>
                          <div className="card__details">
                              <ul>
                                  <li>AWS SQS</li>
                                  <li>Docker</li>
                                  <li>NodeJS</li>
                                  <li>Cassandra</li>
                              </ul>
                          </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-1">

                          <div className="card__cta">

                              <div className="card__box">
                                  <div className="card__description">
                                      <p>
                                          A back-end booking system, handles 1500+ requests / sec
                                      </p>
                                  </div>
                              </div>
                                <div className="hover">
                                  <span>Explore</span>
                                  <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                    <GrHeroku />
                                  </a>
                                  <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-1-of-3">
                  <div className="card">
                      <div className="card__side card__side--front card__side--front-2">
                          <div className="card__picture card__picture--6">
                              &nbsp;
                          </div>
                          <img src="img/bizman.gif" className="card__svg-icon card__svg-icon-6" alt=""></img>
                          <div className="card__heading">
                              <span className="card__heading-span--2">
                                  Elevator Live Stream
                              </span>
                          </div>
                          <div className="card__details">
                              <ul>
                                  <li>React | Redux</li>
                                  <li>CSS</li>
                                  <li>Express | NodeJS</li>
                                  <li>Tokbox API</li>
                              </ul>
                          </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-6">
                          <div className="card__cta">
                              <div className="card__box">
                                  <div className="card__description">
                                      <p>
                                          Fully functional live stream app to practice elevator pitches
                                      </p>
                                  </div>
                              </div>
                              <div className="hover">
                                <span>Explore</span>
                                <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                  <GrHeroku />
                                </a>
                                <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                  <FaGithub />
                                </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-1-of-3">
                  <div className="card">
                      <div className="card__side card__side--front card__side--front-3">
                          <div className="card__picture card__picture--3">
                              &nbsp;
                          </div>
                          <img src="img/chat.gif" className="card__svg-icon card__svg-icon-3" alt=""></img>
                          <div className="card__heading">
                              <span className="card__heading-span--3">
                                  Money Month
                              </span>
                          </div>
                          <div className="card__details">
                              <ul>
                                  <li>HTML5</li>
                                  <li>JavaScript</li>
                                  <li>CSS | SASS</li>
                                  <li>Heroku</li>
                              </ul>
                          </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-3">
                          <div className="card__cta">
                              <div className="card__box">
                                  <div className="card__description">
                                      <p>
                                          Monthly budgeting application with JavaScript
                                      </p>
                                  </div>
                              </div>
                              <div className="hover">
                                <span>Explore</span>
                                <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                  <GrHeroku />
                                </a>
                                <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                  <FaGithub />
                                </a>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>

              <div className="row">
                  <div className="col-1-of-3 single-col">
                      <div className="card">
                          <div className="card__side card__side--front card__side--front-4">
                              <div className="card__picture card__picture--4">
                                  &nbsp;
                              </div>
                              <img src="img/avo.png" className="card__svg-icon card__svg-icon-4 floating" alt=""></img>
                              <h4 className="card__heading">
                                  <span className="card__heading-span--4">
                                      Youtube Implant
                                  </span>
                              </h4>
                              <div className="card__details">
                                  <ul>
                                      <li>React</li>
                                      <li>CSS | SASS</li>
                                      <li>JavaScript</li>
                                      <li>Youtube API</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="card__side card__side--back card__side--back-4">
                              <div className="card__cta">
                                  <div className="card__box">
                                      <div className="card__description">
                                          <p>
                                              Data populated and cached with REST API calls to USDA database
                                          </p>
                                      </div>
                                  </div>
                                  <div className="hover">
                                    <span>Explore</span>
                                    <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                      <GrHeroku />
                                    </a>
                                    <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                      <FaGithub />
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-2">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <img src="img/fire.gif" className="card__svg-icon card__svg-icon-2" alt=""></img>
                                <div className="card__heading">
                                    <span className="card__heading-span--5">
                                        Top - 10 Picture
                                    </span>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>Unsplash API</li>
                                        <li>Netlify</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Pintrest-inspired picture search using Unsplash API
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hover">
                                      <span>Explore</span>
                                      <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                        <GrHeroku />
                                      </a>
                                      <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                        <FaGithub />
                                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3 single-col">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-5">
                                <div className="card__picture card__picture--5">
                                    &nbsp;
                                </div>
                                <img src="img/money.gif" className="card__svg-icon card__svg-icon-5 floating" alt=""></img>
                                <h4 className="card__heading">
                                    <span className="card__heading-span--6">
                                        Stock Trader
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Django</li>
                                        <li>CSS</li>
                                        <li>Python</li>
                                        <li>Jinja</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Stock data pulled in real time from Yahoo Finance API
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hover">
                                      <span>Explore</span>
                                      <a className="social-link" href="https://codepen.io/joshuaward/" target="_blank">
                                        <GrHeroku />
                                      </a>
                                      <a className="social-link" href="https://github.com/joshuaward" target="_blank">
                                        <FaGithub />
                                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
      </section>














      </div>
  );
};

export default Projects;
