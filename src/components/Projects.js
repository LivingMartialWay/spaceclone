import React from 'react';
import Particles from 'react-particles-js';
import reactlogo from '../img/react.png';
import jslogo from '../img/javascript.png';
import nodelogo from '../img/nodejs.png';
import {FaGithub} from 'react-icons/fa';
import {GrHeroku} from 'react-icons/gr';

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
                                  Booking Microservice
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
                              <span className="card__heading-span--6">
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
                                  Paywall Chat and Pay
                              </span>
                          </div>
                          <div className="card__details">
                              <ul>
                                  <li>React | Redux</li>
                                  <li>Socket.io</li>
                                  <li>Express | NodeJS</li>
                                  <li>PostgreSQL</li>
                              </ul>
                          </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-3">
                          <div className="card__cta">
                              <div className="card__box">
                                  <div className="card__description">
                                      <p>
                                          Payment app with live messaging, notifications, friends list
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
                                      Perfect Plate
                                  </span>
                              </h4>
                              <div className="card__details">
                                  <ul>
                                      <li>React</li>
                                      <li>CSS | SASS</li>
                                      <li>Express | NodeJS</li>
                                      <li>mySQL</li>
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
                                    <span className="card__heading-span--2">
                                        Instalava Picture App
                                    </span>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>React | Redux</li>
                                        <li>SemanticUI</li>
                                        <li>Express | NodeJS</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Instagram-inspired picture app with feed, profiles, followers
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
                                    <span className="card__heading-span--5">
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
