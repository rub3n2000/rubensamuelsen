import React, { useState, useEffect } from 'react';
import './Contact.scss';
import axios from 'axios';

import Nav from '../Nav/Nav';

const Contact = ( props ) => {
    
    const[subFeedback, setSubFeedback] = useState("");

    const ContactSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        let response = await axios.post("https://formspree.io/maypbljv", data);
        if(response.status === 200) {
            setSubFeedback("Success! I will respond as soon as possible.");
        }
        else {
            setSubFeedback("Something went wrong.. Try sending me an email directly at ruben@tresam.no");
        }
    }
    return(
        <>
        <section id="Contact">
            <div id="ContactContentContainer">
                <div id="Label">
                    <h1>
                        Contact Me
                    </h1>
                </div>
                <div id="ContactForm">
                    <form onSubmit={ContactSubmit}>
                        <input type="text" placeholder="Name" name="name" required/>
                        <input placeholder="Enter email" type="email" name="email" required/>
                        <textarea placeholder="Your Message" type="text" name="message"></textarea>
                        <div id="ButtonAndFeedbackContact">
                        <div id="FeedbackDiv">{subFeedback}</div>
                        <div id="ButtonContactDiv"><button>Send Message!</button></div>
                        </div>
                    </form>
                </div>
            </div>

            <div onClick={() => {
                window.location.assign('/')
            }} id="TriangleTop">
            
            </div>
        </section>
        </>
    )
}

export default Contact;