import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";

export default function Aboutus() {
  return (
    <>
      <div className="fullabout" id="mainaboutus">
        <div class="sectionn">
          <div class="containerr">
            <div class="content-section">
              <div class="titlee">
                <h1>About Us</h1>
              </div>
              <div class="contentabout">
                <h3>
                  Fossil Energy (Private) Limited, (FEPL) was incorporated in
                  Pakistan as a private limited company in 2013.
                </h3>
                <p>
                  FEPL’s mission is to make a long-term difference in our
                  industry and our areas of Operations and earn the trust of our
                  partners.
                </p>
                <div class="button">
                  <a href="https://fossilpk.com/gatti/" target="_blank">
                    Read More
                  </a>
                </div>
              </div>
              <div class="social">
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="image-section">
              <img src="about.jpg" />
            </div>
          </div>
        </div>
        <div className="CalBut">
          <Link to="/typemaintainance">
            {/* <img src="/calculator.png" /> */}
            {/* <img src="budget.png" /> */}
            <img src="home.png" />
          </Link>
        </div>
      </div>
    </>
  );
}
