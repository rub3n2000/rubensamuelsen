import React, { useState, useEffect } from 'react';
import './About.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import axios from 'axios';

import Nav from '../Nav/Nav';

const About = ( props ) => {

    const [hasMargin, setHasMargin] = useState(false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
          const tempHasMargin = currPos.y < (-window.innerHeight + 20);
          if (tempHasMargin !== hasMargin) {
            setHasMargin(tempHasMargin);
          }
        },
        [hasMargin],
        false,
        false,
        300
    );
    let classes = hasMargin?"ExtraMargin": "";

    return(
        <>
        <section id="About">
        <Nav SetPath={props.SetPath}/>
            <div id="AboutContentContainer">
                <div id="AboutContent" className={classes}>
                    <h1>
                        About
                    </h1>
                    <div id="AboutText">
                        <p>
                        <span className="Colorized">Hello! </span>
                        My name is <span className="ColorizedAlt">Ruben Samuelsen. </span>
                        I'm a <span className="Colorized">fullstack web-developer </span> 
                        with <span className="ColorizedAlt">2+ years </span> varied webdev experience using 
                        <span className="ColorizedAlt"> technologies </span> such as <span className="Colorized">reactjs</span>,
                        angular, <span className="ColorizedAlt">dotnet core</span>, 
                        es6, typescript, javascript, css, less, sass, webpack, parcel, expressjs,
                        mongodb, sql and more. 
                        </p>

                        <p>
                        I specialize in <span className="ColorizedAlt">react</span> and <span className="Colorized">dotnet core</span>,
                        but have used and will use plenty of other
                        <span className="ColorizedAlt"> technologies </span> in the future.
                        </p>
                        
                        <p>
                        I started my <span className="Colorized">dev journey </span> by making and publishing my own 
                        <span className="ColorizedAlt"> games </span> using <span className="Colorized">c#</span> and unity. From there I went on
                        to experiment with <span className="Colorized">webdev </span> for a year before landing my current job.
                        </p>
                        <p>
                        I am very passionate about <span className="Colorized">software development</span>,
                        I work to constantly <span className="ColorizedAlt">learn </span> something new and 
                        <span className="Colorized"> improve</span>.
                        </p>
                        Dynamic <span className="ColorizedAlt">user friendly </span> web apps are my jam!
                    </div>
                    <div id="SkillSeksjon">
                    <div id="SkillCo1"></div>
                    <div id="SkillCo2"></div>
                    <div id="SkillCo3"></div>
                    <div id="SkillCo4"></div>
                    <div id="SkillCo5"></div>
                    <div id="SkillCo6"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;