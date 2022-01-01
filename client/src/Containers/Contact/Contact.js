import React, { useState } from "react";
import styles from "./Contact.module.scss";
import axios from "axios";

const Contact = () => {
  const [subFeedback, setSubFeedback] = useState("");

  const contactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    let response = await axios.post("https://formspree.io/f/myyozpjy", data);
    if (response.status === 200) {
      setSubFeedback("Success! I will respond as soon as possible.");
    } else {
      setSubFeedback(
        "Something went wrong.. Try sending me an email directly at mail@rubensamuelsen.com"
      );
    }
  };
  return (
    <>
      <section className={styles.Contact} id="Contact">
        <div className={styles.ContactContentContainer}>
          <div className={styles.Label}>
            <h1>Contact Me</h1>
          </div>
          <div className={styles.ContactForm}>
            <form onSubmit={contactSubmit}>
              <input type="text" placeholder="Name" name="name" required />
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                required
              />
              <textarea
                placeholder="Your Message"
                type="text"
                name="message"
              ></textarea>
              <div className={styles.ButtonAndFeedbackContact}>
                <div className={styles.FeedbackDiv}>{subFeedback}</div>
                <div className={styles.ButtonContactDiv}>
                  <button>Send Message!</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          onClick={() => {
            window.location.assign("/");
          }}
          className={styles.TriangleTop}
        ></div>
      </section>
    </>
  );
};

export default Contact;
