//shi styling component

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Motorandpumpasmdata.css";

import "./admindashboardchangewala.css";
import { Link } from "react-router-dom";

export default function FirepumpsASMdata() {
  const USERS = [
    {
      id: 1,
      tagnumber: "FS-FP-1",
      pumpsetno: "01",
      product: "Water",
      service: "Main Fire Pump",
      serialnnumber: "000960-01-01",
      pumpmake: "AC Fire Pump",
      model: "8100",
      Manufacturer: "Xylum",
      CapacityNominalGPM: "1250",
      pressure: "175",
      pumpsize: "8 x 6",
      suctiopressure: "10",
      dieselegiemake: "Clarke",
      Model: "JU6H-UF60",
      RPM: "2350",
      bhp: "240",
      rmprevmin: "1450",
      mainrelief: "6 inches/ 150# Flange/Make: CLA-VAL",
      maincontroller: "Make: Tornatech/ Model:GPD",
      flowmeter: "Make: Gerand/ Type:GRV/ Size:6 inches/ GPM:1250",
      automatic: "300Psi/ NPT: 3/4 inches",
      mufflersize: "5.00",
      current: "71",
      Batteries: "2 x lead acid",
      battryvolategs: "ANSI 150 # RF",
      yearofmaufacture: "2018",
    },
    {
      id: 2,
      tagnumber: "FS-FP-2",
      pumpsetno: "02",
      product: "Water",
      service: "Main Fire Pump",
      serialnnumber: "000960-01-02",
      pumpmake: "AC Fire Pump",
      model: "8100",
      Manufacturer: "Xylum",
      CapacityNominalGPM: "1250",
      pressure: "175",
      pumpsize: "8 x 6",
      suctiopressure: "10",
      dieselegiemake: "Clarke",
      Model: "JU6H-UF60",
      RPM: "2350",
      bhp: "240",
      rmprevmin: "1450",
      mainrelief: "6 inches/ 150# Flange/Make: CLA-VAL",
      maincontroller: "Make: Tornatech/ Model:GPD",
      flowmeter: "Make: Gerand/ Type:GRV/ Size:6 inches/ GPM:1250",
      automatic: "300Psi/ NPT: 3/4 inches",
      mufflersize: "5.00",
      current: "71",
      Batteries: "2 x lead acid",
      battryvolategs: "ANSI 150 # RF",
      yearofmaufacture: "2018",
    },
    // {
    //   id: 3,
    //   tagnumber: "#1ds",
    //   pumpsetno: "Loading Bay 1 & 2",
    //   product: "HSD",
    //   service: "T/L Loading",
    //   serialnnumber: "Top Loading",
    //   pumpmake: "4",
    //   model: "Shenzan Autoware Tech. Co.",
    //   PumpType: "AL 1402",
    //   CapacityNominalGPM: "OPW",
    //   pressure: "6429V-0402",
    //   motormake: "Fluorocarbon",
    //   RPM: "550",
    //   HP: "75psi/5.2bar",
    //   Hz: "250F/121C",
    //   Phase: "Spring Balancing Cylinder",
    //   Volts: "ANSI 150 # RF",
    //   rmprevmin: "ANSI 150 # RF",
    //   MainController: "ANSI 150 # RF",
    //   degreeofprotection: "ANSI 150 # RF",
    //   yearofmaufacture: "ANSI 150 # RF",
    // },
  ];
  const USERSB = [
    {
      id: 3,
      tagnumber: "FS-JP-3",
      pumpsetno: "03",
      product: "Water",
      service: "Jockey/ Line Pressurization",
      serialnnumber: "53A17Vb00",
      pumpmake: "Lowara",
      modelb: "33SV6",
      PumpType: "Single Head Pump",
      CapacityNominalGPM: "100",
      pressure: "182",
      motormake: "Lowara",
      RPM: "2900",
      HP: "20",
      Hz: "50",
      Phase: "3",
      Volts: "380",
      rmprevmin: "2950",
      MainControllerb: "Make: Tornatech/ Model:JP3",
      degreeofprotection: "IP 55",
      yearofmaufacture: "2018",
    },
  ];

  // the value of the search field
  const [tagnumber, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);
  //search result for usersB
  const [foundUsersb, setFoundUsersb] = useState(USERSB);

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

  const filterB = (e) => {
    const keywordb = e.target.value;

    if (keywordb !== "") {
      const resultsb = USERSB.filter((userb) => {
        return userb.tagnumber.toLowerCase().startsWith(keywordb.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(resultsb);
    } else {
      setFoundUsers(USERSB);
      // If the text field is empty, show all users
    }

    setName(keywordb);
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
            <h5>Firepumps Data</h5>
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
                <th>Pumpset No.</th>
                <th>Product</th>
                <th>Service</th>
                <th>Serial Number</th>
                <th>Pump Make</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Capacity Nominal (GPM)</th>
                <th>Pressure Rating (Psi)</th>
                <th>Pump Size(Inches)</th>
                <th>Suction Pressure (Psi)</th>
                <th>Diesel Engine Make</th>
                <th>Model</th>
                <th>RPM</th>
                <th>BHP (KW)</th>
                <th>RPM (rev/min)</th>
                <th>Main Relief Valve</th>
                <th>Main Controller</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.pumpsetno}</td>
                    <td> {user.product}</td>
                    <td>{user.service}</td>
                    <td>{user.serialnnumber}</td>
                    <td> {user.pumpmake}</td>
                    <td> {user.model}</td>
                    <td> {user.Manufacturer}</td>
                    <td>{user.CapacityNominalGPM}</td>
                    <td>{user.pressure}</td>
                    <td>{user.pumpsize}</td>
                    <td>{user.suctiopressure}</td>
                    <td> {user.dieselegiemake}</td>
                    <td> {user.Model}</td>
                    <td> {user.RPM}</td>
                    <td> {user.rmprevmin}</td>
                    <td> {user.bhp}</td>
                    <td> {user.mainrelief}</td>
                    <td> {user.maincontroller}</td>

                    <td> {user.yearofmaufacture}</td>
                  </tr>
                ))
              ) : (
                <h5>No results found!</h5>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div class="container">
          <table className="striped centered ">
            <tbody>
              <div className="container">
                {/* <input
                  type="search"
                  value={tagnumber}
                  onChange={filterB}
                  className="input"
                  placeholder="Search Here"
                /> */}

                <div className="user-list"></div>
              </div>
            </tbody>
          </table>
          <h5>DIESEL-TANK Data</h5>
          <table class=" responsive-table centered highlight ">
            <thead id="headwala">
              <tr>
                <th>ID</th>
                <th className="redkrdo">ASSET NUMBER</th>
                <th>Pumpset No.</th>
                <th>Product</th>
                <th>Service</th>
                <th>Serial Number</th>
                <th>Pump Make</th>
                <th>Model</th>
                <th>Pump Type</th>
                <th>Capacity Nominal (GPM)</th>
                <th>Pressure Rating (Psi)</th>
                <th>Motor Make</th>
                <th>RPM</th>
                <th>HP</th>
                <th>Hz</th>
                <th>Phase</th>
                <th>Volts</th>
                <th>RPM (rev/min)</th>
                <th>Main Controller</th>
                <th>Degree of Protection</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsersb && foundUsersb.length > 0 ? (
                foundUsersb.map((userb) => (
                  <tr key={userb.id}>
                    <td>{userb.id}</td>
                    <td className="redkrdo">{userb.tagnumber}</td>
                    <td>{userb.pumpsetno}</td>
                    <td> {userb.product}</td>
                    <td>{userb.service}</td>
                    <td>{userb.serialnnumber}</td>
                    <td> {userb.pumpmake}</td>
                    <td> {userb.modelb}</td>
                    <td> {userb.PumpType}</td>
                    <td>{userb.CapacityNominalGPM}</td>
                    <td>{userb.pressure}</td>
                    <td>{userb.motormake}</td>
                    <td>{userb.RPM}</td>
                    <td> {userb.HP}</td>
                    <td> {userb.Hz}</td>
                    <td> {userb.Phase}</td>
                    <td> {userb.Volts}</td>
                    <td> {userb.rmprevmin}</td>
                    <td> {userb.MainControllerb}</td>
                    <td> {userb.degreeofprotection}</td>

                    <td> {userb.yearofmaufacture}</td>
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
