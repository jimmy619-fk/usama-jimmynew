import axios from "axios";
import React, { useEffect, useState } from "react";
import "./admindashboard.css";
import "./modifywalistylig.css";
import { Link } from "react-router-dom";

export function Modifypage() {
  // let [Data, SetData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .post("/admin")
  //     .then((xyz) => {
  //       console.log(xyz);
  //       SetData(xyz.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  return (
    <>
      <div className="divwala">
        <div className="leftwala">
          <div class="sidebarr" id="sideke">
            <Link to="/admin" class="active">
              ADMIN PANEL
            </Link>

            <Link to="/modifymotorandpump">Modify Motor Work</Link>
            <Link to="/modifyvalves">Modify Valves</Link>
            <Link to="/modifygen">Modify Generators</Link>
            <Link to="/modifypdmeter">Modify PD Meters</Link>
            <Link to="/modifyloadingarms">Modify Loading Arms</Link>

            <Link to="/modifytanksandpipelines">
              Modify Tanks-and-pipelines
            </Link>
            <Link to="/modifyfirepump">Modify Fire pumps</Link>
          </div>
        </div>

        <div class="contentt example" id="conntetkee">
          {/* <table className="striped">
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
          </table> */}
        </div>
      </div>
      <div className="CalBut">
        <Link to="/admin">
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
