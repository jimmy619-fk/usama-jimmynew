//shi styling component

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Motorandpumpasmdata.css";

import "./admindashboardchangewala.css";
import { Link } from "react-router-dom";

export default function PdmeterASMdata() {
  const USERS = [
    {
      id: 1,
      tagnumber: "PD-PMG-1",
      metero: "01",
      Location: "Metering Shed/PMG 1",
      SerialNumber: "243-8547",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 2,
      tagnumber: "PD-PMG-2",
      metero: "02",
      Location: "Metering Shed/PMG 2",
      SerialNumber: "243-8548",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 3,
      tagnumber: "PD-PMG-3",
      metero: "03",
      Location: "Metering Shed/PMG 3",
      SerialNumber: "243-8545",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 4,
      tagnumber: "PD-PMG-4",
      metero: "04",
      Location: "Metering Shed/PMG 4",
      SerialNumber: "243-8552",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 5,
      tagnumber: "PD-PMG-5",
      metero: "05",
      Location: "Metering Shed/PMG 5",
      SerialNumber: "243-8549",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 6,
      tagnumber: "PD-HSD-1",
      metero: "06",
      Location: "Metering Shed/HSD 1",
      SerialNumber: "243-8553",
      Product: "HSD",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 7,
      tagnumber: "PD-HSD-2",
      metero: "07",
      Location: "Metering Shed/HSD 2",
      SerialNumber: "243-8550",
      Product: "HSD",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 8,
      tagnumber: "PD-HSD-3",
      metero: "08",
      Location: "Metering Shed/HSD 3",
      SerialNumber: "243-8544",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150      ",
      maxtemp: 60,
      Gaskets: "Teflon      ",
      Current: "60mA      ",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 9,
      tagnumber: "PD-HSD-4",
      metero: "09",
      Location: "Metering Shed/HSD 4",
      SerialNumber: "243-8551",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150",
      maxtemp: 60,
      Gaskets: "Teflon",
      Current: "60mA",
      Voltage: "10-26 VDC",
      YearofManufacture: 2018,
    },
    {
      id: 10,
      tagnumber: "PD-HSD-5",
      metero: "10",
      Location: "Metering Shed/HSD 5",
      SerialNumber: "243-8546",
      Product: "PMG",
      Make: "Petrol Instruments -  Italy",
      Model: "FA24-P-C5",
      Type: "Double Case PD",
      MaximumFlowRateUsgpm: 8805.7,
      FlangeConnection: "4 ANSI 150 RF",
      MaxPressurePsig: "150      ",
      maxtemp: 60,
      Gaskets: "Teflon      ",
      Current: "60mA      ",
      Voltage: "10-26 VDC",
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
            <h5>Pd-meters Data </h5>
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
                <th>Meter No.</th>
                <th>Location</th>
                <th>Serial Number</th>
                <th>Product</th>
                <th>Make</th>
                <th>Model</th>
                <th>Type</th>
                <th>Maximum Flow Rate (Usgpm/ cu.m. per hr)</th>
                <th>Flange Connection</th>
                <th>Max. Pressure (Psig)</th>
                <th>Max. Temp. ( C° )</th>
                <th>Gaskets</th>
                <th>Current</th>
                <th>Voltage</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.metero}</td>
                    <td> {user.Location}</td>
                    <td>{user.SerialNumber}</td>
                    <td>{user.Product}</td>
                    <td> {user.Make}</td>
                    <td> {user.Model}</td>
                    <td> {user.Type}</td>
                    <td>{user.MaximumFlowRateUsgpm}</td>

                    <td> {user.FlangeConnection}</td>
                    <td> {user.MaxPressurePsig}</td>
                    <td> {user.maxtemp}</td>
                    <td> {user.Gaskets}</td>
                    <td> {user.Current}</td>
                    <td> {user.Voltage}</td>
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
