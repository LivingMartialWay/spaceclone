import React from 'react';
import logo from '../img/db.png'

function Gears() {
    return (
    <div className="gears">
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Daniel" className="header__logo"></img>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Daniel Bach</span>
                    <span className="heading-primary--sub">Front End Engineer</span>
                </h1>

                <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
            </div>
        </header>
    </div>
    )
  };

export default Gears;
