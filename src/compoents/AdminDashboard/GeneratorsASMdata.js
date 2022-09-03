//shi styling component

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Motorandpumpasmdata.css";

import "./admindashboardchangewala.css";
import { Link } from "react-router-dom";

export default function GeneratorASMdata() {
  const USERS = [
    {
      id: 1,
      tagnumber: "GS-300KVA-a",
      make: "VISA",
      model: "V315B",
      powerkva: 300,
      voltage: "400/231",
      ampere: 433,
      frequency: 50,
      serialnumber: 504601007,
      powerfactor: 0.8,
      enginemake: "Volvo-Penta",
      Model: "TAD1341GE",
      cylinder: 6,
      speedrpm: "1500",
      alternatormake: "Stamford",
      phases: "3P+N",
      sitetemp: 25,
      altitude: 100,
      weight: 2925,
      YearofManufacture: 2018,
    },
    {
      id: 2,
      tagnumber: "GS-300KVA-b",
      make: "VISA",
      model: "V315B",
      powerkva: 300,
      voltage: "400/231",
      ampere: 433,
      frequency: 50,
      serialnumber: 504601007,
      powerfactor: 0.8,
      enginemake: "Volvo-Penta",
      Model: "TAD1341GE",
      cylinder: 6,
      speedrpm: "1500",
      alternatormake: "Stamford",
      phases: "3P+N",
      sitetemp: 25,
      altitude: 100,
      weight: 2925,
      YearofManufacture: 2018,
    },
    {
      id: 3,
      tagnumber: "GS-300KVA-c",
      make: "VISA",
      model: "P105B",
      powerkva: 100,
      voltage: "400/230",
      ampere: 144,
      frequency: 50,
      serialnumber: 28956,
      powerfactor: 0.8,
      enginemake: "Perkins",
      Model: "1104C-44TAG2",
      cylinder: 4,
      speedrpm: "1500",
      alternatormake: "Stamford",
      phases: "3P+N",
      sitetemp: 25,
      altitude: 100,
      weight: 1075,
      YearofManufacture: 2017,
    },
  ];

  // the value of the search field
  const [tagnumber, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.tagnumber.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <>
      {/* <div className="divwala">
        <div class="sidebarrchangewala">
          <a class="active" href="#home">
            ADMIN PANEL
          </a>
          <Link to="/showusers">Show Users</Link>
          <Link to="/motorwork">Motor Work</Link>
          <Link to="/valvesview">Valves</Link>
          <Link to="/Gentable">Generators</Link>
          <Link to="/pdmetercard">PD Meters</Link>
          <Link to="/loadingarmscard">Loading Arms</Link>
          <Link to="/Tanksandpiplinescard">Tanks-and-pipelines</Link>
          <Link to="/modify">Modify Your Checklists</Link>
          <Link to="/history">See History</Link>
          <Link to="/ams">AMS</Link>
        </div>
      </div> */}
      <div>
        <div class="container">
          <div>
            <h5>Generators Data </h5>
          </div>
          <table className="striped centered ">
            <tbody>
              <div className="container">
                <input
                  type="search"
                  value={tagnumber}
                  onChange={filter}
                  className="input"
                  placeholder="Search Here"
                />

                <div className="user-list"></div>
              </div>
            </tbody>
          </table>

          <table class=" responsive-table centered highlight ">
            <thead id="headwala">
              <tr>
                <th>ID</th>
                <th className="redkrdo">ASSET NUMBER</th>
                <th>Make</th>
                <th>Model</th>
                <th>Power (kVA)</th>
                <th>Voltage (V)</th>
                <th>Ampere (A)</th>
                <th>Frequency (Hz)</th>
                <th>Serial Number</th>
                <th>Power Factor</th>
                <th>Engine Make</th>
                <th>model</th>
                <th>Cylinder</th>
                <th>Speed RPM</th>
                <th>Alternator Make</th>
                <th>Phases</th>
                <th>Site Temp. (C)</th>
                <th>Altitude (m)</th>
                <th>Weight (kg)</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.make}</td>
                    <td> {user.model}</td>
                    <td>{user.powerkva}</td>
                    <td>{user.voltage}</td>
                    <td> {user.ampere}</td>
                    <td> {user.frequency}</td>
                    <td> {user.serialnumber}</td>
                    <td>{user.powerfactor}</td>
                    <td>{user.enginemake}</td>
                    <td>{user.Model}</td>
                    <td>{user.cylinder}</td>
                    <td> {user.speedrpm}</td>
                    <td> {user.alternatormake}</td>
                    <td> {user.phases}</td>
                    <td> {user.sitetemp}</td>
                    <td> {user.altitude}</td>
                    <td> {user.weight}</td>
                    <td> {user.YearofManufacture}</td>
                  </tr>
                ))
              ) : (
                <h5>No results found!</h5>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="CalBut">
        <Link to="/ams">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </>
  );
}
