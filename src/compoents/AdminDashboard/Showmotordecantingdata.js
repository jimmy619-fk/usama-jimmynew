// import React from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import "./Selectmotorview.css";
export default function Showmotordecantingdata() {
  let [Data, SetData] = useState([]);

  useEffect(() => {
    axios
      .post("/showmsddata")
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
        <div className="leftwala">
          <div class="sidebarr" id="sidewala">
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
        </div>

        <div className="rightwala">
          <div class="contentt" id="para">
            <div>
              <div className="contentmotorwala">
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="hsd.png" alt="" />
                  </div>
                  <p className="title">MSD</p>
                  <Link to="/showmsddata">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">favorite_border</i> */}
                    <img src="psd.png" alt="" />
                  </div>
                  <p className="title">HSD</p>
                  <Link to="/showhsddata">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">favorite_border</i> */}
                    <img src="decanter.png" alt="" />
                  </div>
                  <p className="title">DECANTING</p>
                  <Link to="/showmotordecantingdata">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
              </div>
            </div>
            <div className="tablewala">
              <table className="striped centered">
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
                              <b>Type of Motor&Pump : {val.PumpCategory}</b>
                            </p>
                            <p>
                              <b>Motor&Pump Number(#): {val.PumpType}</b>
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
                          <th className="centerfirstrow">Name</th>
                          <th className="centerfirstrow">CRITERIA</th>
                          <th className="centerfirstrow">DESCRIPTION</th>
                        </tr>

                        {val.Anwer.map((abc) => {
                          console.log(abc);
                          return (
                            <tr>
                              <td className="col_name">{abc.Name}</td>
                              <td className="col_name">{abc.CRITERIA}</td>
                              <td className="col_name">{abc.Extra_info}</td>
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
                    <td>Complete History Showing</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="CalBut">
        <Link to="/motorwork">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
      {/* <div>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Rank</th>
              <th>Contact No</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {Data.map((val, indx) => {
              console.log(val);
              return (
                <tr key={indx}>
                  <td>{val.Name}</td>
                  <td>{val.Password}</td>
                  <td>{val.Rank}</td>
                  <td>{val.PhoneNo}</td>
                  <td>{val.Address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
