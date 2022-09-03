import React from "react";
import "./equipments2.css";
import { Link } from "react-router-dom";

export default function Equipments2() {
  return (
    <div>
      <body className="bodycards">
        <section>
          <div class="container" id="cards">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="motor.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    MOTOR & Pump <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/motorms">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="gen.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    Generators
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/Generatorquestions">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="valve.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    VALVES
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/Valvestable">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* second row */}
          <div class="container" id="cards">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="meter.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    PD METERS <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/pdmeter">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="pickup-truck.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    Loading Arms
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/loadingarms">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="storage-tank.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    tanks and pipelines
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/tanksandpipelines">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="pump.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    Fire Pump
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/firepumpchecklistt">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
            {/* <div class="card" id="modifywala">
              <div class="content ">
                <div class="imgBx">
                  <img src="edit.png" />
                </div>
                <div class="contentBx">
                  <h3 id="modifywala_ka_text">
                    MODIFY YOUR CHECKLISTS
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/modify" id="modifywala_ka_text_select">
                    CLICK TO SELECT
                  </Link>
                </li>
              </ul>
            </div> */}
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
