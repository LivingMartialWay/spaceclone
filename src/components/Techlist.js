import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import reactlogo from '../img/react.png';
import jslogo from '../img/javascript.png';
import nodelogo from '../img/nodejs.png';

function Techlist() {
    return (
    <div className="Techlist">
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <section class="section-about">
          <div class="u-center-text u-margin-bottom-big">
              <h2 class="heading-secondary">
                  Front End Focused
                  <br/>With Full Stack Experience
              </h2>
          </div>

          <div class="row">
              <div class="col-1-of-2">
                  <h3 class="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                  <p class="paragraph">
                      As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
                  </p>
                  <h3 class="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                  <p class="paragraph">
                      I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
                  </p>

              </div>
              <div class="col-1-of-2">
                  <div class="composition">
                      <img src={jslogo} alt="JS" class="composition__photo composition__photo--p1"></img>
                      <img src={nodelogo} alt="Node" class="composition__photo composition__photo--p3"></img>
                      <img src={reactlogo} alt="React" class="composition__photo composition__photo--p2"></img>
                  </div>
              </div>
          </div>

      </section>
    </div>
    )
  };

export default Techlist;
