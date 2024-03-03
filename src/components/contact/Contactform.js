import React from "react";
import styles from "./contact.module.css";

const Contactform = () => {
  return (
    <div>
      <>
        <section className={styles.contact_container}>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0058473989443!2d76.72164916489415!3d28.659543582407167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d7151beb93713%3A0xd65201a4db9a9d19!2sKheri%20Asra%2C%20Haryana%20124104!5e0!3m2!1sen!2sin!4v1661446400789!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          <h2 className={styles.contact}> Connect With Us</h2>
          <form
            action="https://formspree.io/f/mrgdblrp"
            method="POST"
            className={styles.contact_form}
          >
            <label for="name">
              <b className={styles.input_label}>Username</b>
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              autoComplete="off"
              required
              className={styles.input_field}
            />
            <br></br>
            <label for="email">
              <b className={styles.input_label}>Email</b>
            </label>
            <br></br>
            <input
              type="email"
              placeholder="Enter Email.Id"
              name="uname"
              autoComplete="off"
              required
              className={styles.input_field}
            />
            <br></br>
            <label for="message">
              <b className={styles.input_label}>Enter your message-</b>
            </label>
            <br></br>
            <textarea
              type="text"
              name="message"
              autoComplete="off"
              required
              rows="6"
              cols="30"
              className={styles.input_area}
            ></textarea>
            <br></br>
            <input type="submit" value="Submit" className={styles.btn}></input>
          </form>
        </section>
      </>
    </div>
  );
};
export default Contactform;
