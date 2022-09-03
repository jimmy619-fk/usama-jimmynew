//shi styling component

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Motorandpumpasmdata.css";

import "./admindashboardchangewala.css";
import { Link } from "react-router-dom";

export default function MotorandpumpsASMdata() {
  const USERS = [
    {
      id: 1,
      tagnumber: "PS-HSD-1",
      product: "HSD",
      Service: "Loading",
      SerialNumber: "YI11805230106",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ100-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 44,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1475",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 2,
      tagnumber: "PS-HSD-2",
      product: "HSD",
      Service: "Loading",
      SerialNumber: "YI11805230107",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ100-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 44,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1475",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 3,
      tagnumber: "PS-HSD-3",
      product: "HSD",
      Service: "Loading",
      SerialNumber: "YI11805230108",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ100-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 44,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1475",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 4,
      tagnumber: "PS-HSD-4",
      product: "HSD",
      Service: "Loading",
      SerialNumber: "YI11805230109",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ100-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 44,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1475",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 5,
      tagnumber: "PS-HSD-5",
      product: "HSD",
      Service: "Loading",
      SerialNumber: "YI11805230110",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 44,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1475",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 6,
      tagnumber: "PS-PMG-1",
      product: "MS",
      Service: "Loading",
      SerialNumber: "YI11805230101",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 49,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1450",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 7,
      tagnumber: "PS-PMG-2",
      product: "MS",
      Service: "Loading",
      SerialNumber: "YI11805230102",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 125,
      Headm: 49,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1450",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 8,
      tagnumber: "PS-PMG-3",
      product: "MS",
      Service: "Loading",
      SerialNumber: "YI11805230103",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 102,
      Headm: 49,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1450",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 9,
      tagnumber: "PS-PMG-4",
      product: "MS",
      Service: "Loading",
      SerialNumber: "YI11805230104",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 102,
      Headm: 49,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1450",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 10,
      tagnumber: "PS-PMG-5",
      product: "MS",
      Service: "Loading",
      SerialNumber: "YI11805230105",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/100",
      Capacitym3h: 5.7,
      Headm: 49,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 37,
      RPMrevmin: "1450",
      VoltageVolts: "380/660",
      YearofManufacture: 2018,
    },
    {
      id: 11,
      tagnumber: "DP-HSD-1",
      product: "HSD",
      Service: "Unloading",
      SerialNumber: "YI11805230111",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ 80-400B",
      InletOutletmm: "125/80",
      Capacitym3h: 5.7,
      Headm: 40,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 30,
      RPMrevmin: "1450",
      VoltageVolts: "380",
      YearofManufacture: 2018,
    },
    {
      id: 12,
      tagnumber: "DP-PMG-1",
      product: "MS",
      Service: "Unloading",
      SerialNumber: "LQCZ 80-400B",
      PumpMake: "Yonjou",
      PumpModel: "LQCZ100-400B",
      InletOutletmm: "125/80",
      Capacitym3h: "API650",
      Headm: 45,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 30,
      RPMrevmin: "1470",
      VoltageVolts: "380",
      YearofManufacture: 2018,
    },
    {
      id: 13,
      tagnumber: "OWS-PR-1",
      product: "API Separator",
      Service: "Product Recovery",
      SerialNumber: "YI1110201",
      PumpMake: "Yonjou",
      PumpModel: "LOCZ 32-250B",
      InletOutletmm: "50/32",
      Capacitym3h: "API650",
      Headm: 21,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 55",
      PowerKW: 2.2,
      RPMrevmin: "1435",
      VoltageVolts: "380",
      YearofManufacture: 2018,
    },
    {
      id: 14,
      tagnumber: "N/A",
      product: "API Separator",
      Service: "Product Recovery",
      SerialNumber: "YI1110203",
      PumpMake: "Yonjou",
      PumpModel: "LOCZ 32-250B",
      InletOutletmm: "50/33",
      Capacitym3h: "API650",
      Headm: 21,
      MotorType: "FlameProof(Ex) 3 Phase Asyncronization",
      IPRating: "IP 56",
      PowerKW: 2.2,
      RPMrevmin: "1435",
      VoltageVolts: "380",
      YearofManufacture: 2018,
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
            <h5>Motors & Pumps Data </h5>
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
                <th>PRODUCT</th>
                <th>Service</th>
                <th>Serial Number</th>
                <th>Pump Make</th>
                <th>Pump Model</th>
                <th>Inlet/Outlet (mm)</th>
                <th>Capacity (m3/h)</th>
                <th>Head (m)</th>
                <th>MotorType </th>
                <th>IP Rating</th>
                <th>Power (KW)</th>
                <th>RPM (rev/min)</th>
                <th>Voltage (Volts)</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.product}</td>
                    <td> {user.Service}</td>
                    <td>{user.SerialNumber}</td>
                    <td>{user.PumpMake}</td>
                    <td> {user.PumpModel}</td>
                    <td> {user.InletOutletmm}</td>
                    <td> {user.Capacitym3h}</td>
                    <td>{user.Headm}</td>
                    <td>{user.MotorType}</td>
                    <td>{user.IPRating}</td>
                    <td>{user.PowerKW}</td>
                    <td> {user.RPMrevmin}</td>
                    <td> {user.VoltageVolts}</td>
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
