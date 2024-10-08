import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nuspn6u", "template_ilhaly7", form.current, {
        publicKey: "u_g8_7UwyRjyDpWIP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/formSuccess");
        },
        (error) => {
          console.log("FAILED...", error.text);
          navigate("/formFail");
        }
      );
  };
  return (
    <>
      <article className="pageBody">
        <h2>Get In Touch</h2>
        <div className="homeText">
          <a
            className="bookingLink"
            href="https://calendly.com/gtw-hypnotherapy/discovery-call"
            target="_blank"
          >
            <div id="bookingButton">Book Now</div>
          </a>
          <form
            className="contactForm"
            ref={form}
            onSubmit={sendEmail}
            // action="https://submit-form.com/XcNrE74n"
            // method="post"
          >
            <input
              type="hidden"
              name="_redirect"
              value="https://www.gtw-hypnotherapy.co.uk/formSuccess"
            />
            <label htmlFor="name">Name:</label>
            <input type="name" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone:</label>
            <input type="phone" id="phone" name="phone" />
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="10"
              columns="100"
              required
            />
            <input type="submit" value="Submit" className="contactFormButton" />
          </form>

          <h3 className="contactName">Georgina Taylor-Wyatt</h3>
          <h3 className="contactName"> DSFH, HPD, NCH (reg), AfSFH (reg)</h3>
          <ul className="noDecoration">
            <li>GTW Hypnotherapy </li>
            <li>Crawley Business Centre</li>
            <li> Stephenson Way</li>
            <li> Three Bridges</li>
            <li>Crawley</li>
            <li> RH10 1TN </li>
            <li>
              {" "}
              <a href="www.gtw-hypnotherapy.co.uk">
                www.gtw-hypnotherapy.co.uk
              </a>{" "}
            </li>
            <li>
              <a href="mailto:info@gtw-hypnotherapy.co.uk">
                info@gtw-hypnotherapy.co.uk
              </a>{" "}
            </li>
            <li>
              <a href="tel:07597339913">07597 339913</a>
            </li>
          </ul>
        </div>
        {/* <p className="contact-cta">
          Or to book your free Discovery Call{" "}
          <a
            href="https://calendly.com/gtw-hypnotherapy/discovery-call"
            target="_blank"
          >
            CLICK HERE
          </a>
        </p> */}
      </article>
    </>
  );
};

export default Contact;
