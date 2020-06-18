import React from 'react';
import './LandingPage.scss';

const LandingPage = ( props ) => {
    return(
        <>
        <section id="LandingPage">
            <div className="Canvas">
                <canvas id="Canvas" width="2560" height="938"></canvas>
            </div>
            <div className="LandingPageContent">
                <p>
                    Hello I'm <span>Ruben Samuelsen</span>. 
                    <br/> 
                    I'm a full-stack web developer
                </p>
                <div id="ViewMyWork">
                    <a href="#About">View my work</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default LandingPage;