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
          height: '200%'
        }}
      />
      <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                  Front End Focused
                  <br/>Full Stack Experience
              </h2>
          </div>

          <div className="row">
              <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                  <p className="paragraph">
                      As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
                  </p>
                  <h3 className="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                  <p className="paragraph">
                      I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
                  </p>

              </div>
              <div className="col-1-of-2">
                  <div className="composition">
                      <img src={jslogo} alt="JS" className="composition__photo composition__photo--p1"></img>
                      <img src={nodelogo} alt="Node" className="composition__photo composition__photo--p3"></img>
                      <img src={reactlogo} alt="React" className="composition__photo composition__photo--p2"></img>
                  </div>
              </div>
          </div>

      </section>
    </div>
    )
  };

export default Techlist;
