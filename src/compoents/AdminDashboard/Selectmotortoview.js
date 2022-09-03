import React from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
import "./Selectmotorview.css";
export default function Selectmotortoview() {
  return (
    <>
      <div className="divwala">
        <div className="leftwala">
          <div class="sidebarr">
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
          <div class="contentt">
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
