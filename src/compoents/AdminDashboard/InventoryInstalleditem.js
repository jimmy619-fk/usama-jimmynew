import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";

export default function InventoryInstalleditem() {
  let [Sugges, SetSugges] = useState([]);
  let collapsible = useRef();
  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [Sugges]);

  useEffect(async () => {
    let resp = await axios.post("/FindingAllInventoryitemInstalled");
    console.log(resp.data);
    SetSugges(resp.data);
  }, []);

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Installed Products</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {Sugges.map((val) => {
          return (
            <li>
              <div class="collapsible-header">
                Installed &nbsp;&nbsp;&nbsp; Product Name: {val.ProductName}
                &nbsp;&nbsp;&nbsp; Quantity : {val.Quantity}
              </div>

              <div class="collapsible-body">
                <p>Product Id : {val.ProductId}</p>
                <p>Product Name : {val.ProductName}</p>
                <p>Quantity : {val.Quantity}</p>
                <p>Product Category : {val.ProductCategory}</p>
                <p>Class : {val.Class}</p>
                <p> Manufacture : {val.Mansefacture}</p>
                <p> Installed : {val.Installed}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="CalBut">
        <Link to="/ADinvent">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
