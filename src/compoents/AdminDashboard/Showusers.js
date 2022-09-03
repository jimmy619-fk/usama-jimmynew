import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-materialize";
import { Link } from "react-router-dom";
import "./admindashboard.css";

export default function Showusers() {
  let [Data, SetData] = useState([]);

  useEffect(() => {
    axios
      .post("/admin")
      .then((xyz) => {
        console.log(xyz.data);
        SetData(xyz.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  async function MYfun(event) {
    console.log(event.target.value);

    Data = [...Data];
    Data[Number(event.target.value)].Allow = event.target.checked;
    console.log(Data[Number(event.target.value)]);
    await axios
      .post("/ChangingUserAuthorization", {
        Power: Data[Number(event.target.value)],
      })
      .then((res) => {});
    SetData(Data);
  }

  return (
    <>
      <div className="divwala">
        <div class="sidebarr" id="amsside">
          <Link to="/admin" class="active">
            ADMIN PANEL
          </Link>
          <Link to="/showusers">Show Users</Link>
          <Link to="/motorwork">Motor Work</Link>
          <Link to="/valvesview">Valves</Link>
          <Link to="/Gentable">Generators</Link>
          <Link to="/pdmetercard">PD Meters</Link>
          <Link to="/loadingarmscard">Loading Arms</Link>
          <Link to="/Tanksandpiplinescard">Tanks-and-pipelines</Link>
          <Link to="/firepumpdata">Fire pumps</Link>
        </div>

        <div class="contentt"  id="contentams">
          <div className="createwalbtnha">
            <Link to="/Create">
              <Button className="create_user">Create User</Button>
            </Link>
          </div>
          <table className="striped centered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Rank</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Authorize</th>
              </tr>
            </thead>

            <tbody>
              {Data.map((val, indx) => {
                return (
                  <tr key={indx}>
                    <td>{val.Name}</td>
                    <td>{val.Role}</td>
                    <td>{val.Rank}</td>
                    <td>{val.PhoneNo}</td>
                    <td>{val.Address}</td>
                    <td>
                      <div>
                        <div class="switch">
                          <label>
                            Off
                            <input
                              checked={val.Allow}
                              onClick={MYfun}
                              value={indx}
                              type="checkbox"
                            />
                            <span class="lever"></span>
                            On
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <div className="createwalbtnha">
            <Link to="/Create">
              <Button className="create_user">Create User</Button>
            </Link>
          </div> */}
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
    </>
  );
}
