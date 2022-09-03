import axios from "axios";

import { Link } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";

export default function EquipmentFailuresShowing() {
  let [Sugges, SetSugges] = useState([]);
  let collapsible = useRef();
  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [Sugges]);
  useEffect(async () => {
    let resp = await axios.post("/EquipmentFailureForTheAdmin");
    console.log(resp.data);
    SetSugges(resp.data);
  }, []);

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Equipment Failures</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {Sugges.map((val) => {
          return (
            <li>
              <div class="collapsible-header">
                <i class="material-icons">warning</i>
                Subject : {val.Subject} &nbsp;&nbsp;&nbsp; Date: {val.Date}
                &nbsp;&nbsp;&nbsp; Action Was : {val.Action}
              </div>

              <div class="collapsible-body">
                <p>
                  Name : {val.Name} &nbsp;&nbsp;&nbsp; PhoneNo : {val.PhoneNo}
                </p>
                <p>Subject : {val.Subject}</p>
                <p>Equipment Code : {val.EquipmentNo}</p>
                <p>Comments : {val.Message}</p>
                <p>Action Was : {val.Action}</p>
                <p> Category : {val.Category}</p>
                <p> Date : {val.Date}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="CalBut">
        <Link to="/admin">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
