//shi styling component

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Motorandpumpasmdata.css";

import "./admindashboardchangewala.css";
import { Link } from "react-router-dom";

export default function LoadingarmsASMdata() {
  const USERS = [
    {
      id: 1,
      tagnumber: "#1ds",
      location: "Loading Bay 1 & 2",
      product: "HSD",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 2,
      tagnumber: "#da6",
      location: "Loading Bay 1 & 2",
      product: "MS",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 3,
      tagnumber: "#aty",
      location: "Loading Bay 3 & 4",
      product: "HSD",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 4,
      tagnumber: "#dq9",
      location: "Loading Bay 3 & 4",
      product: "MS",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 5,
      tagnumber: "#di7",
      location: "Loading Bay 5 & 6",
      product: "HSD",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 6,
      tagnumber: "#9d8",
      location: "Loading Bay 5 & 6",
      product: "MS",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 7,
      tagnumber: "#sf7",
      location: "Loading Bay 7 & 8",
      product: "HSD",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 8,
      tagnumber: "#dg7",
      location: "Loading Bay 7 & 8",
      product: "MS",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 9,
      tagnumber: "#2jd",
      location: "Loading Bay 9 & 10",
      product: "HSD",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
    },
    {
      id: 10,
      tagnumber: "#9dh",
      location: "Loading Bay 9 & 10",
      product: "MS",
      service: "T/L Loading",
      type: "Top Loading",
      size: "4",
      make: "Shenzan Autoware Tech. Co.",
      model: "AL 1402",
      loadingvalvemake: "OPW",
      loadingvalvemodel: "6429V-0402",
      loadingvalveseal: "Fluorocarbon",
      flowrate: "550",
      maxworkingpressure: "75psi/5.2bar",
      maxtemp: "250F/121C",
      armcounterbalance: "Spring Balancing Cylinder",
      flangerating: "ANSI 150 # RF",
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
            <h5>Loading-Arms Data </h5>
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
                <th>Location</th>
                <th>Product</th>
                <th>Service</th>
                <th>Type</th>
                <th>Size (inch)</th>
                <th>Make</th>
                <th>Model</th>
                <th>Loading Valve Make</th>
                <th>Loading Valve Model</th>
                <th>Loading Valve Seal</th>
                <th>Flow Rate(US GPM)</th>
                <th>Maximum Working Pressure</th>
                <th>Maximum Temperature</th>
                <th>Arm Counter Balance</th>
                <th>Flange Rating</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.location}</td>
                    <td> {user.product}</td>
                    <td>{user.service}</td>
                    <td>{user.type}</td>
                    <td> {user.size}</td>
                    <td> {user.make}</td>
                    <td> {user.model}</td>
                    <td>{user.loadingvalvemake}</td>
                    <td>{user.loadingvalvemodel}</td>
                    <td>{user.loadingvalveseal}</td>
                    <td>{user.flowrate}</td>
                    <td> {user.maxworkingpressure}</td>
                    <td> {user.maxtemp}</td>
                    <td> {user.armcounterbalance}</td>
                    <td> {user.flangerating}</td>
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
