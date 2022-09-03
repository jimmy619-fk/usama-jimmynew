import React from "react";
import "./contactus.css";

export default function Contactus() {
  return (
    <div className="fullbody" id="contactus">
      <div className="innerwala">
        <h1 className="h1wali">CONTACT US</h1>
        <form class="cf" className="formm">
          <div class="half left cf">
            <input type="text" id="input-name" placeholder="Name" />
            <input type="email" id="input-email" placeholder="Email address" />
            <input type="text" id="input-subject" placeholder="Subject" />
          </div>
          <div class="half right cf">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="SUBMIT" id="input-submit" />
        </form>
      </div>
    </div>
  );
}
