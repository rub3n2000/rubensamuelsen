import React from 'react';
import './LandingPage.scss';
import FollowMe from '../FollowMe/FollowMe';

const LandingPage = ( props ) => {
    return(
        <section id="LandingPage">
            <FollowMe/>
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
    )
}

export default LandingPage;