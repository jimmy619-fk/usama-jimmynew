import React from "react";
import { Link } from "react-router-dom";
import "./calculatroo.css";
export default function CalculatorCard() {
  return (
    <div className="">
      {/* <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="/greasing.png" id="grease__first_img" />
        </div>
        <div class="card-content ">
          <span class="card-title activator grey-text text-darken-4">
            Greasing time Calculation
            <i class="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/greasingcal">
              <a className="iconSettingg">Go</a>
              <i className="material-icons">send</i>
            </Link>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            Greasing time Calculation<i class="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-image waves-effect waves-block waves-light Card2Setting">
          <img class="activator " src="/cal4.png" />
        </div>
        <div class="card-content TextSetting">
          <span class="card-title activator grey-text text-darken-4">
            Greasing Volume in Ounces
            <i class="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/ouncing">
              <a className="iconSettingg">Go</a>
              <i className="material-icons">send</i>
            </Link>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            Greasing Volume in Ounces Calculation
            <i class="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div> */}

      <body className="bodycards" id="aboutus">
        <section>
          <div class="container" id="cards">
            <Link to="/greasingcal">
              <div class="card">
                <div class="content">
                  <div class="">
                    <img src="car-oil.png" />
                  </div>
                  <div class="contentBx">
                    <h3>
                      Greasing time Calculation
                      <br />
                    </h3>
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <Link to="/greasingcal">CLICK TO SELECT</Link>
                  </li>
                </ul>
              </div>
            </Link>
            <Link to="/ouncing">
              <div class="card">
                <div class="content">
                  <div class="">
                    <img src="vol.png" />
                  </div>
                  <div class="contentBx">
                    <h3>
                      Greasing Volume
                      <br />
                    </h3>
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <Link to="/ouncing">CLICK TO SELECT</Link>
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </section>
      </body>
      <div className="CalBut">
        <Link to="/typemaintainance">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
