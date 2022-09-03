//shi styling component
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TanksASMdata.css";

import "./admindashboardchangewala.css";

import M from "materialize-css";
import { Table } from "react-materialize";

export default function TanksASMdata() {
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

  const USERS = [
    {
      id: 1,
      tagnumber: "TZ-HSD-1",
      product: "HSD",
      DIAMETERmeters: 18.288,
      HEIGHTmeters: 18.5,
      MAXCAPACITYCuMETERS: 4860.1,
      MAXCAPACITYLiters: 4780000,
      MAXCAPACITYMetricTons: 4001.0,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.85,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 4656221,
      SAFEFILLINGCAPACITYMetricTons: "3897.40",
      YEAROFMANUFACTURE: 2018,
    },

    {
      id: 2,
      tagnumber: "TZ-HSD-2",
      product: "HSD",
      DIAMETERmeters: 18.288,
      HEIGHTmeters: 18.5,
      MAXCAPACITYCuMETERS: 4860.1,
      MAXCAPACITYLiters: 4780000,
      MAXCAPACITYMetricTons: 4001.0,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.85,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 4656221,
      SAFEFILLINGCAPACITYMetricTons: "3897.40",
      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 3,
      tagnumber: "TZ-HSD-3",
      product: "HSD",
      DIAMETERmeters: 11.25,
      HEIGHTmeters: 12,
      MAXCAPACITYCuMETERS: 1192.9,
      MAXCAPACITYLiters: 1195000,
      MAXCAPACITYMetricTons: 1000.25,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.85,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 1145952,
      SAFEFILLINGCAPACITYMetricTons: "959.20",
      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 4,
      tagnumber: "TZ-HSD-4",
      product: "HSD",
      DIAMETERmeters: 18.288,
      HEIGHTmeters: 18.5,
      MAXCAPACITYCuMETERS: 4860.1,
      MAXCAPACITYLiters: 4780000,
      MAXCAPACITYMetricTons: 4001.0,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.85,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 4656221,
      SAFEFILLINGCAPACITYMetricTons: "3897.40",
      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 5,
      tagnumber: "TZ-PMG-5",
      product: "PMG",
      DIAMETERmeters: 26,
      HEIGHTmeters: 18.5,
      MAXCAPACITYCuMETERS: 9823.4,
      MAXCAPACITYLiters: 9920700,
      MAXCAPACITYMetricTons: 7300,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.75,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 9464308,
      SAFEFILLINGCAPACITYMetricTons: "6964.17",
      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 6,
      tagnumber: "TZ-PMG-5",
      product: "PMG",
      DIAMETERmeters: 26,
      HEIGHTmeters: 18.5,
      MAXCAPACITYCuMETERS: 9823.4,
      MAXCAPACITYLiters: 9920700,
      MAXCAPACITYMetricTons: 7300,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 0.75,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 9464308,
      SAFEFILLINGCAPACITYMetricTons: "6964.17",
      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 7,
      tagnumber: "#677",
      product: "FIRE WATER",
      DIAMETERmeters: 9.144,
      HEIGHTmeters: 8,
      MAXCAPACITYCuMETERS: 525.4,
      MAXCAPACITYLiters: 500000,
      MAXCAPACITYMetricTons: 500,
      STANDARD: "API650",
      PRESSURERATING: "ATMOSPHERIC",
      SPECIFICGRAVITY: 1.0,
      TEMPERATURE: "50-60C°",
      SAFEFILLINGCAPACITYLiters: 498000,
      SAFEFILLINGCAPACITYMetricTons: "498.00",
      YEAROFMANUFACTURE: 2018,
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
            <h5>Tanks Data </h5>
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
                <th>DIAMETER (meters)</th>
                <th>HEIGHT (meters)</th>
                <th>MAX CAPACITY(Cu.METERS)</th>
                <th> MAX CAPACITY(Liters)</th>
                <th>MAX CAPACITY(Metric Tons)</th>
                <th>STANDARD</th>
                <th>PRESSURE RATING</th>
                <th>SPECIFIC GRAVITY</th>
                <th>TEMPERATURE</th>
                <th>SAFE FILLING CAPACITY(Liters)</th>
                <th>SAFE FILLING CAPACITY (Metric Tons)</th>
                <th>YEAR OF MANUFACTURE</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.product}</td>
                    <td> {user.DIAMETERmeters}</td>
                    <td>{user.HEIGHTmeters}</td>
                    <td>{user.MAXCAPACITYCuMETERS}</td>
                    <td> {user.MAXCAPACITYLiters}</td>
                    <td> {user.MAXCAPACITYMetricTons}</td>
                    <td> {user.STANDARD}</td>
                    <td>{user.PRESSURERATING}</td>
                    <td>{user.SPECIFICGRAVITY}</td>
                    <td>{user.TEMPERATURE}</td>
                    <td>{user.SAFEFILLINGCAPACITYLiters}</td>
                    <td> {user.SAFEFILLINGCAPACITYMetricTons}</td>
                    <td> {user.YEAROFMANUFACTURE}</td>
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
