import React from "react";
import { Link } from "react-router-dom";
import "./RuntoFailures.css";
export default function RuntoFailures() {
  return (
    <div className="">
      {/* <Link to="/Suggestion">
        <div class="card blue-grey darken-1 CardRun">
          <div class="card-content white-text TopSetting">
            <img src="/discussion.png" />
          </div>

          <div class="card-content white-text">
            <p>Suggestion and Feedback are Welcome</p>
          </div>
        </div>
      </Link>
      <Link to="/Failure">
        <div class="card blue-grey darken-1 CardRun">
          <div class="card-content white-text TopSetting">
            <img src="/failure.png" />
          </div>
          <div class="card-content white-text">
            <p>Equipment Failure & Important Messages</p>
          </div>
        </div>
      </Link> */}
      <body className="bodycards" id="aboutus">
        <section>
          <div class="container" id="cards">
            <Link to="/Suggestion">
              <div class="card">
                <div class="content">
                  <div class="">
                    <img src="idea.png" />
                  </div>
                  <div class="contentBx">
                    <h3>
                      Suggestion
                      <br />
                    </h3>
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <Link to="/Suggestion">CLICK TO SELECT</Link>
                  </li>
                </ul>
              </div>
            </Link>
            <Link to="/Failure">
              <div class="card">
                <div class="content">
                  <div class="">
                    <img src="system.png" />
                  </div>
                  <div class="contentBx">
                    <h3>
                      Equipment Failure
                      <br />
                    </h3>
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <Link to="/Failure">CLICK TO SELECT</Link>
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
