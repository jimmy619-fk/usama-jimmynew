import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
export default function AdminSuggestionShowing() {
  let [Sugges, SetSugges] = useState([]);
  let collapsible = useRef();
  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [Sugges]);
  useEffect(async () => {
    let resp = await axios.post("/SuggestionForTheAdmin");
    // console.log(resp.data);
    SetSugges(resp.data);
  }, []);

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Feedback & Suggestions</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {Sugges.map((val) => {
          return (
            <li>
              <div class="collapsible-header">
                <i class="material-icons">info</i>
                {val.Subject} &nbsp;&nbsp;&nbsp;{val.Date}
              </div>

              <div class="collapsible-body">
                <p>
                  Name : {val.Name} &nbsp;&nbsp;&nbsp;{val.PhoneNo}{" "}
                </p>
                <p>Email : {val.Email}</p>
                <p>{val.Message}</p>
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
