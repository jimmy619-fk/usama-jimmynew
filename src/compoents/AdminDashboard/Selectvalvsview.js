//shi styling component
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Valvestable.css";

import M from "materialize-css";

export default function Selectvalvesview() {
  let formRef = useRef();
  let [Data, SetData] = useState([]);

  useEffect(() => {
    axios
      .post("/showValvedata")
      .then((xyz) => {
        SetData(xyz.data);
        console.log(xyz.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div className="divwala">
        <div class="sidebarr">
          <Link to="/admin" class="active">
            ADMIN PANEL
          </Link>

          <Link to="/motorwork">Motor Work</Link>
          <Link to="/valvesmsddata">Valves</Link>
          <Link to="/gendata">Generators</Link>
          <Link to="/pdmeterdata">PD Meters</Link>
          <Link to="/loadingarmsdata">Loading Arms</Link>
          <Link to="/tanksandpipelinesdata">Tanks-and-pipelines</Link>
          <Link to="/firepumpdata">Fire pumps</Link>
        </div>

        <div class="contentt">
          <div>
            <div className="contentvalvescard">
              {/* card */}
              <div className="cardhsdmsd">
                <div className="icon">
                  {/* <i className="material-icons md-36">face</i> */}
                  <img src="valves.png" alt="" />
                </div>
                <p className="title">Valves</p>
                <Link to="/valvesmsddata">
                  {" "}
                  <p className="text">CLICK TO SELECT</p>
                </Link>
              </div>
              {/* end card */}
              {/* card */}
              {/* <div className="cardhsdmsd">
                <div className="icon">
                
                  <img src="psd.png" alt="" />
                </div>
                <p className="title">HSD</p>
                <Link to="/valveshsddata">
                
                  <p className="text">CLICK TO SELECT</p>
                </Link>
              </div> */}
              {/* end card */}
              {/* card */}
            </div>
          </div>
          {/* <table className="striped centered">
            <tbody>
              {Data.map((val) => {
                console.log(val);
                return (
                  <>
                    <tr className="#00c853 green accent-4">
                      <td>
                        <p>
                          <b>Category of Equipment : {val.Type}</b>
                        </p>

                        <p>
                          <b>Valve Number(#): {val.PumpType}</b>
                        </p>
                        <p>
                          <b>Submitted Person : {val.SubmittedBy}</b>
                        </p>
                        <p>
                          <b>Submitting Time: {val.SubmittedTime}</b>
                        </p>
                      </td>
                      <td colspan="2">
                        <b>Main Box Message</b>
                        <p>{val.MainMessage}</p>
                      </td>
                    </tr>

                    <tr>
                      <th>Name</th>
                      <th>CRITERIA</th>
                      <th>Rank</th>
                    </tr>

                    {val.Anwer.map((abc) => {
                      console.log(abc);
                      return (
                        <tr>
                          <td>{abc.Name}</td>
                          <td>{abc.CRITERIA}</td>
                          <td>{abc.Extra_info}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
            <tfoot className="#69f0ae green accent-2">
              <tr>
                <td></td>
                <td>Successfully Complete</td>
                <td></td>
              </tr>
            </tfoot>
          </table> */}
        </div>
      </div>
      <form>
        <div>
          {/* <table className="striped centered">
            <tbody>
              {Data.map((val) => {
                console.log(val);
                return (
                  <>
                    <tr className="#00c853 green accent-4">
                      <td>
                        <p>
                          <b>Category of Equipment : {val.Type}</b>
                        </p>

                        <p>
                          <b>Valve Number(#): {val.PumpType}</b>
                        </p>
                        <p>
                          <b>Submitted Person : {val.SubmittedBy}</b>
                        </p>
                        <p>
                          <b>Submitting Time: {val.SubmittedTime}</b>
                        </p>
                      </td>
                      <td colspan="2">
                        <b>Main Box Message</b>
                        <p>{val.MainMessage}</p>
                      </td>
                    </tr>

                    <tr>
                      <th>Name</th>
                      <th>CRITERIA</th>
                      <th>Rank</th>
                    </tr>

                    {val.Anwer.map((abc) => {
                      console.log(abc);
                      return (
                        <tr>
                          <td>{abc.Name}</td>
                          <td>{abc.CRITERIA}</td>
                          <td>{abc.Extra_info}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
            <tfoot className="#69f0ae green accent-2">
              <tr>
                <td></td>
                <td>Successfully Complete</td>
                <td></td>
              </tr>
            </tfoot>
          </table> */}
        </div>
      </form>
      <div className="CalBut">
        <Link to="/admin">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </>
  );
}
