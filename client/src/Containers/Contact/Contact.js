import React, { useState, useEffect } from 'react';
import './Contact.scss';
import axios from 'axios';

import Nav from '../Nav/Nav';

const Contact = ( props ) => {
    return(
        <>
        <section id="Contact">
            <div className="NavContainer">
                <Nav SetPath={props.SetPath}/>
            </div>
            <div id="ContactContentContainer">
                <h1>
                    Contact Me
                </h1>
            </div>
        </section>
        </>
    )
}

export default Contact;