import React from 'react';

function Gears() {
    return (
    <div className="gears">
        <header class="header">
            <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Daniel" class="header__logo"></img>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Daniel Bach</span>
                    <span class="heading-primary--sub">Front End Engineer</span>
                </h1>

                <a href="#projects" class="btn btn--white btn--animated smooth-goto">See Projects</a>
            </div>
        </header>
    </div>
    )
  };

export default Gears;
