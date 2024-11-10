import Navbar from "../components/Navbar";
import React from "react";

export default function Contact() {
  return (
    <>
      <Navbar/>
      <section className="main1">

  <h1 className="contact">Contact us</h1>

  <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
           
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
           
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
          
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      
    </section>
  
      
        
    </>
  );
}
