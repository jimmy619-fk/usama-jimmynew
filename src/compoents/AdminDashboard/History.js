import React from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
import "./Selectmotorview.css";
export default function Historydata() {
  return (
    <>
      <div className="divwala">
        <div className="leftwala">
          <div class="sidebarr" id="amsside">
            <Link to="/admin" class="active" >
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
          <div class="contentt" id="contentams">
            <div className="pathwalahissa">
              <h5>Select Equipment To View Complete History Of Checklists</h5>
            </div>
            <div>
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              />
              {/* about */}

              {/* end about */}
              <div className="contentmotorwala">
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="historymotor.png" alt="" />
                  </div>
                  <p className="title">Motor and pump</p>
                  <Link to="/showmotorandpumphistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="water-tank.png" alt="" />
                  </div>
                  <p className="title">Tanks-and-pipelines </p>
                  <Link to="/showtankandpipelineshistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="valves.png" alt="" />
                  </div>
                  <p className="title">Valves</p>
                  <Link to="/showvalveshistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}

                {/* end card */}
                {/* card */}

                {/* end card */}
                {/* card */}
              </div>
              <div className="contentmotorwala">
                {/* card */}

                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="genn.png" alt="" />
                  </div>
                  <p className="title">Generators </p>
                  <Link to="/showgeneratorhistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="pdmetersss.png" alt="" />
                  </div>
                  <p className="title">PD Meters </p>
                  <Link to="/showpdmeterhistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="pickup-truckkk.png" alt="" />
                  </div>
                  <p className="title">Loading Arms </p>
                  <Link to="/showloadingarmhistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                <div className="cardhsdmsd">
                  <div className="icon">
                    {/* <i className="material-icons md-36">face</i> */}
                    <img src="firesmall.png" alt="" />
                  </div>
                  <p className="title">Fire pumps </p>
                  <Link to="/showfirepumpshistory">
                    {" "}
                    <p className="text">CLICK TO SELECT</p>
                  </Link>
                </div>
                {/* end card */}
                {/* card */}
              </div>
            </div>
          </div>
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
